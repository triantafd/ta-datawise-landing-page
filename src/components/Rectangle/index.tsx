import React from 'react';

interface IRectangleProps {
  text: string;
}
const FullSizeRectangle: React.FC<IRectangleProps> = ({ text }) => {
  return (
    <div className="bg-primary w-full flex items-center justify-center py-8 lg:py-6 gap-2.5">
      <span className="text-white text-center label1 lg:w-1/3 px-12 lg:px-0">
        {text}
      </span>
    </div>
  );
}

export default FullSizeRectangle;

