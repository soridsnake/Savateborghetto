import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const courses = [
    {
        id: 'assalto',
        title: 'Savate Assalto',
        subtitle: 'Tecnica & Tocco',
        description: "Il cuore della disciplina. Impara schivate al millimetro e colpi controllati.",
        detailedDescription: "L'assalto è la formula di competizione in cui la potenza dei colpi è rigorosamente vietata. I giudici valutano la precisione, lo stile, l'eleganza delle combinazioni di pugni e calci (Chassé, Fouetté, Revers) e la mobilità nello spazio. Perfetto per chi vuole apprendere l'arte della schivata e della complessa strategia schermistica della Boxe Francese pur senza i rischi del contatto pieno, sviluppando un altissimo livello di agilità e forma fisica.",
        image: 'https://images.unsplash.com/photo-1599552611410-fcde1ef60b37?q=80&w=800&auto=format&fit=crop',
        color: 'from-accentBlue to-blue-600'
    },
    {
        id: 'combat',
        title: 'Savate Combat',
        subtitle: 'Pieno Contatto',
        description: "La sublimazione agonistica. Potenza e resistenza estrema sul ring per vincere per K.O.",
        detailedDescription: "Il combattimento (Combat) rappresenta la massima espressione della Boxe Francese sportiva. Qui la potenza è autorizzata e si cerca costantemente la predominanza sull'avversario. Richiede una preparazione fisica eccezionale, enorme resistenza cardiovascolare, coraggio e un condizionamento specifico per incassare e portare colpi efficaci sul ring. Praticata indossando paradenti, conchiglia e le caratteristiche scarpette rigide.",
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
        color: 'from-accentRed to-orange-600'
    },
    {
        id: 'boxe',
        title: 'Boxe & Striking',
        subtitle: 'I Fondamentali',
        description: "Perfezionamento della boxe inglese integrata alle dinamiche di schivata della Boxe Francese.",
        detailedDescription: "Nella Boxe Francese, si dice comunemente che senza buone mani non c'è una buona Savate. Questo corso perfeziona i diretti, ganci e montanti tipici della English Boxing pura, unendola in maniera organica ai fluidi movimenti del tronco ed alle reattività delle gambe caratteristiche della nostra palestra. Una boxe pulita ed esplosiva costituisce la base essenziale per costruire successivamente le combinazioni avanzate di calcio.",
        image: 'https://images.unsplash.com/photo-1591117207239-788bf8ae6c3b?q=80&w=800&auto=format&fit=crop',
        color: 'from-stone-500 to-stone-400'
    },
    {
        id: 'preparazione',
        title: 'Preparazione',
        subtitle: 'Condizionamento',
        description: "Forza, esplosività e fiato. Circuiti intensivi e condizionamento del corpo al combattimento.",
        detailedDescription: "La prestazione sul ring richiede un cuore forte e muscoli reattivi pronti a esplodere in una frazione di secondo. Le nostre estenuanti sessioni di preparazione alla Savate includono variazioni continue: salto con la corda in rapidità, lavoro di potenza sul sacco pesante, sparring tecnico guidato, circuit training neuromuscolare e allenamenti massacranti sui pao (colpitori maestri). Costruiamo fisici funzionali in grado di sostenere i ritmi delle riprese da ring.",
        image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=800&auto=format&fit=crop',
        color: 'from-emerald-500 to-green-600'
    }
];

const Courses = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Impedisce lo scorrimento del corpo quando la modale è aperta
    useEffect(() => {
        if (selectedCourse) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedCourse]);

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
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedCourse(course);
                                                        }}
                                                        className="text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-accentRed transition-colors group/btn"
                                                    >
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

            {/* Modal Details Overlay */}
            <AnimatePresence>
                {selectedCourse && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-darker/90 backdrop-blur-md"
                        onClick={() => setSelectedCourse(null)}
                    >
                        <motion.div
                            layoutId={`modal-${selectedCourse.id}`} // Optional for layout animations
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-dark border border-white/10 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Banner */}
                            <div
                                className="h-48 md:h-64 w-full bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${selectedCourse.image})` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-tr ${selectedCourse.color} mix-blend-overlay opacity-60`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>

                                <button
                                    onClick={() => setSelectedCourse(null)}
                                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors border border-white/10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="absolute bottom-6 left-6 md:left-10">
                                    <h4 className="text-accentBlue text-xs md:text-sm font-bold uppercase tracking-widest mb-1 shadow-black">
                                        {selectedCourse.subtitle}
                                    </h4>
                                    <h2 className="text-3xl md:text-5xl font-black uppercase text-white drop-shadow-xl">
                                        {selectedCourse.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-10">
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                                    {selectedCourse.detailedDescription}
                                </p>

                                <div className="flex justify-end">
                                    <a href="#contact" onClick={() => setSelectedCourse(null)} className="btn-primary flex items-center gap-2 text-sm">
                                        Prenota una Lezione <ChevronRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Courses;
