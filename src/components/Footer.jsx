import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='pt-7 bg-violet-500 p-5'>
        <div className="grid grid-cols-4 p-5 text-white font-bold ">
          <div className='text-xl '>
            <Link to={'/'}>
              <i className="fa-solid fa-truck  "></i> <span>E CArt</span>
            </Link>
            <p className='leading-[28px] mt-2 text-base'>
              Designed and built with all the love in the world by <br/> the  Luminar team with the help of our <br/> contributors. <br/>
              Code licensed Luminar, docs CC BY 3.0. <br/>
              Currently v5.3.2.
            </p>
          </div>
           <div className='text-xl ms-10 '>
           
               <span>Links</span>
           
            
            <ul className='leading-[28px] mt-2 text-base'>
              
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/cart'}>Cart</Link></li>
              <li><Link to={'/wishlist'}>Wishlist</Link></li>
            </ul>
          </div>
          <div className='text-xl ms-10 '>
           
               <span>Guides</span>
           
            
            <ul className='leading-[28px] mt-2 text-base'>
              <li>React</li>
              <li>React Bootstrap</li>
              <li>React Router</li>
            </ul>
          </div>
       <div className='text-xl '>
           
               <span>Contact Us</span>
           
            <form className='flex'>
              <input type="text" className='border bg-white text-black text-base py-2 px-17 rounded mt-2' placeholder='Enter Your EmailHere'/>
              <button  className=''><i className="fa-solid fa-arrow-right" ></i></button>
            </form>
            <ul className='leading-[28px] mt-2 text-base flex justify-around'>
             <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
             <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
             <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
             <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
             <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
             <li><a href="#"><i className="fa-solid fa-phone"></i></a></li>
            </ul>
          </div>

        </div>
        <p className='text-white text-sm font-bold text-center'>Copyright ©Hareesh VS, E Cart. Built with React Redux.</p>
      </div>
    </>

  )
}

export default Footer