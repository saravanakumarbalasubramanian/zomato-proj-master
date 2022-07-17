import React from 'react';


// component
import NutritionHeroCarousal from './NutritionHeroCarousal';
import NutritionCarousal from './NutritionCarousal';
import NutritionCard from './NutritionCard';


const Nutrition = () => {
  return (
    <div>
        <NutritionHeroCarousal/>

        <div className='my-6'>
        <NutritionCarousal/>
        </div> 

        <div className='flex justify-between flex-wrap '>
          <NutritionCard 
              
              image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              bg="zomato"
              />
          <NutritionCard 
              
              image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              bg="zomato"
              />
          <NutritionCard 
              
              image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              bg="zomato"
              />
          <NutritionCard 
              
              image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              bg="zomato"
              />
          <NutritionCard 
              
              image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              bg="zomato"
              />
          <NutritionCard 
              
              image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              bg="zomato"
              />
          <NutritionCard 
              
              image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              bg="zomato"
              />
        </div>

    </div>
  )
}

export default Nutrition ;