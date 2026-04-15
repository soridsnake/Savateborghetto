import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';

const base = import.meta.env.BASE_URL;
const images = [
    `${base}gallery/621801851_854615964079019_7526963880742474779_n.jpg`,
    `${base}gallery/621833369_855758573964758_50932420791238669_n.jpg`,
    `${base}gallery/621983987_854616094079006_515508634614128152_n.jpg`,
    `${base}gallery/622158990_855758323964783_805686341553617764_n.jpg`,
    `${base}gallery/626819812_860362580171024_6653573539548146712_n.jpg`,
    `${base}gallery/626831401_861159376758011_1181317483718568863_n.jpg`,
    `${base}gallery/626854397_860349470172335_1255162568605718074_n.jpg`,
    `${base}gallery/631088578_867120009495281_6297230439781311542_n.jpg`,
    `${base}gallery/633509224_869881365885812_7118345812094664593_n.jpg`,
    `${base}gallery/645805153_884712094402739_1154084098491617035_n.jpg`,
    `${base}gallery/645865191_884711987736083_4583908917819263936_n.jpg`,
    `${base}gallery/645903290_884712054402743_7677284822330335894_n.jpg`,
    `${base}gallery/645915081_884711947736087_359615358705116384_n.jpg`,
    `${base}gallery/646133805_884711914402757_3815039604104631912_n.jpg`,
    `${base}gallery/646141738_884712024402746_8031243329854533426_n.jpg`,
];

import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    // Basic Carousel
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: 'center',
        containScroll: 'trimSnaps'
    }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

    // Reverse Carousel for dynamic effect
    const [emblaRefReverse] = useEmblaCarousel({
        loop: true,
        align: 'center',
        containScroll: 'trimSnaps'
    }, [Autoplay({ delay: 3000, stopOnInteraction: false, playDirection: 'backward' })]);


    const rowOneImages = images.slice(0, Math.ceil(images.length / 2));
    const rowTwoImages = images.slice(Math.ceil(images.length / 2));

    // Impedisce lo scorrimento del corpo quando la modale è aperta
    React.useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage]);

    return (
        <section id="gallery" className="py-24 bg-dark relative overflow-hidden border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accentRed/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-accentRed mb-2 flex items-center justify-center gap-2">
                        <span className="w-8 h-[2px] bg-accentRed hidden md:block"></span>
                        Borghetto 1867
                        <span className="w-8 h-[2px] bg-accentRed hidden md:block"></span>
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                        I Nostri <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentRed to-accentBlue">Ragazzi</span>
                    </h3>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div className="w-full space-y-4 md:space-y-6 flex flex-col items-center">

                {/* Row 1 - Forward */}
                <div className="w-[110vw] max-w-none ml-[-5vw] overflow-hidden" ref={emblaRef}>
                    <div className="flex touch-pan-y h-[160px] sm:h-[220px] md:h-[350px]">
                        {rowOneImages.map((src, index) => (
                            <div
                                className="flex-[0_0_auto] min-w-[240px] sm:min-w-[320px] md:min-w-[450px] mx-1.5 md:mx-3 relative group rounded-xl md:rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                                key={index}
                                onClick={() => setSelectedImage(src)}
                            >
                                <img
                                    src={src}
                                    alt=""
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Backward */}
                <div className="w-[110vw] max-w-none ml-[-5vw] overflow-hidden" ref={emblaRefReverse}>
                    <div className="flex touch-pan-y h-[160px] sm:h-[220px] md:h-[350px]">
                        {rowTwoImages.map((src, index) => (
                            <div
                                className="flex-[0_0_auto] min-w-[240px] sm:min-w-[320px] md:min-w-[450px] mx-1.5 md:mx-3 relative group rounded-xl md:rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                                key={index}
                                onClick={() => setSelectedImage(src)}
                            >
                                <img
                                    src={src}
                                    alt=""
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Modal Highlights - Full Screen Image Viewer */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-darker/95 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors border border-white/20 z-[110]"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.img
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={selectedImage}
                            alt="Foto Borghetto 1867"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
