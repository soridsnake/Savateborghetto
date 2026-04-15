import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-dark relative">
            <div className="container mx-auto px-6">

                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4"
                    >
                        Vieni a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentRed to-accentBlue">Trovarci</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-accentBlue origin-left"
                    ></motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 p-6 md:p-8 group hover:border-accentRed/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-accentRed/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accentRed transition-colors">
                                <MapPin className="text-accentRed group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Sede Storica</h4>
                                <p className="text-gray-400">Via Sidney Sonnino 14r<br />16159 Genova (GE) - Certosa</p>
                                <a
                                    href="https://maps.app.goo.gl/wLDw26WiCuGaVjWv6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center justify-center sm:justify-start gap-2 text-sm text-accentRed hover:text-white font-semibold transition-colors uppercase tracking-wider"
                                >
                                    <ExternalLink size={14} /> Apri in Maps
                                </a>
                            </div>
                        </div>

                        <div className="glass-card flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 p-6 md:p-8 group hover:border-accentBlue/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-accentBlue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accentBlue transition-colors">
                                <Mail className="text-accentBlue group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Scrivici</h4>
                                <p className="text-gray-400 text-sm md:text-base">Hai domande sui corsi o sulle iscrizioni? Affidati alla nostra segreteria via email.</p>
                                <a
                                    href="mailto:Boxeurs2008@gmail.com"
                                    className="mt-3 inline-block text-base md:text-lg text-white font-mono hover:text-accentBlue transition-colors break-all"
                                >
                                    Boxeurs2008@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glass-card flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 p-6 md:p-8 group hover:border-white/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                                <Phone className="text-white group-hover:text-dark transition-colors" />
                            </div>
                            <div className="w-full">
                                <h4 className="text-xl font-bold text-white mb-4">Chiama</h4>

                                <div className="flex flex-row justify-between items-center py-3 border-b border-white/5 gap-2">
                                    <span className="text-gray-400 text-sm">Bruno:</span>
                                    <a href="tel:+393488535857" className="text-white font-mono font-bold hover:text-accentRed transition-colors text-base">348 8535857</a>
                                </div>
                                <div className="flex flex-row justify-between items-center py-3 gap-2">
                                    <span className="text-gray-400 text-sm">Laura:</span>
                                    <a href="tel:+393420483752" className="text-white font-mono font-bold hover:text-accentRed transition-colors text-base">342 0483752</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Form / iframe embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card !p-2 h-[350px] lg:h-auto overflow-hidden relative group"
                    >
                        {/* Pulsing overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accentRed/10 to-accentBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.452796440263!2d8.887251776518774!3d44.44421440026214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343db35db8dd7%3A0x643dc52e8071e626!2sVia%20Sidney%20Sonnino%2C%2014%2C%2016159%20Genova%20GE!5e0!3m2!1sit!2sit!4v1709462800000!5m2!1sit!2sit"
                            className="w-full h-full border-0 rounded-xl grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
