import React, { useState } from 'react';
import { IoMdArrowDropup, IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io"
import { CgClose } from "react-icons/cg"

// component
import FoodItem from './FoodItem';


const CartSM = ({ toogle }) => {
    return (
        <>
            <div className='md:hidden flex items-center justify-between  '>
                <div className='flex flex-col  items-start'>
                    <small className='flex items-center gap-1 bg-white' onClick={toogle}>
                        1 Item <IoMdArrowDropup />
                    </small>
                    <h4 >
                        ₹500 <sub>(plus tax)</sub>
                    </h4>
                </div>
                <button className='flex items-center gap-1 bg-zomato-400 px-3 py-1 rounded-lg text-white'>
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    )

};
const CartLG = ({ toogle }) => {
    return (
        <>
            <div className='hidden md:flex flex items-center justify-between container px-20 mx-auto '>
                <div className='flex gap-2 items-center items-start'>
                    <span className='border border-grey-300 p-1 rounded' onClick={toogle}>
                        <IoMdArrowDropup />
                    </span>
                    <h4 className='text-xl'>
                        Your Orders (1)
                    </h4>
                </div>
                <div className='flex items-center gap-5'>
                    <h4 className='text-xl'>Subtotal:₹500 </h4>
                    <button className='flex items-center gap-1 bg-zomato-400 px-3 py-1 rounded-lg text-white text-lg font-light h-10'>
                        Continue <IoMdArrowDropright />
                    </button>
                </div>
            </div>
        </>
    )

};



const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toogleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);
    return (
        <>
            {isOpen && (
                <div className='fixed bottom-16 z-10 h-48 overflow-y-scroll w-full px-3 bg-white'>
                    <div className='flex justify-between items-center '>
                        <h3 className='text-xl font-semibold'>Your Orders </h3>
                        <CgClose onClick={closeCart} />
                    </div>
                    <hr className='my-2' />
                    <div className='flex flex-col gap-2'>
                        <FoodItem name="pizza" quantity="3" price="55" />
                        <FoodItem name="pizza" quantity="3" price="55" />
                        <FoodItem name="pizza" quantity="3" price="55" />
                        <FoodItem name="pizza" quantity="3" price="55" />
                        <FoodItem name="pizza" quantity="3" price="55" />
                    </div>
                </div>)}
            <div className='fixed bottom-0 z-10 p-2 w-full px-3  bg-white'>
                <CartSM toogle={toogleCart} />
                <CartLG toogle={toogleCart} />
            </div>
        </>
    )
}

export default CartContainer