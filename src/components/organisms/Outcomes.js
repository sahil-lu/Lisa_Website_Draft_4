import React, { useState } from 'react';
import Typography from '../atoms/Typography';
import { Check } from 'lucide-react';

const Outcomes = () => {
  const [activeOutcome, setActiveOutcome] = useState(0);

  const outcomes = [
    {
      title: 'Onboarding',
      icon: 'users',
      description: 'Cut time-to-productivity by X%. Buddy load ↓, retention ↑.',
      points: [
        'Reduce onboarding time by 50%',
        'Improve new hire retention rates',
        'Streamline buddy system processes',
        'Accelerate time-to-productivity'
      ]
    },
    {
      title: 'Upskilling/Reskilling',
      icon: 'target',
      description: 'Close skill gaps with role-based paths + labs.',
      points: [
        'Personalized learning pathways',
        'Skill gap analysis and recommendations',
        'Hands-on lab experiences',
        'Progress tracking and certification'
      ]
    },
    {
      title: 'Frontline Enablement',
      icon: 'rocket',
      description: 'Playbooks + JIT cards inside CRM. Win rate ↑.',
      points: [
        'Just-in-time learning in CRM',
        'Interactive playbooks and guides',
        'Real-time performance support',
        'Increased win rates and sales'
      ]
    },
    {
      title: 'Performance Enablement',
      icon: 'zap',
      description: 'Nudge → practice → feedback loops.',
      points: [
        'Smart nudges and reminders',
        'Practice-based learning modules',
        'Continuous feedback mechanisms',
        'Performance improvement tracking'
      ]
    },
    {
      title: 'Talent Development',
      icon: 'book',
      description: 'Manager pathways, leadership sprints, IDPs.',
      points: [
        'Leadership development programs',
        'Individual development plans',
        'Manager training pathways',
        'Career progression support'
      ]
    },
    {
      title: 'Extended Enterprise',
      icon: 'users',
      description: 'Train dealers/partners. Co-brand portals.',
      points: [
        'Partner training programs',
        'Co-branded learning portals',
        'External stakeholder education',
        'Extended enterprise solutions'
      ]
    },
    {
      title: 'Compliance',
      icon: 'check',
      description: 'Zero-drama rollouts. Auto-reminders. Clean audit trails.',
      points: [
        'Automated compliance tracking',
        'Seamless policy rollouts',
        'Audit trail management',
        'Regulatory requirement monitoring'
      ]
    }
  ];

  const outcomeTabs = [
    { name: 'Onboarding' },
    { name: 'Upskilling' },
    { name: 'Frontline' },
    { name: 'Performance' },
    { name: 'Talent' },
    { name: 'Enterprise' },
    { name: 'Compliance' }
  ];

  return (
    <section id="outcomes" className="py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-neutral-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Outcomes We Solve
          </Typography>
          <Typography variant="lead" className="text-neutral-600">
            Click on each outcome to explore how Lisa AI transforms your organization
          </Typography>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Outcome Tabs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Typography variant="h6" className="mb-6 text-center text-neutral-700">
                Our Outcomes
              </Typography>
              <div className="space-y-3">
                {outcomeTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveOutcome(index)}
                    className={`w-full p-3 rounded-full transition-all duration-200 font-semibold ${
                      activeOutcome === index
                        ? 'bg-neutral-950 hover:bg-neutral-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'border-2 border-purple-300 bg-white text-neutral-950 hover:bg-purple-50 hover:border-purple-400 shadow-sm hover:shadow-md transform hover:scale-105'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <Typography 
                        variant="bodySmall" 
                        className={`font-medium ${
                          activeOutcome === index ? 'text-white' : 'text-neutral-950'
                        }`}
                      >
                        {tab.name}
                      </Typography>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area - Active Outcome Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg h-full overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                {/* Left Side - Image */}
                <div className="relative">
                  <div className="h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="text-8xl opacity-60">🏢</div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <Typography variant="h3" className="text-neutral-950 font-bold mb-4">
                      {outcomes[activeOutcome].title}
                    </Typography>
                    <Typography variant="body" className="text-neutral-700 mb-6">
                      {outcomes[activeOutcome].description}
                    </Typography>
                  </div>
                  
                  {/* Benefits List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {outcomes[activeOutcome].points.map((point, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Check size={14} className="text-white" />
                        </div>
                        <Typography variant="bodySmall" className="text-neutral-700">
                          {point}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  <div className="mt-auto">
                    <button className="text-purple-600 hover:text-purple-700 transition-colors duration-200 flex items-center">
                      <Typography variant="bodySmall" className="font-medium">
                        Learn more about this outcome →
                      </Typography>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
