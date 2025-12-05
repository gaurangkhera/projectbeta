import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variantClasses = {
    primary: "bg-white text-slate-900 hover:bg-slate-100 glow-effect",
    secondary: "bg-slate-600 hover:bg-slate-500 text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-slate-900 glass-hover",
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
