import React from 'react';
import {BsFillShieldLockFill} from "react-icons/bs"


// components
import FoodItem from "../Components/Cart/FoodItem";
import AddressList from '../Components/Checkout/AddressList';


const Checkout = () => {

 const address = [
    {
      name: "Home",
      address: "India",
    },
    {
      name: "Gym",
      address: "India",
    },
    {
      name: "Office",
      address: "India",
    },
 ]

    return (
        <>

            <div className=' flex flex-col my-3 gap-3 items-center w-full  justify-center '>
                <h1 className='text-xl md:text-2xl font-bold text-center'>Checkout</h1>
                <div className='w-full md:w-3/5 bg-white py-3 shadow-2xl rounded-lg flex flex-col items-center'>
                    <h3 className='text-lg font-semibold'>Summary</h3>                   
                    <div className='flex flex-col gap-2 items-center w-full'>
                        <h5 className='text-base tracking-wider'>ORDER FROM</h5>
                        <div className='flex flex-col w-full items-center text-grey-400'>
                        <h4>Domino's Pizza</h4>
                        <small>GT World Mall, Magadi Road, Bangalore</small>
                        </div>
                        <div className=' my-4 px-4 md:w-3/5 w-full flex flex-col gap-2'>
                             <FoodItem name="Pizza" quantity={3} price={300} />
                             <FoodItem name="Pizza" quantity={3} price={300} />
                             <FoodItem name="Pizza" quantity={3} price={300} />
                        </div>
                        <div className=' md:w-3/5 w-full flex flex-col gap-3'>
                              <h4 className='text-xl font-semibold'>Choose Address</h4>
                                <AddressList address={address}/>                
                        </div>
                    </div>
                    <button className='flex items-center justify-center gap-2 my-4 md:my-8 w-full px-4 md:w-4/5 px-0  h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg'>
                        Pay Securely <BsFillShieldLockFill/>
                    </button>
                </div>
            </div>

        </>
    )
};

export default Checkout ;