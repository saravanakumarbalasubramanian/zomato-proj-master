import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TiChevronRight } from "react-icons/ti";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IoMdCopy } from "react-icons/io";
import { FaDirections } from "react-icons/fa"

// component
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/restaurant/MenuSimilarRestaurantcard';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import Mapview from '../../Components/restaurant/Mapview';


const Overview = () => {

  const { id } = useParams();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>

      <div className='flex flex-col md:flex-row relative'>



        <div className='w-full md:w-8/12'>

          <h2 className='font-semibold text-lg md:text-xl my-4 '>About this Place</h2>

          <div className='flex justify-between items-center'>
            <h4 className='text-lg font-semibold'>Menu</h4>
            <Link to={`/restaurant/${id}/menu`} >
              <span className='flex items-center gap-1 text-zomato-400'> See all menu <TiChevronRight /> </span>
            </Link>
          </div>

          <div className='flex flex-wrap gap-3  my-4 '>
            <MenuCollection
              menuTitle="Menu"
              image="https://b.zmtcdn.com/data/menus/382/50382/598077ec2bc2e6829b2c9df65e00e73e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
              pages="3 pages"
            />
          </div>
          <h4 className='text-2xl font-semibold my-4'>Cuisines</h4>
          <div className='flex flex-wrap gap-5'>
            <span className='border border-grey-500 text-cyan-600 px-3 py-1 rounded-full'>Pizza</span>
            <span className='border border-grey-500 text-cyan-600 px-3 py-1 rounded-full'>Fast Food</span>
            <span className='border border-grey-500 text-cyan-600 px-3 py-1 rounded-full'>Desserts</span>
            <span className='border border-grey-500 text-cyan-600 px-3 py-1 rounded-full'>Beverages</span>
          </div>

          <div className='py-5'>
            <h4 className='text-2xl font-semibold'>People Say This Place Is Known For</h4>
            <h5 className='text-sm mt-2 '>Economical, Great Ambiance, Amazing Food, Staff</h5>
          </div>

          <div className='my-4'>
            <h4 className='text-2xl font-semibold '>Average Cost</h4>
            <h6>₹400 for two people (approx.)</h6>
            <small className='text-grey-200'>Exclusive of applicable taxes and charges, if any</small>
          </div>

          <div>
            <h4 className='text-2xl font-semibold '>Similar Restaurants</h4>
            <Slider {...settings}>
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/chains/4/19418904/c3ba61fd0926df1a946a7dd02e7d658a_featured_v2.jpg?output-format=webp"
                title="Royale Rolls"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/chains/4/19418904/c3ba61fd0926df1a946a7dd02e7d658a_featured_v2.jpg?output-format=webp"
                title="Royale Rolls"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/chains/4/19418904/c3ba61fd0926df1a946a7dd02e7d658a_featured_v2.jpg?output-format=webp"
                title="Royale Rolls"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/chains/4/19418904/c3ba61fd0926df1a946a7dd02e7d658a_featured_v2.jpg?output-format=webp"
                title="Royale Rolls"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/chains/4/19418904/c3ba61fd0926df1a946a7dd02e7d658a_featured_v2.jpg?output-format=webp"
                title="Royale Rolls"
              />
              <MenuSimilarRestaurantcard
                image="https://b.zmtcdn.com/data/pictures/chains/4/19418904/c3ba61fd0926df1a946a7dd02e7d658a_featured_v2.jpg?output-format=webp"
                title="Royale Rolls"
              />
            </Slider>

          </div>



          <div className='my-4'>

            <h4 className='text-2xl font-semibold'>Rate your experience for</h4>

            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />

          </div>
          <div className='my-4 w-full  md:hidden flex flex-col gap-4'>
           <Mapview
            title="Domino's Pizza"
            phno="+919513746301"
            mapLocation={[12.975333063590396, 77.60497450957986]}
            address="30, Frist Floor, Opposite Guzzlers Inn Rest House Road, MG Road, Bangalore" 
            />
          </div>
          <div className='my-4 flex flex-col gap-4'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>


        <aside 
        style={{ height: "fit-content" }} 
        className='hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md rounded-md flex flex-col gap-4
        '>
          <Mapview
            title="Domino's Pizza"
            phno="+919513746301"
            mapLocation={[12.975333063590396, 77.60497450957986]}
            address="30, Frist Floor, Opposite Guzzlers Inn Rest House Road, MG Road, Bangalore" 
            />
        </aside>
      </div>
    </>
  );
};

export default Overview;