import React from 'react';
import { IoMdStarOutline, IoIosShareAlt } from "react-icons/io"
import { FaDirections } from "react-icons/fa"
import { BsFillBookmarkStarFill } from "react-icons/bs"



//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import InfoButtons from '../Components/restaurant/InfoButtons';



const RestaurantLayout = () => {


    return (
        <>

            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-20">


                <ImageGrid
                    images={[

                        "https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                        "https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                        "https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                        "https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                        "https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",

                    ]}
                />

              <RestaurantInfo 
              name="Domino's Pizza" 
              restaurantRating="3.3" 
              deliveryRating="4.0" 
              cuisine="Pizza, Fast Food, Desserts, Beverages" 
              address="MG Road, Bangalore"/>

              <div className='my-4 flex flex-wrap gap-3'>

                <InfoButtons isActive>
                    <IoMdStarOutline /> Add Review
                </InfoButtons>


                <InfoButtons >
                    <FaDirections /> Direction
                </InfoButtons>

                
                <InfoButtons >
                    <BsFillBookmarkStarFill /> Bookmark
                </InfoButtons>


                <InfoButtons >
                    <IoIosShareAlt /> Share
                </InfoButtons>

              </div>
            </div>

        </>
    )
}

export default RestaurantLayout;