import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import insta from '../../assets/instagram.png'
import fb from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import { Link } from 'react-router-dom';



export const BackgroundText = () => {

const today = new Date()
  
useEffect(()=>{ 
    const today_day = today.getDate() // return day of the month
    console.log(today_day)
    const today_month = today.getMonth() + 1
    console.log(today_month)
  
    const today_name_month = today.toLocaleString('default', {month:'short'})
    console.log(today_name_month)
  },[today])
  

    
  return (
    <div className='w-2/6 flex flex-col items-start content-start justify-between '>
        <div>
            <img src={logo} alt='logo' className='h-auto max-w-14 hover:cursor-pointer hover:scale-x-125 hover:scale-y-125 hover:transition-all hover:duration-300'></img>
        </div>
        <div className='flex flex-col items-start justify-between gap-6 py-20 px-20 bg-image-background z-10 min-w-background'>
            <h2 className='text-image-text text-4xl'>
                Today {today_name_month} {today_day}
            </h2> 
            <h1 className='uppercase text-image-text text-9xl'>
                sale
            </h1>
            <p className='text-red-700 tracking-wide text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quod dolorem saepe quas veritatis earum.</p>
            <h2 className='uppercase text-image-text text-4xl font-bold'>50% off</h2>
            <button className='border-x-4 border-y-4 border-red-700 px-6 py-3 hover:scale-90 hover:duration-500 self-end'>
              <Link to={'/shopping'}>
                <h2 className='text-image-text text-4xl '>Shop Now</h2>
              </Link>
            </button>
        </div>
        <div>
            <div>
                <Link to='/' className='text-2xl'>
                    www.fashiondays.com
                </Link>
            </div>
            <div className='flex flex-row space-x-6 mt-3'>
                <a href='https://www.instagram.com/bia.bara01/' aria-label='Instagram'>
                    <img src={insta} alt='Instagram' className='w-6 h-6 object-contain hover:scale-125 hover:transition-all hover:duration-500' />
                </a>
                <a href='https://www.facebook.com/bara.bianca.750' aria-label='Facebook'>
                    <img src={fb} alt='Facebook' className='w-6 h-6 object-contain hover:scale-125 hover:transition-all hover:duration-500' />
                </a>
                <Link to='/twitter' aria-label='Twitter'>
                    <img src={twitter} alt='Twitter' className='w-6 h-6 object-contain hover:scale-125 hover:transition-all hover:duration-500' />
                </Link>
            </div>
        </div>
        
    </div>
  )
}
