import React from 'react'

export default function Navbar() {
  return (
        <div className='flex justify-between items-center h-[8vh] w-screen text-white px-5'>
            <div>
                <h5 style={{letterSpacing: "5px"}}>Jake.</h5>
            </div>
            <div className='flex justify-between text-[11px] gap-14 pr-10'>
                <h1 className='py-1 px-2'>Home</h1>
                <h1 className='py-1 px-2'>Projects</h1>
                <h1 className='py-1 px-2'>About</h1>
                <h1 className='py-1 px-2'>Contact</h1>
            </div>
        </div>
  )
}
