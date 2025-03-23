"use client";

import type React from "react";

interface WavyBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function WavyBackground({
  children,
  className = "",
}: WavyBackgroundProps) {
  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-orange-400 to-orange-500 ${className}`}
    >
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[160vh] w-full overflow-hidden">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
