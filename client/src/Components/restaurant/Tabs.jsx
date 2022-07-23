import React from 'react';
import classnames from "classnames"
import { Link, useLocation, useParams } from "react-router-dom";




const Tab = (props) => {

    const {id} = useParams();


  
    return (
        <Link to={`/restaurant/${id}/${props.route}`}>
        <>
            <div 
               className={ !props.isActive ? "text-grey-500 font-medium" : "text-zomato-400 font-semibold"} >
                <h3 className='text-lg md:text-1xl'>{props.title}</h3>
            </div>
        </>
            </Link>
    );


};




const TabContainer = (props) => {

    const location = useLocation();

    const currentPath = location.pathname;
    
    const tabs = [
        {
            title: "Overview",
            route: "overview",
            isActive: currentPath.includes("overview"),
        },

        {
            title: "Order Online",
            route: "order-online",
            isActive: currentPath.includes("order-online"),
        },

        {
            title: "Reviews",
            route: "reviews",
            isActive: currentPath.includes("reviews"),
        },

        {
            title: "Menu",
            route: "menu",
            isActive: currentPath.includes("menu"),
        },

        {
            title: "Photos",
            route: "photos",
            isActive: currentPath.includes("photos"),
        },
    ];

    return (
        <>

            <div className='flex items-center p-4 border-b-2 gap-8 md:gap-12 overflow-x-scroll'>
                {
                    tabs.map((tab) => (
                        <Tab { ...tab } key={`12345${tab.route}`}/>
                    ))
                }

            </div>

        </>
    );
};

export default TabContainer ;