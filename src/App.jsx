import { useState } from 'react'
import './App.css'
import Dashboard from './assets/components/Dashboard'
import Sidebar from './assets/components/Sidebar'

function App() {
  const [sidebarToggle,setSidebarToggle] =useState(false);
  return (
    <div className="d-flex">
      <Sidebar sidebarToggle={sidebarToggle}/>
      
      <Dashboard 
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}
       />
    </div>
  )
}

export default App
