import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loading from "../../assets/loading.gif"

export default function Contact() {
  const form = useRef();
  const [res, funcRes] = React.useState({})
  const [loading, setLoading] = React.useState(false);
  const [inputVal, funcInput] = React.useState({
    user_name : "",
    user_email : "",
    message : ""
    })

  function changeMe(event){
      const {name, value, checked, type} = event.target
      funcInput(prevValue =>{
          return {
              ...prevValue,
              [name] : type === "checkbox" ? checked : value
          }
      })
      funcRes({})
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    if(e.target.user_name.value === "" || e.target.user_email.value === "" || e.target.message.value === "") 
    return funcRes({type:"err", info: "Please fill all inputs"})

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    try {
      setLoading(true);
      funcRes({})
        if (e.target.user_email.value.match(validRegex)){
          emailjs.sendForm('service_i4av3rb', 'template_5rtw1ma', form.current, 'hEF-9XVW9qIkILo7g')
          .then((result) => {
            funcRes({type:"succ", info: result.text})
            funcInput({user_name : "",user_email : "",message : ""})
            setLoading(false);
          }, (error) => {
            funcRes({type:"err", info: error.text})
            funcInput({user_name : "",user_email : "",message : ""})
            setLoading(false);
          });
        }else{
          funcRes({type:"err", info: "Please input valid email"})
        }
    }catch (err) {
      setLoading(false);
      console.error(err);
    }


  };
  return (
    <div className='h-auto'>
    <h1 className='text-center text-white text-[20px] font-medium my-[5vh]' style={{letterSpacing:"3px"}}>CONTACT</h1>
    <div className='w-screen text-center mt-[5vh] '>
        <div className='flex flex-col w-[450px] 1xs:w-screen bg-[#6905F9] mx-auto py-10 px-10 rounded-[40px]'>
          <form ref={form} onSubmit={sendEmail}>
            <h1 className='text-white text-[11px]'>Send me a message</h1>
            <h1 className='text-white text-[13px] py-2'>Your Name <span className=' text-red-600'>*</span></h1>
            <input type="text" className='w-full rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center' name="user_name" onChange={changeMe} defaultValue={inputVal.user_name}/>
            <h1 className='text-white text-[13px] py-2'>Your Email <span className=' text-red-600'>*</span></h1>
            <input type="text" className='w-full rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center' name="user_email" onChange={changeMe} defaultValue={inputVal.user_email}/>
            <h1 className='text-white text-[13px] py-2'>Message <span className=' text-red-600'>*</span></h1>
            <textarea name="message" id="" cols="30" rows="10" className='w-full rounded-sm border-white focus:outline-none focus:border-sky-500 text-black text-center' onChange={changeMe} defaultValue={inputVal.message}></textarea>
            <div className='w-full'>
                <button className='mt-5 px-2 py-[3px] bg-[#FFD63C] rounded text-[12px] font-semibold w-[120px]'>Send Message</button>
            </div>
          </form>
          <div className='flex justify-center mt-5'>
          {loading ? <img src={Loading} alt="" className='h-10' /> : null}
          </div>
          <label className={res.type === "err" ? "mt-5 text-red-500" : "mt-5 text-green-500"}>{res.info}</label>
        </div>
    </div>
    </div>
  )
}
