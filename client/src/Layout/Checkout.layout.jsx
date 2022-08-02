import React from 'react';


// components
import Navbar from "../Components/Navbar/CheckoutNavbar"


const CheckoutLayout = (props) => {
  return (
    <>
     <Navbar/>
     <div className='container px-4 mx-auto lg:px-20'>
          {props.children}
     </div>
    </>
  )
};

export default CheckoutLayout ;