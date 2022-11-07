import React from 'react'
import Proj1 from '../../assets/proj_1.jpg'
import Proj2 from '../../assets/proj_2.jpg'
import Confidential from '../../assets/confidential.jpg'
export default function Projects() {
  return (
    <div className='mt-[10vh]'>
        <h1 className='text-center text-white text-[20px] font-medium' style={{letterSpacing:"3px"}}>PROJECTS</h1>
        <div className='flex my-16 px-32 justify-center flex-wrap'>
            <div className='flex flex-col justify-center items-center w-[30%] my-5'>
                <img src={Proj1} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(7px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>LGU Website</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold'>Details</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[30%] my-5'>
                <img src={Proj2} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(7px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>Personal Yoga Website</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold'>Details</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[30%] my-5'>
                <img src={Confidential} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(7px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>Inventory and A.R.E Monitoring System</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold'>Details</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[30%] my-5'>
                <img src={Confidential} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(7px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>Education Program</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold'>Details</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[30%] my-5'>
                <img src={Confidential} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(7px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>City Risk Operating System</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold'>Details</button>
            </div>
        </div>
    </div>
  )
}
