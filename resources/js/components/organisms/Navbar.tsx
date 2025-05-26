import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { Logo } from '../molecules/Logo';
import { NavLink } from '../molecules/NavLink';

export const Navbar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 50);
    });

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/cv-wizard', label: 'CV Wizard' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
                isScrolled ? 'border-b border-purple-500/20 bg-black/80 shadow-lg shadow-purple-500/10 backdrop-blur-xl' : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {/* Gradient border effect */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                        <Logo />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <NavLink href={item.href}>{item.label}</NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        className="hidden md:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <motion.a
                            href="/contact"
                            className="relative inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:from-purple-500 hover:to-pink-500"
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition-opacity duration-300 hover:opacity-100" />
                            <span className="relative">Get Started</span>
                        </motion.a>
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                            }}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 transition-colors duration-200 hover:bg-gray-700/50 hover:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div className="flex h-6 w-6 flex-col items-center justify-center" animate={isMobileMenuOpen ? 'open' : 'closed'}>
                                <motion.span
                                    className="block h-0.5 w-5 bg-current"
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 2 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="mt-1 block h-0.5 w-5 bg-current"
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="mt-1 block h-0.5 w-5 bg-current"
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -2 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <motion.div
                className="md:hidden"
                initial={false}
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                variants={{
                    open: {
                        opacity: 1,
                        height: 'auto',
                        transition: {
                            duration: 0.3,
                            ease: 'easeOut',
                            staggerChildren: 0.1,
                        },
                    },
                    closed: {
                        opacity: 0,
                        height: 0,
                        transition: {
                            duration: 0.3,
                            ease: 'easeIn',
                            staggerChildren: 0.05,
                            staggerDirection: -1,
                        },
                    },
                }}
                style={{ overflow: 'hidden' }}
            >
                <div className="space-y-2 border-t border-purple-500/20 bg-black/95 px-4 pt-2 pb-6 backdrop-blur-xl">
                    {navItems.map((item) => (
                        <motion.div
                            key={item.href}
                            variants={{
                                open: { opacity: 1, x: 0 },
                                closed: { opacity: 0, x: -20 },
                            }}
                        >
                            <a
                                href={item.href}
                                className="block rounded-lg border border-transparent px-4 py-3 text-base font-medium text-gray-300 transition-all duration-200 hover:border-purple-500/20 hover:bg-purple-500/10 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </motion.div>
                    ))}

                    {/* Mobile CTA */}
                    <motion.div
                        className="pt-4"
                        variants={{
                            open: { opacity: 1, x: 0 },
                            closed: { opacity: 0, x: -20 },
                        }}
                    >
                        <a
                            href="/contact"
                            className="block w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:from-purple-500 hover:to-pink-500"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating particles effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-1 w-1 rounded-full bg-purple-400/30"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: '50%',
                        }}
                        animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>
        </motion.nav>
    );
};
