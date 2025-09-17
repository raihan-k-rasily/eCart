
import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{backgroundImage:'url("https://cdn.svgator.com/images/2024/04/lava-lamp-animation-404-error-page.gif ")',width:'100%', height:'100vh'}}>
       
       <div className='h-screen  flex items-end justify-center  '>
        <Link to={'/'}>
                <button className='bg-blue-900 py-6 px-35 ms-34 mb-16 rounded-full font-bold text-white'>Back To Home</button>
        </Link>
       
  
       </div>
    </div>
  )
}

export default PageNotFound