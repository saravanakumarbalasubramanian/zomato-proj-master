import React from 'react'

const FoodItem = (props) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h5>{props.name}</h5>
                <div className='flex flex-col items-end'>
                    <smal>₹{parseInt(props.price) * parseInt(props.quantity)}</smal>
                    <div className='bg-zomato-400 px-1 text-white rounded flex items-center gap-2'>

                        <button className='bg-zomato-400 text-white rounded p-1'>
                            -
                        </button>

                        <small>1</small>

                        <button className='bg-zomato-400 text-white rounded p-1'>
                            +
                        </button>
                    </div>
                </div>
            </div>
            <hr className='my-1'/>
        </>
    )
}

export default FoodItem