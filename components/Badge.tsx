import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-white/20 text-white border-white/30',
    secondary: 'bg-slate-600/20 text-slate-300 border-slate-600/30',
    accent: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
