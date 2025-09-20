import React from 'react';
import TopBanner from '../components/molecules/TopBanner';
import Navigation from '../components/molecules/Navigation';
import Hero from '../components/organisms/Hero';
import Pillars from '../components/organisms/Pillars';
import CourseLibrary from '../components/organisms/CourseLibrary';
import Outcomes from '../components/organisms/Outcomes';
import Footer from '../components/organisms/Footer';
import VisualBreaker from '../components/molecules/VisualBreaker';

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <TopBanner />
      <Navigation />
      <main>
        <Hero />
        <VisualBreaker />
        <Pillars />
        <VisualBreaker items={[
          "48 Hours Program Launch",
          "10 Courses Per Week",
          "60% Reduction in Support Time",
          "90% User Satisfaction",
          "40% Cost Reduction",
          "500+ Course Library"
        ]} />
        <CourseLibrary />
        <VisualBreaker items={[
          "Faster Onboarding Process",
          "Enhanced Skill Development",
          "Improved Performance Tracking",
          "Better Learning Retention",
          "Reduced Training Costs",
          "Increased Employee Engagement"
        ]} />
        <Outcomes />
      </main>
      <Footer />
    </div>
  );
};

export default Home;