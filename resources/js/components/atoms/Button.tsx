import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const base =
    'px-8 py-4 rounded-lg font-semibold uppercase text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white shadow-2xl hover:shadow-purple-500/25 focus:ring-purple-500',
    secondary:
      'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus:ring-white/20',
    ghost:
      'bg-transparent text-white hover:bg-white/10 focus:ring-white/30',
    danger:
      'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-500/25 focus:ring-red-500',
  } as const;

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
