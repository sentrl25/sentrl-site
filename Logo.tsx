import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      <div className="relative w-11 h-11 flex items-center justify-center">
        {/* Animated Glow Backdrop */}
        <div className="absolute inset-0 bg-brand-cyan/10 rounded-full blur-xl group-hover:bg-brand-cyan/30 transition-all duration-500" />
        
        {/* Complex Engineering Mark */}
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          {/* Rotating Outer Data Ring - Scanning Field */}
          <g className="origin-center animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity">
            <circle cx="22" cy="22" r="20" stroke="#1E7FBF" strokeWidth="0.5" strokeDasharray="4 2" />
            <circle cx="22" cy="22" r="17" stroke="#4C6F8A" strokeWidth="0.5" strokeDasharray="20 10" />
            <path d="M22 1V4M22 40V43M43 22H40M4 22H1" stroke="#3FE6FF" strokeWidth="1" />
          </g>

          {/* Core Shield Structure - The Sovereign Layer */}
          <path 
            d="M22 4L38 10V21C38 31.5 22 41 22 41C22 41 6 31.5 6 21V10L22 4Z" 
            fill="#06080A" 
            stroke="#4C6F8A" 
            strokeWidth="1" 
            className="group-hover:stroke-brand-cyan transition-colors duration-500" 
          />
          
          {/* Inner Circuitry - The Logic Layer */}
          <path d="M22 10V16" stroke="#3FE6FF" strokeWidth="1.5" strokeLinecap="square" />
          <path d="M22 28V35" stroke="#3FE6FF" strokeWidth="1.5" strokeLinecap="square" />
          <path d="M14 22H30" stroke="#3FE6FF" strokeWidth="1.5" strokeLinecap="square" />
          
          {/* The Core Node - Processing Unit */}
          <rect x="19" y="19" width="6" height="6" fill="#0E1419" stroke="#3FE6FF" strokeWidth="1.5" className="animate-pulse" />
          
          {/* Active Vertices - Connection Points */}
          <circle cx="22" cy="4" r="1" fill="#3FE6FF" className="animate-pulse" />
          <circle cx="38" cy="10" r="1" fill="#3FE6FF" className="animate-pulse" />
          <circle cx="6" cy="10" r="1" fill="#3FE6FF" className="animate-pulse" />
          <circle cx="22" cy="41" r="1" fill="#3FE6FF" className="animate-pulse" />
        </svg>
      </div>
      
      <div className="flex flex-col justify-center">
        <span className="font-sans font-bold tracking-[0.25em] text-xl text-brand-silver group-hover:text-brand-cyan group-hover:text-glow-cyan transition-colors duration-300">
          SENTRL
        </span>
        <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <span className="h-[1px] w-full bg-brand-cyan/50 max-w-[40px]"></span>
            <span className="text-[0.55rem] font-mono text-brand-cyan whitespace-nowrap tracking-wider">INTELLIGENT INFRASTRUCTURE</span>
        </div>
      </div>
    </div>
  );
};