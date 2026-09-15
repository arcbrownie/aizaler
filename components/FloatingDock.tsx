'use client';

import React from 'react';
import { Flame, Sparkle, BookOpenText, DownloadSimple, TrendUp } from '@phosphor-icons/react';

export default function FloatingDock() {
  return (
    <div className="floating-dock-wrapper">
      <div className="dock-glass-body">
        <div className="dock-icons-container">
          {/* 1. 창업자 스토리 */}
          <a href="#origin-story" className="dock-item-wrapper group">
            <div className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
              <Sparkle size={20} weight="fill" className="text-amber-400" />
            </div>
            <span className="dock-bottom-label">창업 스토리</span>
          </a>

          {/* 2. 알고리즘 역공학 */}
          <a href="#algorithm" className="dock-item-wrapper group">
            <div className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
              <TrendUp size={20} weight="bold" className="text-rose-400" />
            </div>
            <span className="dock-bottom-label">알고리즘</span>
          </a>

          {/* 3. 메타 광고 실측 */}
          <a href="#meta-ads" className="dock-item-wrapper group">
            <div className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
              <Flame size={20} weight="duotone" className="text-[#60A5FA]" />
            </div>
            <span className="dock-bottom-label">광고 실측</span>
          </a>

          {/* 4. 실전 솔루션 */}
          <a href="#solutions" className="dock-item-wrapper group">
            <div className="relative p-2 rounded-full bg-[#3182f6] text-white shadow-md shadow-blue-500/30">
              <span className="green-beacon" />
              <BookOpenText size={20} weight="duotone" className="text-white" />
            </div>
            <span className="dock-bottom-label">솔루션</span>
          </a>

          {/* 5. 무료 쿼리북 */}
          <a href="#lead-magnet" className="dock-item-wrapper group">
            <div className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
              <DownloadSimple size={20} weight="bold" className="text-emerald-400" />
            </div>
            <span className="dock-bottom-label">무료 쿼리북</span>
          </a>
        </div>
      </div>
    </div>
  );
}
