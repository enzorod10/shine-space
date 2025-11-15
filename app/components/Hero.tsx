'use client';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white scroll-mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url(./hero_banner.png)" }}
      ></div>
      <div 
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0, 51, 102, 0.4) 0%, rgba(0, 51, 102, 0.3) 50%)' }}
      ></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 text-shadow opacity-0 animate-fade-in-up" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
          Your Space, Brilliantly Clean.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200 opacity-0 animate-fade-in-up" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)', animationDelay: '0.3s'}}>
          Rediscover the joy of a spotless home. Shine Space delivers meticulous, reliable, and eco-friendly cleaning tailored just for you.
        </p>
        <a 
          href="#contact" 
          className="bg-primary text-dark font-bold text-lg px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 ease-in-out hover:scale-105 shadow-xl hover:shadow-2xl opacity-0 animate-fade-in-up"
          style={{animationDelay: '0.6s'}}
        >
          Get Your Free Estimate
        </a>
      </div>
    </section>
  );
};

export default Hero;
