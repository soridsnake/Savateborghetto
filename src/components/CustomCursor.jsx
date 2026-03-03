import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Solo per schermi non touch
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const updateHoverState = (e) => {
            const target = e.target;
            // Controlla se l'elemento su cui siamo ha cursor-pointer o è un link/bottone
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') || target.closest('button');
            setIsHovering(isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', updateHoverState);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', updateHoverState);
        };
    }, []);

    // Nascondi il cursore custom su mobile
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-accentRed rounded-full pointer-events-none z-[9999] mix-blend-screen hidden lg:block"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-accentBlue rounded-full pointer-events-none z-[9998] mix-blend-screen hidden lg:flex items-center justify-center overflow-hidden"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                    borderColor: isHovering ? 'rgba(255, 42, 95, 0.5)' : 'rgba(0, 240, 255, 0.4)'
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            />
        </>
    );
};

export default CustomCursor;
