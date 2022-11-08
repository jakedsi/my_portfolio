import React from 'react'

export default function Contact() {
  return (
    <div className='h-auto'>
    <h1 className='text-center text-white text-[20px] font-medium my-[5vh]' style={{letterSpacing:"3px"}}>CONTACT</h1>
    <div className='w-screen text-center mt-[9vh] '>
        <div className='flex flex-col w-[50vw] bg-[#6905F9] mx-auto py-10 px-10 rounded-[40px]'>
            <h1 className='text-white text-[11px]'>Send me a message</h1>
            <h1 className='text-white text-[13px] py-2'>Your Email <span className=' text-red-600'>*</span></h1>
            <input type="text" className='w-full'/>
            <h1 className='text-white text-[13px] py-2'>Message <span className=' text-red-600'>*</span></h1>
            <textarea name="" id="" cols="30" rows="10" className='w-full'></textarea>
            <div className='w-full'>
                <button className='mt-5 px-2 py-[3px] bg-[#FFD63C] rounded text-[12px] font-semibold w-[20%]'>Send Message</button>
            </div>
        </div>
    </div>
    </div>
  )
}
