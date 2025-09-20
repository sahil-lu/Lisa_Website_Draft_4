import React from 'react';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const OutcomeCard = ({ title, description, icon, className = '' }) => {
  return (
    <div className={`card p-6 ${className}`}>
      <div className="flex items-start">
        <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-sm mr-4 flex-shrink-0">
          <Icon name={icon} size="md" className="text-purple-600" />
        </div>
        <div>
          <Typography variant="h6" className="mb-2 text-purple-600">
            {title}
          </Typography>
          <Typography variant="bodySmall" className="text-neutral-700">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OutcomeCard;

import Icon from '../atoms/Icon';

const OutcomeCard = ({ title, description, icon, className = '' }) => {
  return (
    <div className={`card p-6 ${className}`}>
      <div className="flex items-start">
        <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-sm mr-4 flex-shrink-0">
          <Icon name={icon} size="md" className="text-purple-600" />
        </div>
        <div>
          <Typography variant="h6" className="mb-2 text-purple-600">
            {title}
          </Typography>
          <Typography variant="bodySmall" className="text-neutral-700">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OutcomeCard;
