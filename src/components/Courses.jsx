import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const courses = [
    {
        id: 'assalto',
        title: 'Savate Assalto',
        subtitle: 'Tecnica & Tocco',
        description: "Il cuore della disciplina. Impara schivate al millimetro e colpi controllati. L’assalto si fonda sull'agilità, l'eleganza tecnica e il tocco non affondato.",
        image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
        color: 'from-accentBlue to-blue-600'
    },
    {
        id: 'combat',
        title: 'Savate Combat',
        subtitle: 'Pieno Contatto',
        description: "La sublimazione agonistica. Potenza e resistenza portate all'estremo: si sale sul ring per vincere per K.O. Disciplina esigente, dedicata agli atleti più esperti.",
        image: 'https://images.unsplash.com/photo-1622599511051-16f55a1234d0?q=80&w=800&auto=format&fit=crop',
        color: 'from-accentRed to-orange-600'
    },
    {
        id: 'boxe',
        title: 'Boxe & Striking',
        subtitle: 'I Fondamentali',
        description: "Senza buone mani, non c'è una buona Savate. Il perfezionamento della boxe inglese integrata alle dinamiche di schivata della Boxe Francese.",
        image: 'https://images.unsplash.com/photo-1599901860904-17e0ed3af3ea?q=80&w=800&auto=format&fit=crop',
        color: 'from-stone-500 to-stone-400'
    },
    {
        id: 'preparazione',
        title: 'Preparazione',
        subtitle: 'Condizionamento',
        description: "Forza, esplosività e fiato. Circuiti ad altissima intensità progettati appositamente per condizionare il corpo del lottatore ad affrontare i round più duri sul ring.",
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
        color: 'from-emerald-500 to-green-600'
    }
];

const Courses = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="courses" className="py-24 bg-darker relative">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-2">
                            Le Sfaccettature <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentRed to-accentBlue">Della Savate</span>
                        </h2>
                        <div className="w-20 h-1 bg-accentRed mt-4"></div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-400 max-w-md md:text-right"
                    >
                        Scegli il livello di intensità. Dall'apprendimento tecnico della disciplina madre, al combattimento a pieno contatto.
                    </motion.p>
                </div>

                {/* Expanding Accordion Row */}
                <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] w-full gap-4">
                    {courses.map((course, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={course.id}
                                layout
                                onClick={() => setActiveIndex(index)}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    layout: { type: "spring", stiffness: 200, damping: 30 },
                                    opacity: { duration: 0.5, delay: index * 0.1 }
                                }}
                                className={`relative rounded-[2rem] overflow-hidden cursor-pointer group isolation-auto h-64 lg:h-full ${isActive ? 'lg:flex-[3]' : 'lg:flex-[0.8]'}`}
                            >
                                {/* Background Image */}
                                <div
                                    className={`absolute inset-0 bg-cover bg-top lg:bg-center transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100 group-hover:scale-110'}`}
                                    style={{ backgroundImage: `url(${course.image})`, filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)' }}
                                ></div>

                                {/* Gradients */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-80' : 'opacity-80 bg-black/70 group-hover:opacity-60'} bg-gradient-to-t from-darker via-darker/60 to-transparent`}></div>

                                {/* Active Highlight Gradient */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.8 }}
                                            exit={{ opacity: 0 }}
                                            className={`absolute inset-0 mix-blend-overlay bg-gradient-to-tr ${course.color}`}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                    <motion.div layout="position" className="transform-gpu">
                                        {/* Subtitle Rotated for inactive desktop */}
                                        {!isActive && (
                                            <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 -rotate-90 origin-left whitespace-nowrap text-xl font-heading font-black text-white/50 tracking-widest uppercase">
                                                {course.title}
                                            </div>
                                        )}

                                        <div className={`transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-100 lg:opacity-0 translate-y-4'}`}>
                                            <h4 className="flex items-center gap-2 text-white/70 text-sm font-bold uppercase tracking-widest mb-2">
                                                {course.subtitle}
                                            </h4>
                                            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase drop-shadow-md">{course.title}</h3>

                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-white/80 md:text-lg leading-relaxed mb-6 max-w-lg font-light text-shadow-sm">
                                                        {course.description}
                                                    </p>
                                                    <button className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-accentRed transition-colors group/btn">
                                                        Dettagli Corso <span className="w-8 h-[2px] bg-accentRed inline-block group-hover/btn:w-12 transition-all"></span>
                                                    </button>
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Courses;
