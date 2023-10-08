import React from 'react';
import OptionItem from '../OptionItem';

interface IOptions {

}

const Options: React.FC<IOptions> = () => {
  return (
    <div className="flex flex-row justify-between">

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

export default Options;
