import React from 'react';
import {TiStar} from "react-icons/ti";





const MenuSimilarRestaurantcard = (props) => {
  return (
    <>
    <div className='mx-2'>
    <div className=' bg-white w-22 shadow rounded-md '>
        <div className='w-full h-48'>
         
          <img
            src={props.image}
            alt='food'
            className='w-full h-full object-cover rounded-t-md'
          />
        </div>
        
        <div className='flex flex-col gap-2 p-3'>
          <h3 className=' text-lg font-semibold '> { props.title } </h3>
         
             <div className='flex items-center text-xs justify-between  '>

                <span className='flex items-center gap-1 pr-2 '>
                    <span className='flex items-center gap-1 px-2 py-1 bg-green-700 text-white p-1 rounded'>
                        30
                        <TiStar/>
                    </span>
                    DINING
                </span>
                       <span className='w-2 h-4 border-r border-grey-200'/>
                <span className='flex items-center gap-1'>
                    <span className='flex items-center gap-1 bg-green-700 text-white p-1 rounded'>
                        30
                        <TiStar/>
                    </span>
                    DINING
                </span>
             </div>
             <h4>Pizza, Fast Food, Desserts, Beverages</h4>
        </div>
      </div>
      </div>
    </>
  )
}

export default MenuSimilarRestaurantcard