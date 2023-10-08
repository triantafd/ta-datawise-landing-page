import React from 'react';

interface IContentHeaderProps {

}

const ContentHeader: React.FC<IContentHeaderProps> = () => {
  return (
    <div className="flex flex-col space-y-24 md:mt-0">
      <div className="flex flex-col space-y-4">
        <h1
          className="header1 text-center text-black"
        >
          Buy anything you ever imagine
        </h1>
        <p
          className="body2 text-center text-black"
        >
          The easiest way to use your cryptocurrencies for everyday purchases.
        </p>
      </div >
    </div>
  );
};

export default ContentHeader;
