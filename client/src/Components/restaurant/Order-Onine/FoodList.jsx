import React from 'react';


// component
import FoodItem from './FoodItem';

const FoodList = (props) => {
  return (
    <>
    
    <div className=''>
          
          <h2 className='top-0 bg-white w-full px-2 py-1 sticky z-10 text-xl font-semibold'>
            {props.title}
          </h2>
      <div className='flex flex-col gap-3'>

      {props.items.map((item) => (
          
          <FoodItem {...item} />
          ))}
          </div>

          </div>

    </>
  )
}

export default FoodList ;