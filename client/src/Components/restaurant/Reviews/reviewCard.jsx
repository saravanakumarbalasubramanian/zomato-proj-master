import React, { useState, useEffect } from 'react';
import { TiStar } from "react-icons/ti";

import { useDispatch } from "react-redux";
import { getUser } from '../../../Redux/Reducer/User/user.action';
import dayjs from "dayjs";


const reviewCard = (props) => {
    
     const [user, setUser] = useState({});

     const dispatch = useDispatch();

     useEffect(() => {
         dispatch(getUser(props.user)).then((data) => setUser(data.payload.user.user.user));
     }, []);

    
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
                            <h3 className='text-lg font-semibold'>{user?.fullname}</h3>
                            <small className='text-grey-200'>5 Reviews &#8226; 5 Followers</small>
                        </div>
                    </div>
                    <button className='text-zomato-400 border border-zomato-400 px-4 py-2 rounded-lg'>Follow</button>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <span className='flex items-center text-xs text-white bg-green-700 px-2 py-1 rounded-lg'> 5 <TiStar /> </span>
                        <h5 className='font-regular uppercase'>{props.isRestaurantReview? "Dining" : "Delivery"}</h5>
                        <small className='text-grey-400'>
                            {dayjs(props.createdAt).format("DD MM YYYY")}
                        </small>
                    </div>
                    <div className='w-full'>
                        <p className='w-full text-grey-600 font-light text-base'>
                           {props.reviewText}
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default reviewCard ;