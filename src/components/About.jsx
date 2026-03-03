import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Trophy, History, Users } from 'lucide-react';

const AnimatedCounter = ({ from, to, duration = 2 }) => {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration: duration,
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(value);
                    }
                }
            });
            return () => controls.stop();
        }
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{from}</span>;
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={itemVariants}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] w-12 bg-accentRed"></div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wider">
                            La Nostra <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentRed to-accentBlue">Storia</span>
                        </h2>
                        <div className="h-[2px] w-12 bg-accentBlue"></div>
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto md:text-lg">
                        Fondata nel 1867, la Polisportiva Dilettantistica Borghetto rappresenta l'eccellenza dello sport da combattimento in Valpolcevera.
                    </p>
                </motion.div>

                {/* Dynamic Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="glass-card flex flex-col items-center justify-center p-6 border-accentRed/20 hover:border-accentRed/50 transition-colors">
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-heading">
                            <AnimatedCounter from={0} to={1867} duration={2.5} />
                        </h3>
                        <p className="text-accentRed text-sm uppercase tracking-widest font-bold">Fondazione</p>
                    </div>
                    <div className="glass-card flex flex-col items-center justify-center p-6 border-accentBlue/20 hover:border-accentBlue/50 transition-colors">
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-heading">
                            +<AnimatedCounter from={0} to={500} duration={2} />
                        </h3>
                        <p className="text-accentBlue text-sm uppercase tracking-widest font-bold">Atleti Formati</p>
                    </div>
                    <div className="glass-card flex flex-col items-center justify-center p-6 border-accentRed/20 hover:border-accentRed/50 transition-colors">
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-heading">
                            +<AnimatedCounter from={0} to={50} duration={2} />
                        </h3>
                        <p className="text-accentRed text-sm uppercase tracking-widest font-bold">Gare Vinte</p>
                    </div>
                    <div className="glass-card flex flex-col items-center justify-center p-6 border-accentBlue/20 hover:border-accentBlue/50 transition-colors">
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-heading">
                            <AnimatedCounter from={0} to={100} duration={2} />%
                        </h3>
                        <p className="text-accentBlue text-sm uppercase tracking-widest font-bold">Passione</p>
                    </div>
                </div>

                {/* Feature Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-3 gap-8 mb-24"
                >
                    <motion.div variants={itemVariants} className="glass-card group hover:border-accentRed/50 hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-accentRed/10 flex items-center justify-center mb-6 overflow-hidden">
                            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                <History className="text-accentRed w-8 h-8" />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Tradizione Secolare</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Dalle origini ottocentesche ad oggi, portiamo avanti i valori fondanti di rispetto, dedizione e fratellanza che contraddistinguono la nostra sede storica.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="glass-card group hover:border-accentBlue/50 relative overflow-hidden hover:-translate-y-2 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accentBlue/5 rounded-bl-[100px] -z-10 group-hover:bg-accentBlue/20 transition-colors duration-500"></div>
                        <div className="w-14 h-14 rounded-xl bg-accentBlue/10 flex items-center justify-center mb-6 overflow-hidden">
                            <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Trophy className="text-accentBlue w-8 h-8" />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Eccellenza Sportiva</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Un vivaio di campioni. I nostri atleti gareggiano regolarmente nei circuiti F.I.S.A., portando in alto i colori del Borghetto 1867.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="glass-card group hover:border-white/30 hover:-translate-y-2 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 overflow-hidden">
                            <motion.div whileHover={{ y: -5 }} transition={{ yoyo: Infinity, duration: 0.3 }}>
                                <Users className="text-white w-8 h-8" />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Ambiente Inclusivo</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Un luogo per tutti. Dai principianti agli agonisti, offriamo percorsi personalizzati in un clima di supporto reciproco e crescita personale.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Instructors Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-darker/80 p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden shadow-glass backdrop-blur-xl">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-accentRed/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase">
                            I Nostri <span className="text-accentRed">Maestri</span>
                        </h3>
                        <p className="text-gray-400 mb-10 max-w-md md:text-lg">
                            La qualità dell'insegnamento è il nostro punto di forza. Istruttori qualificati e appassionati condurranno il tuo percorso.
                        </p>

                        <div className="space-y-8">
                            {/* Bruno D'Astice */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="group relative pl-8 border-l-2 border-white/10 hover:border-accentRed transition-colors cursor-default"
                            >
                                <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-darker border-2 border-white/20 group-hover:border-accentRed group-hover:bg-accentRed transition-all shadow-[0_0_10px_rgba(255,42,95,0)] group-hover:shadow-[0_0_10px_rgba(255,42,95,0.8)]"></div>
                                <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-accentRed transition-colors">Maestro Bruno D'Astice</h4>
                                <div className="text-xs uppercase tracking-widest text-accentBlue mb-3 font-semibold bg-accentBlue/10 inline-block px-3 py-1 rounded-full">Affiliazione F.I.S.A.</div>
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    Colonna portante della Polisportiva. Unisce decenni di esperienza sui ring alla profonda conoscenza tecnica della Savate tradizionale francese. La sua storia incarna i valori del Borghetto.
                                </p>
                            </motion.div>

                            {/* Daniele Bottero */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="group relative pl-8 border-l-2 border-white/10 hover:border-accentBlue transition-colors cursor-default"
                            >
                                <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-darker border-2 border-white/20 group-hover:border-accentBlue group-hover:bg-accentBlue transition-all shadow-[0_0_10px_rgba(0,240,255,0)] group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                                <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-accentBlue transition-colors">Istruttore Daniele Bottero</h4>
                                <div className="text-xs uppercase tracking-widest text-accentRed mb-3 font-semibold bg-accentRed/10 inline-block px-3 py-1 rounded-full">Tecnica e Dinamismo</div>
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    Preparazione atletica all'avanguardia. Specializzato negli allenamenti ad alta intensità per atleti che mirano al superamento dei propri limiti fisici e mentali. L'energia della nuova generazione.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -15 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="hidden lg:block relative"
                    >
                        {/* Visual representation of the matrix/ring */}
                        <div className="aspect-square w-full max-w-[450px] mx-auto rounded-full border border-white/5 relative flex items-center justify-center p-8 bg-dark/30 shadow-2xl">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border border-dashed border-accentBlue/30"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-10 rounded-full border border-dashed border-accentRed/30"
                            />
                            <div className="w-2/3 h-2/3 bg-gradient-to-tr from-accentRed/30 to-accentBlue/30 rounded-full blur-[80px]"></div>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="absolute text-center z-10 glass-card p-8 shadow-[0_0_50px_rgba(255,42,95,0.2)] border-white/20"
                            >
                                <p className="font-heading font-black text-5xl text-white tracking-widest leading-none drop-shadow-lg">SFIDA</p>
                                <p className="font-heading font-black text-3xl text-accentRed tracking-widest my-1 drop-shadow-md">I TUOI</p>
                                <p className="font-heading font-black text-4xl text-accentBlue tracking-widest leading-none drop-shadow-md">LIMITI</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
