import React from 'react';

const TopBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 sticky top-0 z-50 shadow-md">
      <div className="container-max section-padding">
        <div className="flex items-center justify-center text-sm font-medium">
          <span>Free AI for HR workshops — Sundays 10:00 IST. Join →</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
