import React from 'react';
import { TiChevronRight } from "react-icons/ti";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { IoMdCopy } from "react-icons/io";
import { FaDirections } from "react-icons/fa"

const Mapview = (props) => {
  return (
    // 12.975333063590396, 77.60497450957986
    <>
       <div>
            <h4 className='text-xl font-light'>Call</h4>
            <h5 className='text-zomato-400 font-medium'>{ props.phno }</h5>
          </div>

          <div>
            <h4 className='text-xl font-light '>Direction</h4>

            <div className='w-full h-48 '>
              <MapContainer center={props.mapLocation} zoom={13}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.mapLocation}>
                  <Popup>
                  {props.title}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

          </div>
          <p> {props.address}</p>

          <div className='flex items-center gap-3 my-3'>

            <button className='flex  items-center gap-2 px-3 py-2 text-grey-700 border border-grey-400 rounded-lg'>
              <IoMdCopy /> Copy
            </button>

            <button className='flex  items-center gap-2 px-3 py-2 text-grey-700 border border-grey-400 rounded-lg'>
              <span className='text-zomato-400'>
                <FaDirections />
              </span>
              Direction
            </button>
          </div>
    </>
  )
}

export default Mapview