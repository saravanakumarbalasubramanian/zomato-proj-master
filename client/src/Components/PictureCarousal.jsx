import React from 'react';
import {  IoMdArrowDropright } from "react-icons/io";


const PictureCarousalCard = () => {
  return (
    <>
    
    <div className=' relative w-full h-64 px-4 overflow-hidden'>
         <div className='w-full h-full'>
         <img src='https://b.zmtcdn.com/data/pictures/chains/2/18817272/483396fa2a0d8cca924715f049a9fdde.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*'
         alt='food'
         className='w-full h-full rounded-lg object-cever transition duration-700 ease-in-out'
         />
        <div className=' w-full h-full absolute insert-0 rounded-lg '
        style={ {   background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",} }
        />
         </div>
       
    <div className='absolute bottom-0 text-white w-full left-6 bottom-1 '>
        <h4 className='z-10 '>Onam Special</h4>
        <h6 className='z-10 flex items-center '>15 Places <IoMdArrowDropright/> </h6>
    </div>
    </div>
    </>
  );
};

export default PictureCarousalCard ;