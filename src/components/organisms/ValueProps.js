import React from 'react';
import ValuePropCard from '../molecules/ValuePropCard';

const ValueProps = () => {
  const valueProps = [
    {
      icon: 'users',
      title: '35+ years of learning design experience',
      description: 'Proven expertise in creating effective learning experiences'
    },
    {
      icon: 'zap',
      title: 'Create Quality Content in mins',
      description: 'AI-powered content creation at lightning speed'
    },
    {
      icon: 'clock',
      title: 'Just in Time learning',
      description: 'Learning when and where it matters most'
    },
    {
      icon: 'rocket',
      title: 'AI-first L&D Platform',
      description: 'Next-generation learning experience platform'
    },
    {
      icon: 'target',
      title: 'Cost less - performs more',
      description: 'Maximum ROI with minimal investment'
    },
    {
      icon: 'book',
      title: '500+ Course Library & growing',
      description: 'Comprehensive library covering all domains'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValuePropCard
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;


const ValueProps = () => {
  const valueProps = [
    {
      icon: 'users',
      title: '35+ years of learning design experience',
      description: 'Proven expertise in creating effective learning experiences'
    },
    {
      icon: 'zap',
      title: 'Create Quality Content in mins',
      description: 'AI-powered content creation at lightning speed'
    },
    {
      icon: 'clock',
      title: 'Just in Time learning',
      description: 'Learning when and where it matters most'
    },
    {
      icon: 'rocket',
      title: 'AI-first L&D Platform',
      description: 'Next-generation learning experience platform'
    },
    {
      icon: 'target',
      title: 'Cost less - performs more',
      description: 'Maximum ROI with minimal investment'
    },
    {
      icon: 'book',
      title: '500+ Course Library & growing',
      description: 'Comprehensive library covering all domains'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <ValuePropCard
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
