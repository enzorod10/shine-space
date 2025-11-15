'use client';

import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark">Get a Free, No-Obligation Quote</h2>
          <p className="text-lg text-muted mt-4 max-w-2xl mx-auto">Fill out the form below, and we&apos;ll get back to you within 24 hours with a personalized quote.</p>
        </div>
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-200 shadow-sm">
            <form>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" placeholder="john.doe@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" placeholder="(123) 456-7890" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service Needed</label>
                  <select id="service" name="service" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight bg-white">
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" placeholder="Tell us a bit about your cleaning needs..."></textarea>
                </div>
              </div>
              <div className="text-center mt-8">
                <button type="submit" className="bg-primary text-dark font-bold text-lg px-10 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out hover:scale-105 shadow-lg">
                  Request My Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;