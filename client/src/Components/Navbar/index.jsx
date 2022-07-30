import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";


// component
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';


const MobileNav = ({SignIn, SignUp}) => {

 const [isDropDownOpen, setIsDropDownOpen] = useState(false);


    return (
        <div className='flex w-full items-center justify-between lg:hidden'>
            <div className="w-28">
                <img
                    src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                    alt="logo"
                    className="w-full h-full"
                />
            </div>
            <div className=' relative flex items-center gap-3'>
                <button className='bg-zomato-400 text-white py-2 px-3 rounded-full'>
                    Use App
                </button>
                    <span onClick={() => setIsDropDownOpen((prev) => !prev)} className='border  p-2 border-grey-500 text-zomato-400 rounded-full'>
                        <FaUserAlt />
                    </span>
                    {
                        isDropDownOpen && (

                    <div className='absolute  flex flex-col shadow-lg gap-2 z-20 -bottom-16 -right-4 w-full bg-white '>
                    <button onClick={SignIn}> Sign in </button>
                    <button onClick={SignUp}> Sign up </button>
                    </div>
                        )
                    }
            </div>
        </div>

    );
};

const LargeNav = ({SignIn, SignUp}) => {
    return (
        <>
            <div className='hidden container px-20 mx-auto  lg:inline'>
                <div className=' hidden lg:flex gap-4 w-full items-center lg:justify-around '>
                    <div className="w-28">
                        <img
                            src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className='w-3/4 bg-white shadow-md p-3 border border-grey-100 rounded-md flex items-center gap-3'>
                        <div className='flex items-center gap-2 border-r-2 border-grey-200 pr-2'>
                            <span className='text-zomato-400'>
                                <HiLocationMarker />
                            </span>
                            <input type="text" placeholder='Bengaluru' className='focus:outline-none' />
                            <IoMdArrowDropup />
                        </div>
                        <div className='flex items-center gap-2 w-full'>
                            <RiSearch2Line />
                            <input type="search" placeholder='Search for restaurant, cuisine or a dish' className='w-full focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <button onClick={SignIn} className='text-grey-400 text-xl hover:text-grey-600'>Login</button>
                        <button onClick={SignUp} className='text-grey-400 text-xl hover:text-grey-600'>Signup</button>
                    </div>
                </div>
            </div>
        </>
    );
};


const Navbar = () => {


    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const openSignInModal = () =>setOpenSignin(true)
    const openSignUpModal = () =>setOpenSignup(true)

    return (
        <>
            <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
            <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
            <nav className='p-4 bg-white shadow-md lg:shadow-none w-full flex items-center'>

                <MobileNav SignIn={openSignInModal} SignUp={openSignUpModal} />
                <LargeNav SignIn={openSignInModal} SignUp={openSignUpModal} />


            </nav>
        </>
    );
};

export default Navbar;