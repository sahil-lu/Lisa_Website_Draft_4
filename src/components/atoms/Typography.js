import React from 'react';

const Typography = ({ 
  children, 
  variant = 'body', 
  className = '', 
  as: Component = 'p',
  ...props 
}) => {
  const variants = {
    h1: 'text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-950 leading-tight',
    h2: 'text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 leading-tight',
    h3: 'text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-950 leading-tight',
    h4: 'text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-950 leading-tight',
    h5: 'text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-950 leading-tight',
    h6: 'text-base sm:text-lg lg:text-xl font-semibold text-neutral-950 leading-tight',
    body: 'text-base sm:text-lg text-neutral-950 leading-relaxed',
    bodySmall: 'text-sm sm:text-base text-neutral-950 leading-relaxed',
    caption: 'text-xs sm:text-sm text-neutral-600 leading-relaxed',
    lead: 'text-lg sm:text-xl lg:text-2xl text-neutral-950 leading-relaxed font-medium'
  };
  
  const classes = `${variants[variant]} ${className}`;
  
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;