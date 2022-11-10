import React from 'react'
import Me from '../../assets/me2.png'
import Coding from '../../assets/coding.png'
import Resume from '../../assets/resume/Jake Aboyot.docx'
import { BsCloudDownloadFill, BsChevronRight } from 'react-icons/bs'
import { NavLink} from 'react-router-dom'
export default function Hero() {
  return (
    <div>
        <div className='h-[70vh] w-screen bg-[#6905F9] rounded-tr-[12rem] rounded-bl-[12rem]' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/backgroundHero.png'})`,
            backgroundPositionY: 'center',
            backgroundPositionX: 'center'}}></div>
        <div className='absolute top-0 w-screen flex justify-between gap-10 mt-[8vh] 1xs:gap-1'>
            <div className='flex justify-between w-[55%] md:flex-col md:justify-start'>
            <div className='px-5'>
                <a href={Resume} download><button className='flex items-center text-white gap-2 mt-[2vh] text-[11px] bg-[#28045C] py-1 px-3 rounded-md'><BsCloudDownloadFill /> Resume</button></a>
            </div>
            <div className='mt-[20vh] md:px-5 md:mt-[10vh]'>
                <div className='text-left flex flex-col'>
                <p className='text-white xs:text-[11px]'>I'm a</p>
                <h1 className='text-[#FFD73A] font-black text-[40px] sm:text-[30px] xs:text-[20px]'>Web Developer_</h1>
                <p className='text-white text-[12px] pl-1 1xs:text-[10px]'>with 3+ Years experience in Web Development</p>
                <div className='flex mt-3 gap-3 1xs:flex-col'>
                <NavLink exact="true" activeclassname="active" to="/contact" end> <button className='flex items-center text-[10px] text-white py-2 px-5 w-[150px] justify-between bg-[#28045C] rounded hover:rounded-lg'>I need a website  <BsChevronRight className='text-right'/></button> </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" end> <button className='flex items-center text-[10px] text-white py-2 px-5 w-[150px] justify-between bg-[#7E28FF] rounded hover:rounded-lg'>I'm looking to hire  <BsChevronRight className='text-right'/></button></NavLink>
                </div>
                </div>
            </div>
            </div>
            <img src={Me} alt="" className='h-[60vh] right-0 pr-[170px] z-20 mt-[10vh] lg:pr-[100px] sm:right-0 sm:pr-3'/>
        </div>
        <img src={Coding} alt="" className='absolute top-[15vh] right-[130px] z-10 lg:right-[50px] sm:right-0 sm:h-[200px] sm:top-[25vh] 1xs:hidden' />
    
    </div>
  )
}
