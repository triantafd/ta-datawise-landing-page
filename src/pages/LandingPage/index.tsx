import Content from 'components/Content';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import FullSizeRectangle from 'components/Rectangle';
import React from 'react';

interface ILandingPageProps {
}

const LandingPage: React.FC<ILandingPageProps> = () => {
  return (
    <div className="">
      <div className='bg-gradient-light'>
        <Navbar />
        <Hero />
        <div className="relative z-10">
          <FullSizeRectangle text={`over 200,000+ users have chosen COINCASH for everyday payments`} />
        </div>
        <Content />
        <Footer />
      </div >
    </div>
  );
}

export default LandingPage;

