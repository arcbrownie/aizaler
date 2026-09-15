'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface ReviewItem {
  id: string | number;
  reviewer: string;
  quote: React.ReactNode;
  rating?: number;
  screenshotSrc: string;
  screenshotWidth?: number;
  screenshotHeight?: number;
}

interface FoldShadowReviewCardProps {
  key?: React.Key;
  review: ReviewItem;
  index?: number;
  className?: string;
}

const FOLD_CLIPS = [
  'polygon(0 16%, 100% 0, 100% 100%, 0 84%)',
  'polygon(0 16%, 100% 0, 100% 100%, 0 84%)',
  'polygon(0 0%, 100% 0, 100% 100%, 0 59%)',
  'polygon(0 4%, 100% 0, 100% 100%, 0 50%)',
];

/**
 * 접힘 그림자(Fold Shadow) 스코프 보정 리뷰 카드 컴포넌트
 * - 회전된 스크린샷 컨테이너 내부에 그림자 밴드를 클리핑하여 돌출 방지
 * - ResizeObserver 기반 실측값으로 카드가 끝나는 지점에서 그림자 서서히 종료
 * - 38~45% 폭으로 카드 시임 오차를 흡수해 밝은 틈새 방지
 */
export default function FoldShadowReviewCard({
  review,
  index = 0,
  className = '',
}: FoldShadowReviewCardProps) {
  const shotRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [foldHeight, setFoldHeight] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      const shot = shotRef.current;
      const card = cardRef.current;
      if (!shot || !card) return;
      const sr = shot.getBoundingClientRect();
      const cr = card.getBoundingClientRect();
      const h = cr.bottom - sr.top - 6; // 카드 하단 6px 위에서 마무리
      setFoldHeight(Math.max(0, Math.min(sr.height, h)));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (shotRef.current) ro.observe(shotRef.current);
    if (cardRef.current) ro.observe(cardRef.current);
    window.addEventListener('resize', measure);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const clip = FOLD_CLIPS[index % FOLD_CLIPS.length];

  return (
    <motion.article
      initial={{ opacity: 0.85, scale: 0.96, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px -8% 0px' }}
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
      className={`relative isolate overflow-visible bg-transparent px-2 sm:px-5 ${className}`}
    >
      <div className="relative grid grid-cols-1 grid-rows-1 items-start pb-5 sm:pb-6">
        {/* 스크린샷 컨테이너 (약간 회전 & 흰색 프레임) */}
        <div
          ref={shotRef}
          className="relative z-0 col-start-1 row-start-1 ml-1 mt-1 w-[64%] origin-center -rotate-[1.2deg] overflow-hidden rounded-xl border border-white/90 bg-white shadow-[0_18px_38px_rgba(23,27,31,0.2)] sm:ml-2 sm:mt-2 sm:w-[60%]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={review.screenshotSrc}
            alt={`${review.reviewer} 후기 원본`}
            width={review.screenshotWidth}
            height={review.screenshotHeight}
            className="block h-auto w-full object-contain"
            loading="lazy"
          />

          {/* 접힘 그림자: 이미지 내부 클리핑으로 스코프 완벽 일치 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 w-[45%] bg-gradient-to-r from-[#171b1f]/8 via-[#171b1f]/20 to-[#171b1f]/42 blur-[2px]"
            style={{
              height: foldHeight != null ? `${foldHeight}px` : '100%',
              clipPath: clip,
            }}
          />
        </div>

        {/* 인용 텍스트 카드 (스크린샷 위에 오버랩) */}
        <div className="relative z-10 col-start-1 row-start-1 ml-[25%] mt-1 w-[75%] sm:ml-[24%] sm:mt-2 sm:w-[76%]">
          <div
            ref={cardRef}
            className="relative z-10 flex w-full flex-col rounded-xl border border-white/10 bg-[linear-gradient(145deg,#293038_0%,#20262c_100%)] px-5 pb-4 pt-5 shadow-[0_30px_46px_-16px_rgba(23,27,31,0.62),0_12px_22px_-12px_rgba(23,27,31,0.45)] transition-transform duration-300 hover:scale-[1.008] sm:px-8 sm:pb-5 sm:pt-6"
          >
            <blockquote className="text-[15px] font-semibold leading-[1.7] tracking-[-0.025em] text-white break-keep sm:text-[20px] sm:leading-[1.65]">
              &ldquo; {review.quote} &rdquo;
            </blockquote>

            <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-3 sm:mt-4 sm:pt-3">
              <span className="text-[18px] font-black tracking-[0.08em] text-[#d9ff3f] sm:text-[22px]">
                {'★'.repeat(review.rating ?? 5)}
              </span>
              <span className="text-[14px] font-bold text-white sm:text-[16px]">
                {review.reviewer} 님
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
