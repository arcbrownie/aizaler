import React from 'react';

interface AdSlotProps {
  label?: string;
  className?: string;
}

export function AdSlot({ label = 'ADVERTISEMENT', className = '' }: AdSlotProps) {
  return (
    <div
      className={`my-8 p-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-50/70 text-center flex flex-col items-center justify-center gap-1.5 min-h-[120px] sm:min-h-[160px] ${className}`}
    >
      <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
        {label}
      </span>
      <p className="text-xs text-zinc-500 font-medium">
        구글 애드센스 승인 후 여기에 타겟 맞춤 광고가 노출됩니다.
      </p>
      <span className="text-[10px] text-zinc-400">
        (고단가 IT/AI/클라우드 매칭 슬롯)
      </span>
    </div>
  );
}
