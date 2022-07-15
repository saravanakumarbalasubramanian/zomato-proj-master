import React from 'react'
import { AiTwotoneStar } from "react-icons/ai";





const RestaurantCard = () => {
  return (
    <>
    
       <div className='mb-20 bg-white p-2 w-full md:w-1/2 lg:w-1/3 hover:shadow-lg rounded-xl transition duration-500 ease-in-out'>
           
           <div className='w-full h-56  lg:h-64 relative '>

             <div className='absolute bottom-2 w-full flex items-end justify-between'>
                 <div className='flex flex-col gap-2 items-start'>
                   <span className='bg-zomato-400 text-white px-2 py-1 rounded text-sm'>Pro extra 10% off</span>
                   <span className='bg-blue-600 text-white px-2 py-1 rounded text-sm'>₹80 OFF</span>
                 </div>
              <span className='bg-white bg-opacity-60 p-1 rounded mr-1'> 42 min</span>
             </div>

              <img src='https://b.zmtcdn.com/data/pictures/2/18503752/a1cd82498e16a143ecda57f57cb353b3.jpg?output-format=webp' 
              alt='food'
              className='w-full h-full rounded-xl'
              />
           </div>
           < div className='flex flex-col gap-3 my-2'>
                <div className='flex items-center justify-between '>
                    <h4 className='text-xl font-medium'>Fish Curry</h4>
                    <span className='bg-green-800 text-white text-sm p-1 rounded flex items-center '>
                        5 <AiTwotoneStar/>
                    </span>
                </div>
              
                <div className='flex items-center justify-between text-grey-600'>
                    <p>Fish Curry, South Indian Traditional <br/> style, TamilNadu</p>
                    <p> ₹ 559 </p>
                </div>
                </div>
       </div>

    </>
  );
};

export default RestaurantCard ;