import React from 'react';
import OptionItem from '../OptionItem';

interface IScrollbar {

}

const Scrollbar: React.FC<IScrollbar> = () => {
  return (
    <div className="flex flex-row  sm:justify-between">

      <OptionItem imgSrc='images/Airplane-Ticket.svg'>
        You can  <br></br>
        <span className='text-primary'>book</span> tickets
      </OptionItem>

      <OptionItem imgSrc='images/Cart.svg'>
        You can<br></br>
        <span className='text-primary'>buy</span> groceries
      </OptionItem>

      <OptionItem imgSrc='images/Page.svg'>
        You can <br></br>
        <span className='text-primary'>pay</span> your bills
      </OptionItem>

    </div>

  );
};

export default Scrollbar;
