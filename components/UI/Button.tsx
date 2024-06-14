// components/Button.tsx

import React, { ReactNode } from 'react';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'navy';
  variant?: 'solid' | 'soft' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  small?: boolean;
  roundedFull?: boolean;
  [key: string]: any; // Allow any additional unknown props
}

const Button: React.FC<ButtonProps> = ({ color = 'primary', variant = 'solid', className = '', onClick, children, small = true, roundedFull = true, ...props }) => {
  // Define Tailwind CSS classes based on the color variant
  const getColorClasses = () => {
    switch (variant) {
      case 'soft':
        switch (color) {
          case 'secondary':
            return 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-transparent';
          case 'success':
            return 'bg-teal-100 text-teal-800 hover:bg-teal-200 border border-transparent';
          case 'danger':
            return 'bg-red-100 text-red-800 hover:bg-red-200 border border-transparent';
          case 'navy':
            return 'bg-navy-100 text-navy-800 hover:bg-navy-200 border border-transparent';
          default:
            return 'bg-primary-100 text-primary-800 hover:bg-primary-200 border border-transparent';
        }
        break;
      case 'outline':
        switch (color) {
          case 'secondary':
            return 'border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500';
          case 'success':
            return 'border border-teal-800 text-teal-800 hover:border-teal-500 hover:text-teal-500';
          case 'danger':
            return 'border border-red-800 text-red-800 hover:border-red-500 hover:text-red-500';
          case 'navy':
            return 'border border-navy-800 text-navy-800 hover:border-navy-500 hover:text-navy-500';
          default:
            return 'border border-primary-800 text-primary-800 hover:border-primary-500 hover:text-primary-500';
        }
        break;
      case 'white':
        switch (color) {
          case 'secondary':
            return 'drop-shadow bg-white text-gray-800 shadow-sm hover:bg-gray-50';
          case 'success':
            return 'drop-shadow bg-white text-teal-800 shadow-sm hover:bg-teal-50';
          case 'danger':
            return 'drop-shadow bg-white text-red-800 shadow-sm hover:bg-red-50';
          case 'navy':
            return 'drop-shadow bg-white text-navy-800 shadow-sm hover:bg-navy-50';
          default:
            return 'drop-shadow bg-white text-primary-800 shadow-sm hover:bg-primary-50';
        }
        break;
      default:
        switch (color) {
          case 'secondary':
            return 'bg-gray-500 text-white hover:bg-gray-900 border border-transparent';
          case 'success':
            return 'bg-teal-500 text-white hover:bg-teal-900 border border-transparent';
          case 'danger':
            return 'bg-red-500 text-white hover:bg-red-900 border border-transparent';
          case 'navy':
            return 'bg-navy-500 text-white hover:bg-navy-900 border border-transparent';
          default:
            return 'bg-primary-500 text-white hover:bg-primary-900 border border-transparent dark:bg-navy-900 dark:hover:bg-primary-500';
        }
        break;
    }
  };

  const padding = small ? 'py-[8px] px-[16px]' : 'py-[16px] px-[32px]';
  const rounded = roundedFull ? 'rounded-full' : 'rounded-lg';

  return (
    <button
      className={`${className} ${padding} ${rounded} ${getColorClasses()} inline-flex justify-center items-center gap-x-2 disabled:opacity-50 disabled:pointer-events-none`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
