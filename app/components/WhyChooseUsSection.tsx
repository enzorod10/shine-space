'use client';

import React from 'react';
import { ShieldCheckIcon, UsersIcon, GlobeAltIcon, HeartIcon } from './Icons';
import Image from 'next/image';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <UsersIcon className="w-7 h-7 text-primary" />,
        title: 'Experienced Professionals',
        description: 'Our team is trained, vetted, and dedicated to providing a top-notch cleaning service every time.'
    },
    {
        icon: <ShieldCheckIcon className="w-7 h-7 text-primary" />,
        title: 'Bonded & Insured',
        description: 'Your peace of mind is our priority. We are fully insured for your protection and confidence.'
    },
    {
        icon: <GlobeAltIcon className="w-7 h-7 text-primary" />,
        title: 'Eco-Friendly Products',
        description: 'We use safe, non-toxic, and environmentally friendly cleaning products for a healthy home.'
    },
    {
        icon: <HeartIcon className="w-7 h-7 text-primary" />,
        title: 'Satisfaction Guaranteed',
        description: 'We stand by our work. If you\'re not 100% satisfied, we\'ll make it right. That\'s our promise.'
    }
];

const WhyChooseUsSection: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="opacity-0 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Why Choose Shine Space?</h2>
                        <p className="text-lg text-muted mb-8">
                            We&apos;re more than just a cleaning company. We are a team of professionals passionate about creating clean, healthy, and happy environments for our clients.
                        </p>
                        <div className="space-y-6 mb-10">
                            {features.map((feature, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-start gap-4 opacity-0 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="flex-shrink-0 bg-primary-light p-3 rounded-full">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-dark">{feature.title}</h3>
                                        <p className="text-muted mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                         <a 
                            href="#contact" 
                            className="bg-primary text-dark font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg opacity-0 animate-fade-in-up"
                            style={{ animationDelay: '0.8s' }}
                         >
                           Book Your Cleaning Today
                        </a>
                    </div>
                    <div className="hidden lg:block opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
                        <Image 
                            width={1000}
                            height={14}
                            className='rounded-xl mr-4'
                            src='/employees.png'
                            alt='The Shine Space professional cleaning team'
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;