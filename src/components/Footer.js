import React from 'react'
import {BsFacebook, BsTwitter, BsTelegram, BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className=' mt-[20vh]'>
      <h1 className='text-center text-white text-[18px] font-medium' style={{letterSpacing:"3px"}}>CONTACT JAKE</h1>
      <div className='h-auto w-screen bg-[#6905F9] rounded-tr-[12rem] rounded-tl-[9rem] flex flex-col justify-center items-center gap-2 py-5'>
        <div className='flex gap-4 text-white'>
          <BsFacebook fontSize="16px"/>
          <BsTwitter fontSize="16px"/>
          <BsTelegram fontSize="16px"/>
          <BsGithub fontSize="16px"/>
        </div>
        <h5 className='text-[13px] text-white'>or</h5>
        <div className='text-white flex gap-3'>
          <AiOutlineMail /> <h5 className='text-[12px]'>jakeaboyot0@gmail.com</h5>
        </div>
      </div>
    </div>
  )
}
