'use client';

import React from 'react';
import { Flame, Sparkle, BookOpenText, DownloadSimple, TrendUp } from '@phosphor-icons/react';

export default function FloatingDock() {
  return (
    <div className="floating-dock-wrapper">
      <div className="dock-glass-body">
        <div className="dock-icons-container">
          {/* 1. HOT 챌린지 */}
          <a href="#solutions" className="dock-item-wrapper group">
            <div className="relative p-2 rounded-full bg-[#3182f6] text-white shadow-md shadow-blue-500/30">
              <span className="green-beacon" />
              <Flame size={20} weight="duotone" className="text-white" />
            </div>
            <span className="dock-bottom-label">실전 솔루션</span>
          </a>

          {/* 2. 실패 복기록 */}
          <a href="#lessons" className="dock-item-wrapper group">
            <div className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
              <TrendUp size={20} weight="duotone" className="text-amber-400" />
            </div>
            <span className="dock-bottom-label">실패 복기록</span>
          </a>

          {/* 3. 실전 칼럼 */}
          <a href="#columns" className="dock-item-wrapper group">
            <div className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
              <BookOpenText size={20} weight="duotone" className="text-purple-300" />
            </div>
            <span className="dock-bottom-label">엔지니어 칼럼</span>
          </a>

          {/* 4. 무료 번들 */}
          <a href="#lead-magnet" className="dock-item-wrapper group">
            <div className="p-2 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors">
              <DownloadSimple size={20} weight="bold" className="text-emerald-400" />
            </div>
            <span className="dock-bottom-label">무료 번들</span>
          </a>
        </div>
      </div>
    </div>
  );
}
