import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden tech-border-corner";
  
  const variants = {
    primary: "bg-brand-cyan text-brand-base hover:bg-brand-cyanGlow hover:shadow-cyan-glow hover:text-glow-cyan",
    secondary: "bg-brand-surface border border-brand-steel/50 text-brand-silver hover:border-brand-cyan hover:text-brand-cyan hover:shadow-cyan-glow inset-ring ring-1 ring-transparent hover:ring-brand-cyan/30",
    outline: "bg-transparent border border-brand-techBlue/40 text-brand-techBlue hover:border-brand-cyan hover:text-brand-cyan hover:bg-brand-cyan/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Tech decoration lines */}
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50 group-hover:opacity-100 transition-opacity"></span>
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50 group-hover:opacity-100 transition-opacity"></span>
      
      <span className="relative z-10 flex items-center">
        {children}
        {withArrow && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </span>
      
      {/* Background scan effect for primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:animate-[shimmer_1s_infinite] pointer-events-none" />
      )}
    </button>
  );
};