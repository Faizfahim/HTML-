import React from 'react'
import Nevbar from '../Components/nevbar/Nevbar'
import Footer from '../Components/footer/Footer'
import Hero from '../Components/hero/Hero'

const ServicesPage = () => {
  return (
    <div>
        <Nevbar/>
      <Hero/>

      <div className='text-center to-blue-800'>
      <a href='/'>Go to HomePage</a>
      </div>
      <Footer/>
    </div>
  )
}

export default ServicesPage
