import React from 'react'
import Navbar from './Navbar'

const Dashboard = ({sidebarToggle,setSidebarToggle}) => {
  return (
<div className={`${sidebarToggle ? "" : "ms-64" }w-100`}>
    <Navbar
     sidebarToggle={sidebarToggle}
     setSidebarToggle={setSidebarToggle}/>
</div> 
 )
}

export default Dashboard