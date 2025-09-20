import React from 'react';
import Icon from '../atoms/Icon';
import Typography from '../atoms/Typography';

const ValuePropCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`card p-8 text-center ${className}`}>
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md">
          <Icon name={icon} size="lg" className="text-purple-600" />
        </div>
      </div>
      <Typography variant="h6" className="mb-3">
        {title}
      </Typography>
      {description && (
        <Typography variant="bodySmall" className="text-neutral-600">
          {description}
        </Typography>
      )}
    </div>
  );
};

export default ValuePropCard;

import Typography from '../atoms/Typography';

const ValuePropCard = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`card p-8 text-center ${className}`}>
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md">
          <Icon name={icon} size="lg" className="text-purple-600" />
        </div>
      </div>
      <Typography variant="h6" className="mb-3">
        {title}
      </Typography>
      {description && (
        <Typography variant="bodySmall" className="text-neutral-600">
          {description}
        </Typography>
      )}
    </div>
  );
};

export default ValuePropCard;
