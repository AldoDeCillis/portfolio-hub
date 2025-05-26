import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, children, className }) => {
    // Check if current page (you might want to use your router's active link detection)
    const isActive = typeof window !== 'undefined' && window.location.pathname === href;

    return (
        <motion.a
            href={href}
            className={clsx(
                'group relative px-4 py-2 text-sm font-medium transition-all duration-300',
                isActive ? 'text-white' : 'text-gray-300 hover:text-white',
                className,
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative z-10">{children}</span>

            {/* Hover background effect */}
            <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                layoutId="navbar-hover-bg"
            />

            {/* Active/Hover underline */}
            <motion.div
                className={clsx(
                    'absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400',
                    isActive ? 'w-full' : 'w-0 group-hover:w-full',
                )}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            />

            {/* Glowing dot for active state */}
            {isActive && (
                <motion.div
                    className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full bg-purple-400"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>
            )}

            {/* Subtle particle effect on hover */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px w-px rounded-full bg-purple-400/60"
                        style={{
                            left: `${30 + i * 20}%`,
                            top: '30%',
                        }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>
        </motion.a>
    );
};
