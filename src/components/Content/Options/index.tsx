import React from 'react';
import OptionItem from '../OptionItem';

interface IOptions {
  optionsData: {
    imgSrc: string;
    content: React.ReactElement;
  }[];
}

const Options: React.FC<IOptions> = ({ optionsData }) => {
  return (
    <div className="flex flex-row justify-between options-container space-x-24 md:space-x-0">
      {optionsData && optionsData.map((option, index) => (
        <div key={index} className='mb-4 md:mb-0 flex-shrink-0'>
          <OptionItem
            imgSrc={option.imgSrc}
            content={option.content}
          />
        </div>
      ))}
    </div>
  );
};

export default Options;
