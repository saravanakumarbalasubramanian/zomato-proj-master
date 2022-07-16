import React, { useState } from 'react'

//components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {

       const [ restaurantList, setRestaurantList] = useState ([
         {
           _id: "12345",
           photos: [
            "https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
           ],
           name: "Samosa Party",
           cuisine: ["Street Food", "Beverages", "Tea"],
           averageCost: 100,
           isPro: true,
           isOff: "80",
           durationOfDelivery: 47,
           restaurantReviewValue: 5,
         },
         {
           _id: "12345-1",
           photos: [
            "https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
           ],
           name: "AL-Bek",
           cuisine: ["Arabin", "North Indian", "Chinese"],
           averageCost: 150,
           isPro: false,
           isOff: false,
           durationOfDelivery: 35,
           restaurantReviewValue: 4.1,
         },
         {
           _id: "12345-2",
           photos: [
            "https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
           ],
           name: "Domino's Pizza",
           cuisine: ["Pizza", "Fast Food", "Desserts", "Beverages"],
           averageCost: 150,
           isPro: false,
           isOff: false,
           durationOfDelivery: 30,
           restaurantReviewValue: 4.0,
         },
       ]);

  return (
    <>
        <DeliveryCarousal />
        {/* <Brand /> */}
        <div className='flex justify-between flex-wrap'>
             {restaurantList.map((restaurant) => (
              <RestaurantCard {...restaurant} key={restaurant._id} />
             ))}
        </div>
    </>
  );
};

export default Delivery ;