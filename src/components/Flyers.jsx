import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const flyers = [
    {
        src: `${import.meta.env.BASE_URL}images/volantino_canguri.jpg`,
        title: 'Corso Canguri',
        subtitle: 'Bambini & Ragazzi',
    },
    {
        src: `${import.meta.env.BASE_URL}images/volantino_adulti.jpg`,
        title: 'Savate Adulti',
        subtitle: 'Amatori & Agonisti',
    },
];

const Flyers = () => {
    const [selected, setSelected] = useState(null);

    React.useEffect(() => {
        document.body.style.overflow = selected ? 'hidden' : 'auto';
    }, [selected]);

    return (
        <section className="py-24 bg-darker relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-wider">
                        Le Nostre <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentRed to-accentBlue">Locandine</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {flyers.map((flyer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelected(flyer)}
                            className="cursor-pointer group rounded-2xl overflow-hidden border border-white/10 hover:border-accentRed/50 transition-colors shadow-2xl"
                        >
                            <img
                                src={flyer.src}
                                alt={flyer.title}
                                className="w-full object-cover"
                            />
                            <div className="bg-dark/80 backdrop-blur px-5 py-4">
                                <p className="font-heading font-black text-white text-lg group-hover:text-accentRed transition-colors">{flyer.title}</p>
                                <p className="text-gray-400 text-sm uppercase tracking-widest">{flyer.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-darker/95 backdrop-blur-md"
                        onClick={() => setSelected(null)}
                    >
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 border border-white/20 z-[110] transition-colors"
                        >
                            <X className="w-7 h-7" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            src={selected.src}
                            alt={selected.title}
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Flyers;
