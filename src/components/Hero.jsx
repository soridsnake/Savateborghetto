import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero = () => {
    // Animazione per il testo Marquee
    const marqueeVariants = {
        animate: {
            x: [0, -1450],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${import.meta.env.BASE_URL}gallery/645805153_884712094402739_1154084098491617035_n.jpg')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark"></div>
            </div>

            {/* Decorative Animated Particles / Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentRed/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentBlue/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
            />

            {/* Marquee Background Text */}
            <div className="absolute top-1/3 left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none z-0">
                <motion.div variants={marqueeVariants} animate="animate" className="inline-block font-heading font-black text-[8rem] md:text-[15rem] leading-none uppercase">
                    SAVATE • BOXE FRANCESE • CHASSÉ • FOUETTÉ • SAVATE • BOXE FRANCESE •
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">

                {/* Main Content */}
                <div className="lg:col-span-8 text-center lg:text-left mt-20 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-accentBlue font-heading font-bold tracking-widest uppercase mb-4 text-xs sm:text-sm md:text-base flex items-center justify-center lg:justify-start gap-2"
                        >
                            <div className="w-8 h-[2px] bg-accentBlue hidden md:block"></div>
                            Polisportiva Dilettantistica Borghetto 1867
                        </motion.h2>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tight relative">
                            L'ELEGANZA DELLA <br className="hidden md:block" />
                            <span className="relative inline-block mt-2">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accentRed to-white">
                                    SAVATE
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-[8px] bg-accentRed"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                    style={{ transformOrigin: "left" }}
                                ></motion.span>
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed drop-shadow-lg"
                        >
                            Dal 1867 tramandiamo i segreti della <strong>Boxe Francese</strong> a Genova Certosa.
                            Un ambiente sportivo storico e rigoroso dove la nobile arte della Savate forgia atleti eleganti e temibili sul ring.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#courses"
                                className="btn-primary flex items-center justify-center gap-2 group"
                            >
                                Scopri la Disciplina
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#about"
                                className="btn-secondary"
                            >
                                La Nostra Storia
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Side Element / Stat */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ perspective: 1000 }}
                    className="lg:col-span-4 hidden lg:flex justify-end"
                >
                    <motion.div
                        whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="glass-card p-8 border-accentRed/30 relative group overflow-hidden shadow-glass"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accentRed/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 w-full text-center">
                            <div className="flex justify-center mb-6">
                                <div className="flex h-10 rounded shadow-md overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity border border-white/10">
                                    <div className="w-5 bg-blue-700"></div>
                                    <div className="w-5 bg-white"></div>
                                    <div className="w-5 bg-red-600"></div>
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-white mb-2 group-hover:text-accentRed transition-colors drop-shadow-md">BOXE FRANCESE</h3>
                            <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accentBlue animate-pulse"></span>
                                Sport da Combattimento
                            </p>
                            <div className="w-16 h-1 bg-gradient-to-r from-accentRed to-accentBlue mt-6 mx-auto rounded-full"></div>
                            <p className="mt-4 text-sm text-gray-300 font-medium leading-relaxed">
                                Pugni eleganti derivati dal pugilato e calci devastanti (Fouetté, Chassé, Revers) tirati con la scarpa rigida. Un'arte unica al mondo.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest">
                    <span className="tracking-[0.3em]">Scroll</span>
                    <ArrowDown className="w-5 h-5" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
