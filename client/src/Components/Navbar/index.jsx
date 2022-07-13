import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";




const MobileNav = () => {
    return (
        <div className='flex w-full items-center justify-between md:hidden'>
            <div className="w-28">
                <img
                    src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                    alt="logo"
                    className="w-full h-full"
                />
            </div>
            <div className='flex items-center gap-3'>
                <button className='bg-zomato-400 text-white py-2 px-3 rounded-full'>Use App</button>
                <span className='border p-2 border-grey-500 text-zomato-400 rounded-full'>
                    <FaUserAlt />
                </span>
            </div>
        </div>

    );
};

const MediumNav = () => {
    return (
        <>
            <div className='hidden md:flex gap-4 w-full items-center justify-between lg:w-3/4'>
                <div className="w-28">
                    <img
                        src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className='w-full bg-white shadow-md p-3 border border-grey-100 rounded-md flex items-center gap-3'>
                    <div className='flex items-center gap-2 border-r-2 border-grey-200 pr-2'>
                        <span className='text-zomato-400'>
                            <HiLocationMarker/>
                        </span>
                        <input type="text" placeholder='Bengaluru' className='focus:outline-none'/>
                        <IoMdArrowDropup/>
                    </div>
                    <div className='flex items-center gap-2 w-full'>
                        <RiSearch2Line/>
                        <input type="search" placeholder='Search for restaurant, cuisine or a dish' className='w-full focus:outline-none' />
                    </div>
                </div>
                <div className='flex gap-3'>
                    <button className='text-grey-400 text-xl hover:text-grey-200'>Login</button>
                    <button className='text-grey-400 text-xl hover:text-grey-200'>Signup</button>
                </div>
            </div>
        </>
    );
};


const Navbar = () => {
    return (
        <>
            <nav className='p-4 bg-white shadow-md w-full flex items-center'>

                <MobileNav />
                <MediumNav />


            </nav>
        </>
    );
};

export default Navbar;