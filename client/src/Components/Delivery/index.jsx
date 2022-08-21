import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

//components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {

  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants)
  }, [reduxState.restaurants]);



  return (
    <>
      <DeliveryCarousal />
      {/* <Brand /> */}
      <h1 className='text-xl font-bold mt-5 mb-2 md:text-3xl md:font-semibold'>
        Delivery Restaurant in Vijay Nagar
      </h1>
      <div className='flex justify-between flex-wrap'>
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;