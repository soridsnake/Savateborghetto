import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Storia', href: '#about' },
        { name: 'Corsi', href: '#courses' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Orari', href: '#schedule' },
        { name: 'Contatti', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 relative group"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}gallery/logo.jpg`}
                        alt="Logo Borghetto 1867"
                        loading="eager"
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-white/20 group-hover:border-accentRed transition-colors flex-shrink-0"
                    />
                    <span className="text-lg md:text-2xl font-heading font-black tracking-wider text-white">
                        BORGHETTO <span className="text-accentRed">1867</span>
                    </span>
                    <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accentBlue transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-accentRed transition-colors">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-darker/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-heading font-bold uppercase tracking-widest text-white hover:text-accentBlue"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
