import React, { useState } from 'react';
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {IoCloseSharp} from "react-icons/io5";

// components
import MenuListcontainer from './MenuListcontainer';

const FloatMenuBtn = () => {
  
    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu = () => setIsClicked((prev) => !prev);
 
  return (
    <>
     <div className='fixed z-30 w-8/12 flex flex-col items-end gap-3 bottom-2 right-2 md:hidden'>
       {isClicked &&(
       
        <div className='p-3 h-48 overflow-y-scroll bg-white '>
            <MenuListcontainer/>
        </div>
       )}

     <button
     onClick={toggleMenu}
     className=' text-white bg-yellow-900 flex items-center gap-2 px-3 py-2 rounded-full md:hidden'>
        { isClicked ? <IoCloseSharp/> : <AiOutlineMenuUnfold/> } Menu
     </button>
     </div>

    </>


  )
}

export default FloatMenuBtn ;