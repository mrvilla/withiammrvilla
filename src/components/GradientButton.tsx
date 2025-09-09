import type { ButtonHTMLAttributes } from 'react';

export type GradientButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

const GradientButton = ({
  children,
  className = '',
  fullWidth = false,
  type = 'button',
  ...rest
}: GradientButtonProps) => {
  return (
    <button
      type={type}
      className={[
        'gradient-button-bg',
        'inline-flex items-center justify-center',
        'text-white',
        'py-3 px-6', // 12px 24px
        'text-base font-semibold', // 16px, 600
        'rounded-lg',
        'transition-transform transition-shadow duration-200',
        'shadow-md hover:shadow-lg',
        'hover:-translate-y-0.5',
        fullWidth ? 'w-full' : '',
        className,
      ].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GradientButton;
