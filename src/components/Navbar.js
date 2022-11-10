import React from 'react'
import { NavLink} from 'react-router-dom'
import {AiOutlineCloseSquare} from 'react-icons/ai'
export default function Navbar() {
    const [nav, navState] = React.useState(false)
  return (
        <div className='flex justify-between items-center h-[8vh] w-screen text-white px-5 md:px-0'>
            <div className='md:px-5'>
                <h5 style={{letterSpacing: "5px"}}>Jake.</h5>
            </div>
            <ul className='flex justify-between text-[11px] gap-14 pr-10 sm:hidden'>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/" end> Home </NavLink></li>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/projects" end> Projects </NavLink></li>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/about" end> About </NavLink></li>
                <li className=' cursor-pointer hover:text-purple-100 '><NavLink exact="true" activeclassname="active" to="/contact" end> Contact </NavLink></li>
            </ul>
            <button className='sm:block hidden rounded mr-8' onClick={()=> navState((prev) => !prev)}>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                    </path>
                </svg>
            </button>
            <div className={nav ? 'fixed md:flex flex-col h-screen justify-evenly items-center top-0 bg-[#28045C] bg-opacity-95 z-50 hidden' : 'hidden'}>
                 <button
                    className="border-0 text-white text-[25px] leading-none font-semibold" onClick={()=> navState((prev) => !prev)}>
                    <AiOutlineCloseSquare className=' text-gray-400'/>
                  </button>
                  <NavLink className={(navData) => navData.isActive ? "active1 w-screen text-center flex items-center justify-center h-[15%]" : " w-screen text-center flex items-center justify-center h-[15%] bg-[#6905F9]" } to="/" end>Home</NavLink>
                <NavLink className={(navData) => navData.isActive ? "active1 w-screen text-center flex items-center justify-center h-[15%]" : " w-screen text-center flex items-center justify-center h-[15%] bg-[#6905F9]" } to="/projects" end>Projects</NavLink>
                <NavLink className={(navData) => navData.isActive ? "active1 w-screen text-center flex items-center justify-center h-[15%]" : " w-screen text-center flex items-center justify-center h-[15%] bg-[#6905F9]" } to="/about" end>About</NavLink>
                <NavLink className={(navData) => navData.isActive ? "active1 w-screen text-center flex items-center justify-center h-[15%]" : " w-screen text-center flex items-center justify-center h-[15%] bg-[#6905F9]" } to="/contact" end>Contact</NavLink>
            </div>
        </div>
  )
}
