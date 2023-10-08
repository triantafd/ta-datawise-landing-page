import React from 'react';

interface IOptionItem {
  imgSrc: string
  content: React.ReactElement
}

const OptionItem: React.FC<IOptionItem> = ({ imgSrc, content }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-center space-x-20" >
        <img src={imgSrc} alt='' className='' />
      </div >
      <p
        className="body2 text-center text-black p-2"
      >
        {content}
      </p>
    </div >
  );
};

export default OptionItem;
