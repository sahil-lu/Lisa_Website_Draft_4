import React, { useState } from 'react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const Pillars = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: 'AI-first L&D Platform',
      icon: 'rocket',
      features: [
        'Modern LXP/LMS with AI tutor, pathways, nudges, quizzes, certificates',
        'Personalized journeys by role, level, and performance signals',
        'Teams/Slack/Email nudges; SSO; HRIS connectors',
        'Standards-friendly (SCORM/xAPI if needed)',
        'Analytics: time-to-productivity, skill attainment, completion, MAU/WAU',
        'Admin joy: drag-and-drop, instant cohorts, one-click reports'
      ],
      proof: 'Launch a new program in 48 hours, not 8 weeks.'
    },
    {
      title: 'AI-first Content Development (Studio)',
      icon: 'zap',
      features: [
        'Rapid AI storyboarding → script → visuals → voiceover → publish',
        'Convert SOPs/Docs into micro-lessons; multi-lingual; brand-safe',
        'Templates for sales, service, onboarding, compliance',
        'Review workflows; SME annotation; versioning'
      ],
      proof: 'Ship 10 courses/week without 10 vendors.'
    },
    {
      title: 'AI-first Just-in-Time Learning (JIT)',
      icon: 'clock',
      features: [
        'In-the-flow answers inside Slack/Teams/CRM',
        'Diagnostic prompts → targeted micro-clip (60–120s) + quick checklist',
        'Works offline for field via lightweight mobile cards',
        'Governance: source-locked, approvals, audit trail'
      ],
      proof: 'Reduce \'ask a buddy\' time by 60%+.'
    }
  ];

  const pillarTabs = [
    { name: 'L&D Platform', icon: 'rocket', color: 'bg-blue-100 text-blue-600' },
    { name: 'Content Studio', icon: 'zap', color: 'bg-green-100 text-green-600' },
    { name: 'JIT Learning', icon: 'clock', color: 'bg-purple-100 text-purple-600' }
  ];

  return (
    <section id="pillars" className="py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            3 Pillars of Lisa AI
          </Typography>
          <Typography variant="lead" className="text-neutral-600">
            Click on each pillar to explore our comprehensive AI-first solutions
          </Typography>
        </div>
        
        {/* Single Container with Tabs at Top */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Pillar Tabs at Top */}
          <div className="bg-neutral-50 p-6 border-b border-neutral-200">
            <Typography variant="h6" className="mb-6 text-center text-neutral-700">
              Our Pillars
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {pillarTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-200 ${
                    activePillar === index
                      ? 'bg-gradient-to-r from-purple-100 to-purple-200 shadow-md transform scale-105 border-2 border-purple-300'
                      : 'bg-white hover:bg-neutral-100 hover:shadow-sm border-2 border-transparent'
                  }`}
                >
                  <div className={`w-10 h-10 ${tab.color} rounded-lg flex items-center justify-center shadow-sm`}>
                    <Icon name={tab.icon} size="md" className="text-current" />
                  </div>
                  <Typography 
                    variant="bodySmall" 
                    className={`font-medium ${
                      activePillar === index ? 'text-purple-700' : 'text-neutral-700'
                    }`}
                  >
                    {tab.name}
                  </Typography>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area - Active Pillar Details */}
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md mr-6">
                <Icon name={pillars[activePillar].icon} size="lg" className="text-purple-600" />
              </div>
              <div>
                <Typography variant="h3" className="text-purple-600 mb-2">
                  {pillars[activePillar].title}
                </Typography>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {pillars[activePillar].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Icon name="check" size="sm" className="text-green-600 mt-1 mr-4 flex-shrink-0" />
                  <Typography variant="body" className="text-neutral-700">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 p-6 rounded-r-xl shadow-sm">
              <Typography variant="body" className="text-purple-800 font-semibold">
                "{pillars[activePillar].proof}"
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;