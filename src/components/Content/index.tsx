import React from 'react';
import Options from './Options';
import MainContent from './MainContent';
import { mainContentData } from 'data/mainContent';
import ContentHeader from './HeaderContent';
import { optionsData } from 'data/optionsData';


interface ContentProps {

}

const Content: React.FC<ContentProps> = () => {
  return (
    <div className="bg-white pb-0">
      <div className='container mx-auto p-12 flex flex-col'>
        <div className='flex flex-col space-y-12 md:space-y-24'>
          {/*      Header + further description */}
          <ContentHeader />
          {/*     Options  */}
          <Options optionsData={optionsData} />
          {/* <!-- MainContent --> */}
          <MainContent rows={mainContentData} />
        </div>
      </div>
    </div >
  );
};

export default Content;
