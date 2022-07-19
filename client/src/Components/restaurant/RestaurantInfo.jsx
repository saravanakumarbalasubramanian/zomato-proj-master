import React from 'react';
import { TiStar } from "react-icons/ti"




const RestaurantInfo = (props) => {
  return (
    <>
                    <div className='my-4'>
                    <div className='flex flec-col flex-col-reverse md:flex-row md:items-center justify-between mt-5 gap-3'>
                        <h1 className='text-xl md:text-3xl font-semibold md:font-bold'>{props.name}</h1>

                        <div className='flex items-center gap-6 text-xs md:text-base'>
                            <div className='flex items-center gap-2' >
                                <span className='flex items-center gap-1 text-white font-bold bg-green-600 px-1 py-1 rounded-md'>
                                    {props.restaurantRating}<TiStar />
                                </span>
                                <span>
                                    <strong>79</strong>
                                    <p className='border-dashed border-b '>Dining Review</p>
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='flex items-center text-white font-bold bg-green-600 px-1 py-1 rounded-md'>
                                {props.deliveryRating}<TiStar />
                                </span>
                                <span>
                                    <strong>1,860</strong>
                                    <p className='border-dashed border-b '>Delivery Review</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='text-base md:text-lg text-grey-600'>
                        <h3 >{props.cuisine}</h3>
                        <h3 className='text-grey-500'>{props.address}</h3>
                        <h3><span className='text-orange-700'>Open Now</span> - 10:57am - 10:59pm</h3>
                    </div>
                </div>
    </>
  );
};

export default RestaurantInfo ;