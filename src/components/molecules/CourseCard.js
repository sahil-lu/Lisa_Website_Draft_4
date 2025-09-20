import React from 'react';
import Typography from '../atoms/Typography';
import Button from '../atoms/Button';

const CourseCard = ({ title, category, duration, className = '' }) => {
  return (
    <div className={`card p-6 w-80 flex-shrink-0 ${className}`}>
      <div className="mb-4">
        <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-4 flex items-center justify-center shadow-sm">
          <div className="text-purple-600 text-4xl">📚</div>
        </div>
        <Typography variant="caption" className="text-purple-600 font-medium mb-2">
          {category}
        </Typography>
        <Typography variant="h6" className="mb-2">
          {title}
        </Typography>
        <Typography variant="caption" className="text-neutral-600">
          {duration}
        </Typography>
      </div>
      <Button variant="outline" size="sm" className="w-full">
        View Course
      </Button>
    </div>
  );
};

export default CourseCard;

