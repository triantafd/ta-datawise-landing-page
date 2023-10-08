import React, { ReactElement } from 'react';

interface IOptionItem {
  imgSrc: string
  children: React.ReactNode
}

const OptionItem: React.FC<IOptionItem> = ({ imgSrc, children }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-center space-x-20" >
        <img src={imgSrc} alt='' className='' />
      </div >
      <p
        className="body2 text-center text-black p-2"
      >
        {children}
      </p>
    </div >
  );
};

export default OptionItem;
