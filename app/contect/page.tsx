import React from 'react'
import Nevbar from '../Components/nevbar/Nevbar'
import cssStyle from '../contect/contect.module.css'
import Footer from '../Components/footer/Footer'

const ContectPage = () => {
  return (
    <div>
        <Nevbar/>
      <div className='h-screen text-center text-2xl pt-60 bg-orange-600 text-orange-950'>
      <h1>This is Contect Page</h1>
      </div>

      <div className='text-center text-xl'>
      <a href='/'>Go to HomePage</a>
      </div>

      <Footer/>
    </div>
  )
}

export default ContectPage
