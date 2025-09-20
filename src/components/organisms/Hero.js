import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Alert Banner */}
          <div className="mb-8">
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #dc2626, #f97316, #dc2626)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s ease-in-out infinite',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '50px',
              fontSize: '20px',
              fontWeight: 'bold',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              border: '2px solid #b91c1c'
            }}>
              Corporate L&D is DOOMED🤯
            </div>
          </div>
          

          {/* Main Headline */}
          <h1 className="mb-6 text-5xl lg:text-6xl font-bold text-neutral-950 leading-tight">
            Legacy L&D is slow. Lisa ships skills now.
          </h1>
          
          {/* Subheadline */}
          <p className="mb-8 text-xl text-neutral-700">
            AI-first platform + 500+ course library + just-in-time learning. Onboard faster, upskill smarter, enable frontline in days — not quarters.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-12 py-3 border-2 border-purple-300 bg-white text-neutral-950 hover:bg-purple-50 rounded-full font-semibold">
              Explore 500 Courses Library
            </button>
            <button className="px-12 py-3 bg-neutral-950 text-white hover:bg-neutral-800 rounded-full font-semibold">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
