import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

const schedule = [
    { day: 'Lunedì', time: '20:30 - 22:30', class: 'Savate Agonisti & Amatori' },
    { day: 'Mercoledì', time: '20:30 - 22:30', class: 'Savate (Sparring & Tecnica)' },
    { day: 'Venerdì / Giovedì', time: '20:30 - 22:30', class: 'Preparazione Fisica' },
];

const Schedule = () => {
    return (
        <section id="schedule" className="py-24 bg-dark relative border-y border-white/5">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accentBlue/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Calendar className="text-accentBlue w-8 h-8" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-widest">
                            Orari <span className="text-accentBlue">Savate</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Pianifica il tuo allenamento. La costanza è la chiave per padroneggiare l'arte del combattimento.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="glass-card overflow-hidden !p-0 border-white/10 relative">

                        {/* Table Header */}
                        <div className="bg-white/5 border-b border-white/10 p-6 hidden md:grid grid-cols-3 gap-4 font-heading font-bold text-gray-300 uppercase tracking-widest text-sm">
                            <div>Giorno</div>
                            <div className="text-center">Orario</div>
                            <div className="text-right">Dettagli</div>
                        </div>

                        {/* Table Rows */}
                        <div className="divide-y divide-white/5">
                            {schedule.map((slot, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 grid md:grid-cols-3 gap-4 items-center hover:bg-white/5 transition-colors cursor-default group"
                                >
                                    <div className="font-heading font-black text-2xl text-white group-hover:text-accentBlue transition-colors">
                                        {slot.day}
                                    </div>
                                    <div className="flex items-center gap-2 md:justify-center text-accentRed font-bold font-mono text-lg">
                                        <Clock className="w-5 h-5" />
                                        {slot.time}
                                    </div>
                                    <div className="text-gray-400 md:text-right font-medium">
                                        {slot.class}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex items-start gap-4 p-6 bg-accentRed/10 border border-accentRed/20 rounded-xl"
                    >
                        <AlertCircle className="text-accentRed w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="text-white font-bold mb-1">Nota sui Corsi</h4>
                            <p className="text-gray-400 text-sm">
                                Gli orari sopra indicati si riferiscono ai corsi principali. Per lezioni private, preparazione atletica avanzata e prime prove gratuite, contatta la segreteria.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
