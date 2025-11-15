'use client';

import React from 'react';
import { SparkleIcon, FacebookIcon, TwitterIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-gray-300">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="md:col-span-2">
                        <a href="#home" className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <SparkleIcon className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold text-white">Shine Space</span>
                        </a>
                        <p className="text-gray-400 max-w-sm mx-auto md:mx-0">Your trusted partner for a cleaner, happier space. Professionalism and perfection, every time.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">Why Us</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Get a Quote</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                        <ul className="space-y-2 text-gray-400 mb-4">
                            <li>contact@shinespace.com</li>
                            <li>(555) 123-4567</li>
                        </ul>
                         <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors"><FacebookIcon className="w-6 h-6"/></a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors"><TwitterIcon className="w-6 h-6"/></a>
                            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors"><InstagramIcon className="w-6 h-6"/></a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Shine Space. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;