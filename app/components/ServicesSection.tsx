'use client';

import React from 'react';
import { HomeIcon, BuildingOfficeIcon, StarIcon } from './Icons';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <HomeIcon className="w-8 h-8 text-primary" />,
    title: 'Residential Cleaning',
    description: 'Weekly, bi-weekly, or monthly cleaning services to keep your home fresh and tidy. We handle everything from dusting to mopping.'
  },
  {
    icon: <BuildingOfficeIcon className="w-8 h-8 text-primary" />,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning for offices, retail spaces, and other commercial properties. Create a healthy environment for your employees and customers.'
  },
  {
    icon: <StarIcon className="w-8 h-8 text-primary" />,
    title: 'Deep Cleaning',
    description: 'A thorough, top-to-bottom clean. Perfect for move-ins, move-outs, or when you need a comprehensive refresh of your space.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-light scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark">Our Cleaning Services</h2>
          <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">We offer a range of professional services to meet your specific cleaning needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-start mb-6">
                 <div className="bg-primary-light p-4 rounded-full">
                    {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-dark">{service.title}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;