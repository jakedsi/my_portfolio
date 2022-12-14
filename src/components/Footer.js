import React from 'react'
import {BsFacebook, BsTwitter, BsGithub} from 'react-icons/bs'
import {AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className=' mt-[20vh]'>
      <h1 className='text-center text-white text-[18px] font-medium' style={{letterSpacing:"3px"}}>CONTACT JAKE</h1>
      <div className='h-auto w-screen bg-[#6905F9] rounded-tr-[12rem] rounded-tl-[9rem] flex flex-col justify-center items-center gap-2 py-5'>
        <div className='flex gap-4 text-white'>
          <a href="https://www.linkedin.com/in/jake-aboyot-8b89b9189/" target="_blank" rel="noreferrer"><AiFillLinkedin fontSize="16px"/></a>
          <a href="https://www.facebook.com/jakedsi/" target="_blank" rel="noreferrer"><BsFacebook fontSize="16px"/></a>
          <a href="https://twitter.com/AboyotJake" target="_blank" rel="noreferrer"><BsTwitter fontSize="16px"/></a>
          <a href="https://github.com/jakedsi" target="_blank" rel="noreferrer"><BsGithub fontSize="16px"/></a>
        </div>
        <h5 className='text-[13px] text-white'>or</h5>
        <div className='text-white flex gap-3'>
          <AiOutlineMail /> <h5 className='text-[12px]'>jakeaboyot0@gmail.com</h5>
        </div>
      </div>
    </div>
  )
}
