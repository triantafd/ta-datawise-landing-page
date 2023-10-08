import React from 'react';
import Options from './Options';
import MainContent from './MainContent';
import { mainContentData } from 'data/mainContent';


interface ContentProps {

}

const Content: React.FC<ContentProps> = () => {
  return (
    <div className="bg-white pb-0">
      <div className='container mx-auto p-12 flex flex-col'>
        <div className='flex flex-col space-y-12 md:space-y-24'>

          {/*      Section (Header + Body) */}
          <div className="flex flex-col space-y-24 md:mt-0">
            <div className="flex flex-col space-y-2">
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


          {/*      Section (Icons) + Text Below */}
          <Options />
          {/* <!-- MainContent --> */}
          <MainContent rows={mainContentData} />

        </div>
      </div>
    </div >
  );
};

export default Content;