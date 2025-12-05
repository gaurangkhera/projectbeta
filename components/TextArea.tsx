import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function TextArea({ label, className = '', ...props }: TextAreaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-slate-300">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 rounded-lg glass border border-slate-600/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-white placeholder-slate-600 resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
