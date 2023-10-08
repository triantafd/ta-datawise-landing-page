import React from 'react';
import OptionItem from '../OptionItem';

interface IOptions {

}

const Options: React.FC<IOptions> = () => {
  return (
    <div className="flex flex-row justify-between options-container space-x-24 md:space-x-0">
      <div className='mb-4 md:mb-0 flex-shrink-0'>
        <OptionItem imgSrc='images/Airplane-Ticket.svg'>
          You can  <br></br>
          <span className='text-primary'>book</span> tickets
        </OptionItem>
      </div>
  
      <div className='mb-4 md:mb-0 flex-shrink-0'>
        <OptionItem imgSrc='images/Cart.svg'>
          You can<br></br>
          <span className='text-primary'>buy</span> groceries
        </OptionItem>
      </div>
  
      <div className='mb-4 md:mb-0 flex-shrink-0'>
        <OptionItem imgSrc='images/Page.svg'>
          You can <br></br>
          <span className='text-primary'>pay</span> your bills
        </OptionItem>
      </div>
    </div>
 
  );
};

export default Options;
