import React from 'react'
import girlBackground from '../../assets/girl_background.jpg'; // Import the image
 

export const BackgroundImage = () => {
  return (
    <div className='w-4/6 flex items-center justify-start z-0'>
        <img src={girlBackground} className='h-full w-full brightness-90'></img>
    </div>
  )
}
