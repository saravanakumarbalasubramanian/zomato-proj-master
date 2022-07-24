import React from 'react';
import { TiStar } from "react-icons/ti";

const reviewCard = () => {
    return (
        <>

            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='w-10 h-10 rounded-full'>
                            <img
                                src='https://avatars.githubusercontent.com/u/52795191?v=4'
                                alt='avatar'
                                className=' w-full h-full rounded-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>Pavana Kumar</h3>
                            <small className='text-grey-200'>5 Reviews &#8226; 5 Followers</small>
                        </div>
                    </div>
                    <button className='text-zomato-400 border border-zomato-400 px-4 py-2 rounded-lg'>Follow</button>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <span className='flex items-center text-xs text-white bg-green-700 px-2 py-1 rounded-lg'> 5 <TiStar /> </span>
                        <h5 className='font-regular uppercase'>Delivery</h5>
                        <small className='text-grey-400'>3 days ago</small>
                    </div>
                    <div className='w-full'>
                        <p className='w-full text-grey-600 font-light text-base'>
                            Restaurants in Bangalore, Bangalore Restaurants, MG Road restaurants, Best MG Road restaurants,
                            Central Bangalore restaurants, Quick Bites in Bengaluru, Quick Bites near me, Quick Bites in Central Bangalore, Quick Bites in MG Road,
                            in Bengaluru, near me, in Central Bangalore, in MG Road, in Bengaluru, near me, in Central Bangalore, in MG Road, Domino's Pizza Menu,
                            Order food online in MG Road, Order food online in Bengaluru, Order food online in Central Bangalore, New Year Parties in Bengaluru, Christmas' Special in Bengaluru
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default reviewCard;