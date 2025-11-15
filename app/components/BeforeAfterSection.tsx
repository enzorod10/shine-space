'use client';

import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { LivingRoomIcon, KitchenUtensilIcon, BathroomIcon } from './Icons';

const cleaningExamples = [
    {
        label: 'Living Room',
        icon: <LivingRoomIcon className="w-6 h-6 mr-2" />,
        beforeImage: "./living_room_before.png",
        afterImage: "./living_room_after.png"
    },
    {
        label: 'Kitchen Chaos',
        icon: <KitchenUtensilIcon className="w-6 h-6 mr-2" />,
        beforeImage: "./kitchen_before.png",
        afterImage: "./kitchen_after.png"
    },
    {
        label: 'Bedroom Refresh',
        icon: <BathroomIcon className="w-6 h-6 mr-2" />,
        beforeImage: "./bedroom_before.png",
        afterImage: "./bedroom_after.png",
    }
];

const BeforeAfterSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeExample = cleaningExamples[activeIndex];

    return (
        <section id="before-after" className="py-24 bg-light scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 opacity-0 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark">See the Transformation</h2>
                    <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">Our meticulous work speaks for itself. Select a room below to see the Shine Space difference.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {cleaningExamples.map((example, index) => (
                        <button
                            key={example.label}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight w-full sm:w-auto ${
                                activeIndex === index
                                    ? 'bg-primary text-dark shadow-md'
                                    : 'bg-white text-muted hover:bg-primary-light hover:text-primary border border-gray-200'
                            }`}
                        >
                            {example.icon}
                            {example.label}
                        </button>
                    ))}
                </div>

                <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                   <div key={activeIndex} className="animate-fade-in-fast">
                       <BeforeAfterSlider 
                            beforeImage={activeExample.beforeImage}
                            afterImage={activeExample.afterImage}
                       />
                   </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSection;