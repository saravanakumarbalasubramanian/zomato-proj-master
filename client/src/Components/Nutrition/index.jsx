import React from 'react';


// component
import NutritionHeroCarousal from './NutritionHeroCarousal';
import NutritionCarousal from './NutritionCarousal';



const Nutrition = () => {
  return (
    <div>
        <NutritionHeroCarousal/>

        <div className='my-6'>
        <NutritionCarousal/>
        </div>

    </div>
  )
}

export default Nutrition ;