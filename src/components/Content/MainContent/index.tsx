import React from 'react';



interface IRowProps {
  image: string;
  header: string;
  body: string;
  reverse?: boolean;  // Optional, will be determined by position
}

interface IMainContent {
  rows: IRowProps[];
}


const MainContentRow: React.FC<IRowProps> = ({ image, header, body, reverse }) => {
  console.log(reverse)
  const flexAndSpacingDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const paddingSide = reverse ? "md:pr-12" : "md:pl-12";

  return (
    <div className={`flex flex-col ${flexAndSpacingDirection} space-y-8 md:space-y-0 `}>
      <div className="w-full md:w-1/2">
        <img src={image} alt="Description" className="w-full" />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className={`flex flex-col space-y-2 ${paddingSide} text-left`}>
          <h1 className="header2 text-black">{header}</h1>
          <p className="body2 text-black">{body}</p>
        </div>
      </div>
    </div>
  );
}


const MainContent: React.FC<IMainContent> = ({ rows }) => {
  return (
    <div className='flex flex-col space-y-12 md:space-y-24'>
      {rows.map((row, idx) => (
        <MainContentRow key={idx} {...row} reverse={idx % 2 !== 0} />
      ))}
    </div>
  )
};



export default MainContent;
