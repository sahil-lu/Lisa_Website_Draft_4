import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';
import CourseCard from '../molecules/CourseCard';

const CourseLibrary = () => {
  const courses = [
    { title: 'Effective Communication Skills', category: 'Communication', duration: '2 hours' },
    { title: 'Leadership Fundamentals', category: 'Leadership', duration: '3 hours' },
    { title: 'Digital Transformation', category: 'Digital', duration: '4 hours' },
    { title: 'AI Tools for Productivity', category: 'AI Tools', duration: '1.5 hours' },
    { title: 'Retail Operations Excellence', category: 'Retail Ops', duration: '2.5 hours' },
    { title: 'Service Excellence', category: 'Service', duration: '2 hours' },
    { title: 'Compliance & Ethics', category: 'Compliance', duration: '1 hour' },
    { title: 'Customer Experience Design', category: 'Service', duration: '3 hours' },
    { title: 'Data Analytics Fundamentals', category: 'Digital', duration: '3.5 hours' },
    { title: 'Project Management Essentials', category: 'Leadership', duration: '2.5 hours' },
    { title: 'Cybersecurity Awareness', category: 'Compliance', duration: '1.5 hours' },
    { title: 'Sales Excellence', category: 'Communication', duration: '2 hours' }
  ];

  // Create multiple sets of courses for seamless marquee
  const createMarqueeContent = () => {
    const repeatedCourses = [];
    for (let i = 0; i < 4; i++) { // Repeat 4 times for seamless loop
      courses.forEach((course, index) => {
        repeatedCourses.push(
          <CourseCard
            key={`${i}-${index}`}
            title={course.title}
            category={course.category}
            duration={course.duration}
          />
        );
      });
    }
    return repeatedCourses;
  };

  return (
    <section id="library" className="py-16 lg:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            500+ Course Library & Growing
          </Typography>
          <Typography variant="lead" className="mb-2">
            500+ courses today, updated weekly.
          </Typography>
          <Typography variant="body" className="text-neutral-600">
            Domains: communication, leadership, digital, AI tools, retail ops, service excellence, compliance, and more.
          </Typography>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee-fast">
            {createMarqueeContent()}
            {/* Duplicate content for seamless loop */}
            {createMarqueeContent()}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View more courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseLibrary;


