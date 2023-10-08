import React from 'react';

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`transition-colors duration-300 px-6 py-3 rounded-[4px] shadow-md ${disabled
        ? 'bg-gray cursor-not-allowed'
        : 'bg-primary hover:bg-darkPrimary'}  space-x-2 `}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='label1 text-white'>{label}</div>
    </button>
  );
};

export default CTAButton;
