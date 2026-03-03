import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-dark min-h-screen text-white font-body selection:bg-accentRed selection:text-white cursor-auto lg:cursor-none">
            <CustomCursor />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Courses />
                <Schedule />
                <Contact />
            </main>

            <footer className="bg-darker border-t border-white/10 py-12 relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-accentRed/5 blur-[100px] rounded-[100%] pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
                    <div className="font-heading font-black text-2xl tracking-widest text-white mb-2">
                        BORGHETTO <span className="text-accentRed">1867</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-6 max-w-md">
                        L'antica arte della Savate e gli sport da combattimento nel cuore di Genova Certosa. Rispetto, disciplina, sacrificio.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600">
                        <p>&copy; {new Date().getFullYear()} Polisportiva Dilettantistica Borghetto 1867. Tutti i diritti riservati.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
