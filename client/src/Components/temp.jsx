import React from 'react' ;
import { useLocation } from 'react-router-dom';
const Temp = () => {
  const loc = useLocation();
  return (
    <div className='px-4'>Hello This is a Temp Component {loc.pathname}</div>
  )
}

export default Temp ;