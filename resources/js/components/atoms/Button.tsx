import { ButtonHTMLAttributes, FC } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
}
export const Button: FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
    const base = 'px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95';
    const variants = {
        primary:
            'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white shadow-2xl hover:shadow-purple-500/25',
        secondary: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20',
        ghost: 'bg-transparent text-white hover:bg-white/10',
    } as const;
    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};
