import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'

const Navbar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <nav className="px-4 py-4 d-flex flex-row align-items-start" style={{background:'grey'}}>
        <div className='d-flex align-items-center text-xl'>
            <FaBars className='text-white me-4 'onClick={()=>setSidebarToggle(!sidebarToggle)}/><span className='text-white font-semibold'>E-commerce</span>
        </div>
        <div className='d-flex flex-row align-items-start'>
            <div className='d-flex position-relative w-md-65'>
                <span className='md-absolute d-flex'>
                    {/* <button><FaSearch/></button> */}
                    </span>
                <input type="text" placeholder="Search..." className="ms-2"/>
            </div>
            <div className='text-white'>
                <FaBell className='w-6 h-6'/></div>

            <div className='position-relative'><button className='text-white'><FaUserCircle className='w-6 h-6 '/>
            <div className='position-absolute zindex-10 d-none rounded-3 shadow-sm  '>
                <ul>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Settings</a></li>
                    <li><a href="">Logout</a></li>
                    </ul></div></button></div>
        </div>
    </nav>
  )
}

export default Navbar
