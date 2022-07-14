import React from 'react';
import {MdDeliveryDining} from "react-icons/md";
import {IoFastFoodOutline} from "react-icons/io5";
import {GiWineBottle, GiMedicines} from "react-icons/gi";

const MobileTabs = () => {
    return (
        <>
         <div className='lg:hidden md:justify-evenly bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-grey-200 border'>
           <div className='flex flex-col items-center text-5xl'>
            <MdDeliveryDining/>
            <h5 className='text-2xl'>Delivery</h5>
           </div>
           
           <div className='flex flex-col items-center text-5xl'>
            <IoFastFoodOutline/>
            <h5 className='text-2xl'>Dining Out</h5>
           </div>
           
           <div className='flex flex-col items-center text-5xl'>
            <GiWineBottle/>
            <h5 className='text-2xl'>Night Life</h5>
           </div>
           
           <div className='flex flex-col items-center text-5xl'>
            <GiMedicines/>
            <h5 className='text-2xl'>Nutrition</h5>
           </div>
           
         </div>
        </>
    );
};


const LargeTabs = () => {
  return (
    <>
     <div className=' container gap-16 px-24 mx-auto hidden lg:flex'> 
     
        <div className='flex items-center gap-3 '>
            <div className='w-12 h-12 bg-grey-100 p-2 rounded-full'>
                <img src='https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png'
                     alt="Delivery"
                      className='w-full h-full '/>
            </div>
            <h3 className='text-xl text-grey-700 '>Delivery</h3>
        </div>
      
      
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-grey-100 p-2 rounded-full'>
                <img src='https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png'
                     alt="Delivery"
                      className='w-full h-full '/>
            </div>
            <h3 className='text-xl text-grey-700 '>Dining Out</h3>
        </div>
       
       
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-grey-100 p-2 rounded-full'>
                <img src='https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png'
                     alt="Delivery"
                      className='w-full h-full '/>
            </div>
            <h3 className='text-xl text-grey-700 '>Night Out</h3>
        </div>
       
       
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-grey-100 p-2 rounded-full'>
                <img src='https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png'
                     alt="Delivery"
                      className='w-full h-full '/>
            </div>
            <h3 className='text-xl text-grey-700 '>Nutrition</h3>
        </div>
     </div>
    </>
  );
};

 
const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    )
};

export default FoodTab;