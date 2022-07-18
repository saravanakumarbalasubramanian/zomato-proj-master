import React from 'react';
import {TbCameraPlus} from "react-icons/tb"

const ImageGrid = (props) => {
  return (
    <>
    
         
                  {/* Mobile Device */}
                  <div className='w-full h-60  md:hidden '>
                    <img
                        src={props.images[0]}
                        alt='restaurant image'
                        className=' w-full h-full object-cover rounded-lg '
                    />

                </div>


                <div className='hidden w-full h-80 md:flex gap-1 '>
                     {/* Large devices */}
                    <div className='w-7/12 h-full overflow-hidden'>
                        <img
                            src={props.images[0]}
                            alt='restaurant image'
                            className=' w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110'
                        />

                    </div>

                    <div className='w-1/6 h-full flex flex-col gap-1 overflow-hidden'>
                        
                        <img
                            src={props.images[1]}
                            alt='restaurant image'
                            className=' w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110'
                        />
                       
                        <img
                            src={props.images[2]}
                            alt='restaurant image'
                            className=' w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110'
                        />

                    </div>

                    <div className='w-1/6 h-full flex flex-col gap-1 overflow-hidden'>
                        
                         <div className='w-full h-full relative'>
                         <img
                            src={props.images[3]}
                            alt='restaurant image'
                            className=' w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-opacity-60 bg-black w-full h-full rounded-lg'/>
                        <h4 className='absolute inset-y-2/4 text-white z-20 w-full h-full text-center font-semibold -mt-3'>View Gallery</h4>
                         </div>

                         <div className='w-full h-full relative'>
                         <img
                            src={props.images[4]}
                            alt='restaurant image'
                            className=' w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-opacity-90 bg-grey-400 w-full h-full rounded-lg'/>
                              <div className='absolute flex flex-col items-center  inset-y-2/4 text-white z-20 w-full h-full text-center font-semibold -mt-8 '>
                                <div className='bg-black p-3 rounded-full bg-opacity-50'>
                                <TbCameraPlus/>
                                </div>
                              <h4 >View Gallery</h4>
                              </div>
                         </div>
                       


                    </div>

                </div>
     

    </>


  )
}

export default ImageGrid ;