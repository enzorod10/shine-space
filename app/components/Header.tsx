'use client';

import React, { useState } from 'react';
import { SparkleIcon, MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'Why Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <SparkleIcon className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-dark tracking-tight">Shine Space</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-muted hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a 
            href="#contact" 
            className="hidden md:inline-block bg-primary text-dark font-semibold px-6 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
          >
            Free Quote
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-dark">
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div className={`md:hidden mt-4 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-muted hover:text-primary transition-colors duration-300" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-dark text-center font-semibold px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300" 
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;