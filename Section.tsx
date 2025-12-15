import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', dark = false }) => {
  return (
    <section className={`py-20 md:py-32 px-6 ${dark ? 'bg-brand-surface' : 'bg-transparent'} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};