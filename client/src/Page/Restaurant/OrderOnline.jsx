import React from 'react';
import {GiCompass} from "react-icons/gi"
import {BsClockHistory} from "react-icons/bs"

// component
import FloatMenuBtn from '../../Components/restaurant/Order-Onine/FloatMenuBtn';
import MenuListcontainer from '../../Components/restaurant/Order-Onine/MenuListcontainer';
import FoodItem from '../../Components/restaurant/Order-Onine/FoodItem';


const OrderOnline = () => {
  return (
    <>
      <div className='w-full flex'>
     
        <aside className='hidden md:flex gap-3 flex flex-col border-r h-screen overflow-y-scroll border-grey-500  w-1/4'>
          <MenuListcontainer/>
          <MenuListcontainer/>
        </aside>
      
      
        <div className='w-full md:w-3/4 mx-5'>

          <h2 className='text-xl font-semibold'> Order Online</h2>
          <h4 className='flex items-center gap-2 font-light text-grey-200'><GiCompass/>Live track your order | <BsClockHistory/> 55 min </h4>
       
        <section>
          <FoodItem 
          image="https://b.zmtcdn.com/data/dish_photos/6d2/a13ed20529fda1ba7bd86fc094f426d2.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*" 
          title="Chicken Roll" 
          rating="5" 
          price="₹150" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus perferendis explicabo magnam reprehenderit omnis, amet ab magni saepe. Placeat ipsum tempora dolor maiores perspiciatis iusto? Non asperiores illum sapiente."
          />
          <FoodItem 
          image="https://b.zmtcdn.com/data/dish_photos/6d2/a13ed20529fda1ba7bd86fc094f426d2.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*" 
          title="Chicken Roll" 
          rating="5" 
          price="₹150" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus perferendis explicabo magnam reprehenderit omnis, amet ab magni saepe. Placeat ipsum tempora dolor maiores perspiciatis iusto? Non asperiores illum sapiente."
          />
          <FoodItem 
          image="https://b.zmtcdn.com/data/dish_photos/6d2/a13ed20529fda1ba7bd86fc094f426d2.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*" 
          title="Chicken Roll" 
          rating="5" 
          price="₹150" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus perferendis explicabo magnam reprehenderit omnis, amet ab magni saepe. Placeat ipsum tempora dolor maiores perspiciatis iusto? Non asperiores illum sapiente."
          />
          <FoodItem 
          image="https://b.zmtcdn.com/data/dish_photos/6d2/a13ed20529fda1ba7bd86fc094f426d2.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*" 
          title="Chicken Roll" 
          rating="5" 
          price="₹150" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus perferendis explicabo magnam reprehenderit omnis, amet ab magni saepe. Placeat ipsum tempora dolor maiores perspiciatis iusto? Non asperiores illum sapiente."
          />
          <FoodItem 
          image="https://b.zmtcdn.com/data/dish_photos/6d2/a13ed20529fda1ba7bd86fc094f426d2.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*" 
          title="Chicken Roll" 
          rating="5" 
          price="₹150" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus perferendis explicabo magnam reprehenderit omnis, amet ab magni saepe. Placeat ipsum tempora dolor maiores perspiciatis iusto? Non asperiores illum sapiente."
          />
        </section>
        </div>
     

      </div>
      <FloatMenuBtn />
    </>
  )
}

export default OrderOnline;