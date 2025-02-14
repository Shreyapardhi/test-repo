import React from 'react';
import { FaHome } from 'react-icons/fa';

const Sidebar = (sidebarToggle) => {
  return (
    <div className={`${sidebarToggle ? "hidden":" block"}fixed px-4 py-4`} style={{ height: '100vh', width: '250px', background: 'gray' }}>
      <div className=" ">
<h5 className='text-white font-bold'>        Admin dashboard
</h5>      </div>
      <hr/>
      <ul>
        <li className='mt-3 text-white 'style={{ listStyleType: 'none' }}>
            <a href="" className='mb-2 rounded  text-white'> 
                <FaHome className="me-3" style={{ width: '20px', height: '20px' }}></FaHome>Home</a>
        </li>
        <li className='mt-3 text-white 'style={{ listStyleType: 'none' }}>
            <a href="" className='mb-2 rounded  text-white'> 
                <FaHome className="me-3" style={{ width: '20px', height: '20px' }}></FaHome>Home</a>
        </li> <li className='mt-3 text-white 'style={{ listStyleType: 'none' }}>
            <a href="" className='mb-2 rounded  text-white'> 
                <FaHome className="me-3" style={{ width: '20px', height: '20px' }}></FaHome>Home</a>
        </li> <li className='mt-3 text-white 'style={{ listStyleType: 'none' }}>
            <a href="" className='mb-2 rounded  text-white'> 
                <FaHome className="me-3" style={{ width: '20px', height: '20px' }}></FaHome>Home</a>
        </li> <li className='mt-3 text-white 'style={{ listStyleType: 'none' }}>
            <a href="" className='mb-2 rounded  text-white'> 
                <FaHome className="me-3" style={{ width: '20px', height: '20px' }}></FaHome>Home</a>
        </li>
        <li className='mt-3 text-white 'style={{ listStyleType: 'none' }}>
            <a href="" className='mb-2 rounded  text-white'> 
                <FaHome className="me-3" style={{ width: '20px', height: '20px' }}></FaHome>Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
