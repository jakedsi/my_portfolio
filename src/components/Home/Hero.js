import React from 'react'
import Me from '../../assets/me2.png'
import Coding from '../../assets/coding.png'
import { BsCloudDownloadFill, BsChevronRight } from 'react-icons/bs'
export default function Hero() {
  return (
    <div>
        <div className='h-[70vh] w-screen bg-[#6905F9] rounded-tr-[12rem] rounded-bl-[12rem]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/backgroundHero.png'})`,
            backgroundPositionY: 'center',
            backgroundPositionX: 'center'}}></div>
        <div className='absolute top-0 w-screen flex justify-between gap-10'>
            <div className='flex justify-between w-[55%]'>
            <div className='px-5'>
                <button className='flex items-center text-white gap-2 mt-[10vh] text-[11px] bg-[#28045C] py-1 px-3 rounded-md'><BsCloudDownloadFill /> Resume</button>
            </div>
            <div className='mt-[32vh]'>
                <div className='text-left flex flex-col'>
                <p className='text-white'>I'm a</p>
                <h1 className='text-[#FFD73A] font-black text-[40px]'>Web Developer_</h1>
                <p className='text-white text-[12px] pl-1'>3+ Years experience in Web Development</p>
                <div className='flex mt-3 gap-3'>
                    <button className='flex items-center text-[10px] text-white py-2 px-5 w-[150px] justify-between bg-[#28045C] rounded'>I need a website  <BsChevronRight className='text-right'/></button>
                    <button className='flex items-center text-[10px] text-white py-2 px-5 w-[150px] justify-between bg-[#7E28FF] rounded'>I'm looking to hire  <BsChevronRight className='text-right'/></button>
                </div>
                </div>
            </div>
            </div>
            <img src={Me} alt="" className='h-[60vh] right-0 pr-[170px] z-20 mt-[18vh]'/>
        </div>
        <img src={Coding} alt="" className='absolute top-[135px] right-[130px] z-10' />
    
    </div>
  )
}
