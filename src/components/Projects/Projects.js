import React from 'react'
import Proj1 from '../../assets/proj_1.jpg'
import Proj2 from '../../assets/proj_2.jpg'
import Confidential from '../../assets/confidential.jpg'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import {DiCodeigniter, DiBootstrap, DiReact} from 'react-icons/di'
import {SiMysql, SiMongodb, SiNodedotjs} from 'react-icons/si'
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Projects() {

    const objData =
        [
          {
            name: "LGU Website", 
            posCompany : "Full Stack Developer - City Government of Digos", 
            img: Proj1, 
            techs: [<DiCodeigniter fontSize="25px" color='white'/>, <DiBootstrap fontSize="25px" color='white'/>, <h1 className='text-white'>AdminLTE</h1>, <SiMysql fontSize="25px" color='white'/>], 
            description:"I created my own Content Management System (CMS) using Codeigniter", 
            functions : "User Accounts, Dept. Hero Section,  Events, Tours, Reports, Ordinance, Posts, Organizational Chart, Featured Data", link : "https://digoscity.gov.ph"
          },

          {
            name: "Personal Yoga Website", 
            posCompany : "Full Stack Developer - Personal Passion Project", 
            img: Proj2, 
            techs: [<SiMongodb fontSize="25px" color='white'/>, <h1 className='text-white'>Express</h1>, <DiReact fontSize="25px" color='white'/>, <SiNodedotjs fontSize="25px" color='white'/>], 
            description:"This project was created for personal passion in web development. I use Netlify as my frontend integration and Heroku as my backend integration", 
            functions : "Home, Classes, About, Login, Signup, RESTful API, JWT Authentication", 
            link : "https://dazzling-maamoul-804a9c.netlify.app/"
          },

          {
            name: "Inventory and A.R.E Monitoring System", 
            posCompany : "Full Stack Developer - City Government of Digos", 
            img: Confidential, 
            techs: [<DiCodeigniter fontSize="25px" color='white'/>, <DiBootstrap fontSize="25px" color='white'/>, <h1 className='text-white'>AdminLTE</h1>, <SiMysql fontSize="25px" color='white'/>], 
            description:"This project was created to trace the flow of items and generate reports", 
            functions : "Receiving ARE, Transfer ARE, Unserviceable, Serviceable, Item Logs, Supplier, Employee, Department, Users, User Permissions"
          },

          {
            name: "Educational Program", 
            posCompany : "Full Stack Developer - City Government of Digos", 
            img: Confidential, 
            techs: [<DiCodeigniter fontSize="25px" color='white'/>, <DiBootstrap fontSize="25px" color='white'/>, <h1 className='text-white'>AdminLTE</h1>, <SiMysql fontSize="25px" color='white'/>], 
            description:"This project was created to input student in scholarship program and generate reports for the univesities and city government of digos", 
            functions : "Create, Read, Update, Delete Scholarship/Students and generate reports"
          },

          {
            name: "City Risk Operation System", 
            posCompany : "Full Stack Developer - City Government of Digos", 
            img: Confidential, 
            techs: [<DiCodeigniter fontSize="25px" color='white'/>, <DiBootstrap fontSize="25px" color='white'/>, <h1 className='text-white'>AdminLTE</h1>, <SiMysql fontSize="25px" color='white'/>], 
            description:"This is a rapid development project which is created due to an earthquake happened on December 2019 which affected many houses and establishments", 
            functions : "Input houses/establishments who are the most needed for assistance and generate reports"
          },

        ]
    const [data, funcData] = React.useState()
    const [showModal, setShowModal] = React.useState(false);
    const showDetails = (data) => {
      setShowModal(true)
      funcData(objData[data])
    }

  return (
    <div className='h-auto'>
        <h1 className='text-center text-white text-[20px] font-medium mt-[5vh]' style={{letterSpacing:"3px"}}>PROJECTS</h1>
        <div className='flex my-16 px-32 justify-center flex-wrap xl:px-1'>
            <div className='flex flex-col justify-center items-center w-[350px] my-4'>
                <LazyLoadImage effect="blur" src={Proj1} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(0px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>LGU Website</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold' onClick={() => showDetails(0)}>Details</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[350px] my-4'>
                <LazyLoadImage effect="blur" src={Proj2} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(0px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>Personal Yoga Website</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold' onClick={() => showDetails(1)}>Details</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[350px] my-4'>
                <LazyLoadImage effect="blur" src={Confidential} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(0px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>Inventory and A.R.E Monitoring System</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold' onClick={() => showDetails(2)}>Details</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[350px] my-4'>
                <LazyLoadImage effect="blur" src={Confidential} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(0px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>Education Program</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold' onClick={() => showDetails(3)}>Details</button>
            </div>
            <div className='flex flex-col justify-center items-center w-[350px] my-4'>
                <LazyLoadImage effect="blur" src={Confidential} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(0px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>City Risk Operating System</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold' onClick={() => showDetails(4)}>Details</button>
            </div>
        </div>

        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-[#6905f9]">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
    
                  
                </div> */}
                <button
                    className="ml-auto border-0 text-white float-right text-[25px] leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineCloseSquare className=' text-gray-400'/>
                 
                  </button>
                {/*body*/}
                <div className="relative px-6 flex gap-5 bg-[#6905f9] lg:flex-col">
                  <LazyLoadImage src={data.img} alt="" className='w-[450px]  mb-5  lg:w-[350px] 1xs:w-full' effect="blur"/>
                  <div className='w-[450px] mb-5 flex flex-col justify-between border-l border-white lg:border-t lg:border-l-0 lg:pb-5 lg:w-[350px] 1xs:w-full pl-5 lg:pt-5'>
                    <div className='text-left lg:text-center'>
                    <h1 className='text-[25px] text-white font-bold'>{data.name}</h1>
                    <h1 className='text-[10px] text-gray-400 font-bold'>{data.posCompany}</h1>
                    <h1 className='text-[12px] text-white font-normal mt-5'>Short Description : <br/><span className='text-[11px] text-gray-300'>{data.description}</span> </h1>
                    <h1 className='text-[12px] text-white font-normal mt-4'>Functions Implemented: <br/><span className='text-[11px] text-gray-300'> {data.functions}</span></h1>
                    </div>
                    
                    <div className='flex mt-8 lg:flex-col lg:justify-center lg:items-center lg:gap-5'>
                      <div className='flex gap-3 mt-1 items-center'>
                      <h1 className='text-[13px] text-white'>Technology used :</h1>
                        {data.techs.map((info, i) =>{
                            return(
                              <p>{info}</p>
                            )
                          })
                        }
                      </div>
                      <div className='flex gap-3 ml-auto mt-auto lg:ml-0'>
                        {
                        data.link 
                        ? 
                        <a href={data.link} target="_blank" rel="noreferrer"><button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold'>DEMO</button></a>
                        :
                        null
                        }
                      </div>
                     </div>
                     
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className=" opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
