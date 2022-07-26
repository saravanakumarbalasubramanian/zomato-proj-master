import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";



const Navbar = () => {
    return (
        <>
            <nav className='p-4 flex bg-white shadow-md lg:shadow-none w-full  items-center'>

                <div className='container px-4 md:px-20 mx-auto'>
                    <div className='flex w-full items-center justify-between'>
                        <FiArrowLeft />
                        <div className="w-28">
                            <img
                                src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                                alt="logo"
                                className="w-full h-full"
                            />
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='flex items-center border flexitems-center gap-2 p-2 border-grey-500 text-zomato-400 rounded-full'>
                                <FaUserAlt /> 
                            </span>
                                Pavan
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;