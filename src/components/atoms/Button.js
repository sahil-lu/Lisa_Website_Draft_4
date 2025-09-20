import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variants = {
    primary: 'bg-neutral-950 hover:bg-neutral-800 text-white shadow-lg hover:shadow-xl focus:ring-neutral-950 hover:scale-105',
    secondary: 'border-2 border-purple-300 bg-white text-neutral-950 hover:bg-purple-50 hover:border-purple-400 focus:ring-purple-300 hover:scale-105 shadow-sm hover:shadow-md',
    outline: 'border-2 border-neutral-300 text-neutral-950 hover:bg-neutral-100 focus:ring-neutral-300 hover:scale-105 shadow-sm hover:shadow-md',
    ghost: 'text-purple-600 hover:bg-purple-50 focus:ring-purple-600 hover:scale-105'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
