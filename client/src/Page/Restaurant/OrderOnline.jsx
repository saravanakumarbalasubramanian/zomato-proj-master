import React, {useEffect, useState} from 'react';
import { GiCompass } from "react-icons/gi"
import { BsClockHistory } from "react-icons/bs"

// component
import FloatMenuBtn from '../../Components/restaurant/Order-Onine/FloatMenuBtn';
import MenuListcontainer from '../../Components/restaurant/Order-Onine/MenuListcontainer';
import FoodItem from '../../Components/restaurant/Order-Onine/FoodItem';
import FoodList from '../../Components/restaurant/Order-Onine/FoodList';


// redux actions 
import { getFoodList } from '../../Redux/Reducer/Food/Food.action';



const OrderOnline = () => {

  const [] = useState();

  return (
    <>
      <div className='w-full flex  h-screen '>

        <aside className='hidden md:flex gap-3 flex flex-col border-r h-screen overflow-y-scroll border-grey-500  w-1/4'>
          <MenuListcontainer />
          <MenuListcontainer />
        </aside>


        <div className='w-full mx-3 md:w-3/4'>
          <div className='pl-3 mb-4'>

            <h2 className='text-xl font-semibold'> Order Online</h2>
            <h4 className='flex items-center gap-2 font-light text-grey-200'><GiCompass />Live track your order | <BsClockHistory /> 55 min </h4>
          </div>

          <section className='flex flex-col gap-3 h-screen overflow-y-scroll md:gap-5'>

            <FoodList 
            title="Recommended" 
            items={[
              {
                price: "₹150",
                rating: 5,
                description: "Spicy hot chicken boneless biryani with boneless chunks [12 pieces], served with thick raita.",
                title: "D'lite Chicken 65 Biryani",
                image: "https://b.zmtcdn.com/data/dish_photos/377/1d9b705b9d61ee8199abeefb6f5f4377.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
              },
            ]}
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  )
}

export default OrderOnline;