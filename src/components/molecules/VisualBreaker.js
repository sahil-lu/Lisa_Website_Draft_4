import React from 'react';
import Typography from '../atoms/Typography';

const VisualBreaker = ({ items = [] }) => {
  const defaultItems = [
    "35+ years of learning design experience",
    "Create Quality Content in mins", 
    "Just in Time learning",
    "AI first L&D Platform",
    "Cost less - performs more",
    "500+ Course library & growing"
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  // Create repeating pattern for the banner
  const createBannerContent = () => {
    const repeatedItems = [];
    for (let i = 0; i < 8; i++) {
      displayItems.forEach((item, index) => {
        repeatedItems.push(item);
        if (index < displayItems.length - 1 || i < 7) {
          repeatedItems.push('star');
        }
      });
    }
    return repeatedItems;
  };

  const bannerContent = createBannerContent();

  return (
    <div className="relative overflow-hidden">
      {/* Black Banner with Marquee Text and Yellow Stars */}
      <div className="bg-black py-4">
        <div className="flex items-center space-x-4 whitespace-nowrap animate-marquee">
          {bannerContent.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 flex-shrink-0">
              {item === 'star' ? (
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ) : (
                <Typography variant="bodySmall" className="text-white font-medium">
                  {item}
                </Typography>
              )}
            </div>
          ))}
          {/* Duplicate content for seamless loop */}
          {bannerContent.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center space-x-4 flex-shrink-0">
              {item === 'star' ? (
                <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ) : (
                <Typography variant="bodySmall" className="text-white font-medium">
                  {item}
                </Typography>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualBreaker;
