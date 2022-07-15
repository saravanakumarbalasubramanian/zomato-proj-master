import React from 'react'



const DeliverySmCard = ({ image, title}) => {
  return (

    <>
      <div className='lg:hidden bg-white w-24 shadow rounded-md md:w-56'>
        <div className='w-full h-24'>
          <img
            src={image}
            alt='food'
            className='w-full h-full object-cover rounded-t-md'
          />
        </div>
        <div>
          <h3 className='text-base text-sm font-light my-1 text-center font-medium'>{ title }</h3>
        </div>
      </div>
    </>

  );
};



const DeliveryLgCard = ({ image, title}) => {
  return (
    <>

      <div className='hidden lg:block w-64 h-48'>
        <div className='w-full h-full'>
          <img
            src={image}
            alt='food'
            className='w-full h-full object-cover shadow-lg rounded-md'
          />
        </div>
        <div>
          <h3 className=' text-xl  my-1  font-medium'>{title}</h3>
        </div>
      </div>

    </>
  );
};




const DeliveryCatagory = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCatagory;