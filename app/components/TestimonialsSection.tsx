'use client';

import React from 'react';
import { QuoteIcon } from './Icons';
import Image from 'next/image';

interface Testimonial {
    quote: string;
    author: string;
    location: string;
    avatarUrl: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Shine Space's team is simply the best. They are professional, punctual, and my house has never looked better. I highly recommend them!",
        author: 'Jessica M.',
        location: 'Springfield',
        avatarUrl: 'https://i.pravatar.cc/100?img=1'
    },
    {
        quote: "I was so impressed with the deep clean service. They didn't miss a single spot. It was like moving into a brand new home.",
        author: 'David Chen',
        location: 'Oakville',
        avatarUrl: 'https://i.pravatar.cc/100?img=2'
    },
    {
        quote: "Reliable and trustworthy. It's a huge relief to come home after a long day to a perfectly clean house. Worth every penny.",
        author: 'Samantha R.',
        location: 'Maplewood',
        avatarUrl: 'https://i.pravatar.cc/100?img=3'
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-light scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 opacity-0 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark">What Our Clients Say</h2>
                    <p className="text-lg text-muted mt-4">We&apos;re proud to have happy customers and sparkling homes.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-xl shadow-sm flex flex-col relative overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg opacity-0 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <QuoteIcon className="absolute top-4 right-4 w-16 h-16 text-gray-100/50" />
                            <p className="text-muted italic mb-6 flex-grow relative z-10">&apos;{testimonial.quote}&apos;</p>
                            <div className="flex items-center mt-auto relative z-10">
                                <Image 
                                    width={56}
                                    height={56}
                                    className='rounded-full mr-4'
                                    src={testimonial.avatarUrl}
                                    alt={testimonial.author}
                                />
                                <div>
                                    <p className="font-bold text-dark">{testimonial.author}</p>
                                    <p className="text-muted text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;