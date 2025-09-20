import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const Hero = () => {
  return (
    <section id="hero" className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Shimmering Alert Heading */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-[length:200%_100%] animate-shimmer text-white px-6 py-3 rounded-full shadow-lg">
              <Typography variant="h5" className="font-bold text-white">
                Corporate L&D is DOOMED🤯
              </Typography>
            </div>
          </div>

          {/* Main Headline */}
          <Typography 
            variant="h1" 
            className="mb-6 animate-fade-up"
            as="h1"
            style={{ animationDelay: '0.2s' }}
          >
            Legacy L&D is slow. Lisa ships skills now.
          </Typography>
          
          {/* Subheadline */}
          <Typography 
            variant="lead" 
            className="mb-8 text-neutral-700 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            AI-first platform + 500+ course library + just-in-time learning. Onboard faster, upskill smarter, enable frontline in days — not quarters.
          </Typography>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="secondary" size="md" className="px-12">
              Explore 500 Courses Library
            </Button>
            <Button variant="primary" size="md" className="px-12">
              Book a Demo
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-600 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" size="sm" className={i < 4 ? "text-yellow-400" : "text-neutral-300"} />
                ))}
              </div>
              <span className="font-medium">4.8/5</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-neutral-300"></div>
            <div className="flex items-center gap-2">
              <Icon name="users" size="sm" className="text-purple-600" />
              <span>35 years in education</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-neutral-300"></div>
            <div className="flex items-center gap-2">
              <span>Trusted by</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-neutral-200 rounded flex items-center justify-center text-xs font-bold">A</div>
                <div className="w-8 h-8 bg-neutral-200 rounded flex items-center justify-center text-xs font-bold">B</div>
                <div className="w-8 h-8 bg-neutral-200 rounded flex items-center justify-center text-xs font-bold">C</div>
                <span className="text-xs">+more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
