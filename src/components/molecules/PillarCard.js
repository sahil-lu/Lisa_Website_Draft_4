import React from 'react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const PillarCard = ({ title, features, proof, icon, className = '' }) => {
  return (
    <div className={`card p-8 h-full ${className}`}>
      <div className="flex items-center mb-6">
        <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md mr-4">
          <Icon name={icon} size="lg" className="text-purple-600" />
        </div>
        <Typography variant="h4" className="text-purple-600">
          {title}
        </Typography>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Icon name="check" size="sm" className="text-green-600 mt-1 mr-3 flex-shrink-0" />
            <Typography variant="bodySmall" className="text-neutral-700">
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
      
      {proof && (
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 p-4 rounded-r-xl shadow-sm">
          <Typography variant="bodySmall" className="text-purple-800 font-medium">
            "{proof}"
          </Typography>
        </div>
      )}
    </div>
  );
};

export default PillarCard;

import Icon from '../atoms/Icon';

const PillarCard = ({ title, features, proof, icon, className = '' }) => {
  return (
    <div className={`card p-8 h-full ${className}`}>
      <div className="flex items-center mb-6">
        <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md mr-4">
          <Icon name={icon} size="lg" className="text-purple-600" />
        </div>
        <Typography variant="h4" className="text-purple-600">
          {title}
        </Typography>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Icon name="check" size="sm" className="text-green-600 mt-1 mr-3 flex-shrink-0" />
            <Typography variant="bodySmall" className="text-neutral-700">
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
      
      {proof && (
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 p-4 rounded-r-xl shadow-sm">
          <Typography variant="bodySmall" className="text-purple-800 font-medium">
            "{proof}"
          </Typography>
        </div>
      )}
    </div>
  );
};

export default PillarCard;
