import React from 'react'
import Nevbar from '../Components/nevbar/Nevbar'
import cssStyle from '../about/about.module.css'
import Footer from '../Components/footer/Footer'

const Aboutpage = () => {
  return (
    <div>
        <Nevbar/>
      <div className='h-screen w-{100%} text-3xl text-center pt-56 bg-rose-800'>
      <h1>This is About page</h1>
      </div>

      <div className='text-center bg-blue-600 text-purple-950'>
      <a href='/'>Go to HomePage</a>
      </div>

      <Footer/>
    </div>

  )
}

export default Aboutpage
