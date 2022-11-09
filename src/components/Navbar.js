import React from 'react'
import { NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
        <div className='flex justify-between items-center h-[8vh] w-screen text-white px-5'>
            <div>
                <h5 style={{letterSpacing: "5px"}}>Jake.</h5>
            </div>
            <ul className='flex justify-between text-[11px] gap-14 pr-10'>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/" end> Home </NavLink></li>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/projects" end> Projects </NavLink></li>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/about" end> About </NavLink></li>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/contact" end> Contact </NavLink></li>
            </ul>
        </div>
  )
}
