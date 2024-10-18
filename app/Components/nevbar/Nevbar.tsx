import Link from 'next/link'
import React from 'react'
import cssStyle from '../nevbar/nevbar.module.css'

const Nevbar = () => {
  return (
    <header className='bg-blue-700 h-12 pl-10 flex justify-between items-center text-yellow-500'>
      <div className="logo">
            <h1 className='text-3xl m-2'>Nevbar</h1>
      </div>
          <div className='nevigations pr-20'>
            <ul className='flex gap-4 mr-4 cursor-pointer text-2xl'>
                <Link className='hover:text-purple-500' href="/">Home</Link>
                <Link className='hover:text-red-600' href="/about">About</Link>
                <Link className='hover:text-pink-600' href="/contect">Contect</Link>
                <Link className='hover:text-gray-500' href="/services">Services</Link>
            </ul>
      </div>
     </header>
  )
}

export default Nevbar
