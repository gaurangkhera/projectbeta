import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function Card({ children, className = '', hover = true, style }: CardProps) {
  return (
    <div className={`glass rounded-xl p-6 ${hover ? 'glass-hover' : ''} ${className}`} style={style}>
      {children}
    </div>
  );
}
