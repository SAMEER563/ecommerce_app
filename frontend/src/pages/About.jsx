import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-[400px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/3 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea to provide a plateform where customers can eaisly discover, and purchase a wide range of products from the comfort of their homes. </p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Our products are made from the finest materials and undergo rigorous quality checks to ensure they meet the highest standards.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shop from the comfort of your home and have your order delivered straight to your doorstep in a timely manner.</p>
          
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Custoner Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals are available 24/7 to assist you with any queries or concerns you may have.</p>
         
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About