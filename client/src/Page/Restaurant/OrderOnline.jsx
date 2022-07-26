import React from 'react';

// component
import FloatMenuBtn from '../../Components/restaurant/Order-Onine/FloatMenuBtn';
import MenuListcontainer from '../../Components/restaurant/Order-Onine/MenuListcontainer';



const OrderOnline = () => {
  return (
    <>
      <div className='w-full'>
        <aside className='hidden md:flex gap-3 flex flex-col border-r h-screen overflow-y-scroll border-grey-500  w-1/4'>
          <MenuListcontainer/>
          <MenuListcontainer/>
          <MenuListcontainer/>
          <MenuListcontainer/>
          <MenuListcontainer/>
        </aside>
        <div className='w-full md:w-3/4'></div>
      </div>
      <FloatMenuBtn />
    </>
  )
}

export default OrderOnline;