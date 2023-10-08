import React from 'react';

interface ICTAButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CTAButton: React.FC<ICTAButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      className={`flex-shrink-0 transition-colors duration-300 px-6 py-3 rounded-[4px] shadow-md ${disabled
        ? 'bg-gray cursor-not-allowed'
        : 'bg-primary hover:bg-darkPrimary'}  space-x-2 min-w-lg`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='label1 text-white'>{label}</div>
    </button>
  );
};

export default CTAButton;
