import React from 'react'
import Proj1 from '../../assets/proj_1.jpg'
import Proj2 from '../../assets/proj_2.jpg'
import Confidential from '../../assets/confidential.jpg'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import {DiCodeigniter, DiBootstrap} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'

export default function Projects() {
    const objData =
        [
          {name: "LGU Website", img: Proj1, techs: ["Codeigniter", "Bootstrap", "MySQL"], description:"I created my own Content Management System (CMS) using Codeigniter", functions : "User Accounts, Events, Reports, Ordinance, Posts, Organizational Chart, Featured Data"}
        ]
    const [data, funcData] = React.useState()
    const [showModal, setShowModal] = React.useState(false);
    const showDetails = (data) => {
      setShowModal(true)
      funcData(objData[data])
    }

    
  return (
    <div className='mt-[10vh]'>
        <h1 className='text-center text-white text-[20px] font-medium' style={{letterSpacing:"3px"}}>PROJECTS</h1>
        <div className='flex my-16 px-32 justify-center flex-wrap'>
            <div className='flex flex-col justify-center items-center w-[30%] my-5'>
                <img src={Proj1} alt="" className='h-[180px] w-[285px] rounded-xl' style={{filter: "drop-shadow(7px 6px 9px rgba(255, 215, 58, 0.15))"}}/>
                <h1 className='mt-3 text-white text-[13px] font-medium'>LGU Website</h1>
                <button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold' onClick={() => showDetails(0)}>Details</button>
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
                <div className="relative px-6 flex gap-5 bg-[#6905f9]">
                  <img src={data.img} alt="" className='w-[450px] border-r border-white mb-5'/>
                  <div className='w-[450px] mb-5 flex flex-col justify-between'>
                    <div>
                    <h1 className='text-[25px] text-white font-bold'>{data.name}</h1>
                    <h1 className='text-[12px] text-white font-normal mt-4'>Short Description : <br/><span className='text-[11px] text-gray-300'>{data.description}</span> </h1>
                    <h1 className='text-[12px] text-white font-normal mt-4'>Functions Implemented: <br/><span className='text-[11px] text-gray-300'> {data.functions}</span></h1>
                    </div>
                    
                    <div className='flex'>
                      <div className='flex gap-3 mt-1 items-center'>
                      <h1 className='text-[13px] text-white'>Technology used :</h1>
                        {data.techs.map((info, i) =>{
                          var logo
                          if(info === "Codeigniter"){
                            logo = <DiCodeigniter fontSize="25px" color='white'/>
                          } else if(info === "Bootstrap"){
                            logo = <DiBootstrap fontSize="25px" color='white'/>
                          } else if(info === "MySQL"){
                            logo = <SiMysql fontSize="25px" color='white'/>
                          } 
                            return(
                              <p>{logo}</p>
                            )
                          })
                        }
                      </div>
                      <div className='flex gap-3 ml-auto mt-auto'>
                        <a href="https://digoscity.gov.ph" target="_blank" rel="noreferrer"><button className='mt-2 px-2 py-[2px] bg-[#FFD63C] rounded text-[12px] font-semibold'>DEMO</button></a>
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
