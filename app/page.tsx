import Image from "next/image";
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="bg-white font-sans text-dark">
      <Header />
      <div>
        <Hero />
        <ServicesSection />
        <WhyChooseUsSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;