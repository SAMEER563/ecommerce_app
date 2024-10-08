import React from 'react'

const NewsletterBox = () => {

const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('Subscribed Successfully');
}

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% extra off</p>
        <p className='text-gray-500 mt-3'>Stay up to date on the latest product releases, special offers & news by signing up for our newsletter.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center g-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required/>
            <button type='submit' className='bg-black text-white  px-6 md:px-8 lg:px-10 text-xs py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox