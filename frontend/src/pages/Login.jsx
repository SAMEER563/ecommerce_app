import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {

 const [currentState, setCurrentState] = useState('Login');

 const onSubmitHandler = (e) => {
    e.preventDefault();
    toast.success('Form Submitted');
  }



  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700' action="">
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
     { currentState === 'Login' ? '' :  <input type="text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer text-red-500'>Forgot your password</p>
        {
          currentState === 'Login' ? 
          <p onClick={()=>setCurrentState('SignUp')} className='cursor-pointer'>Create Account</p> : 
          <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here </p>
        }
      </div>
      <button className='bg-black text-white rounded-md px-8 py-2 mt-4 font-light '>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login