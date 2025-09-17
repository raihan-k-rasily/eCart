import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
   <>
        <nav className='flex w-full bg-violet-600 text-white font-bold fixed p-3 justify-between text-xl'>
            <Link to={'/'}>
             <i className="fa-solid fa-truck "></i> <span>E CArt</span>
            </Link>
            <ul className='flex'>
                <li className='px-5'><Link to={'/wishlist'}><i className="fa-solid text-red-500 fa-heart me-1"></i>Wishlist <span  className='p-1 bg-black rounded-full ms-1'>{userWishlist?.length}</span></Link></li>
                 <li className='px-5'><Link to={'/cart'}><i className="fa-solid text-green-400 fa-cart-shopping me-1"></i>Cart <span className='p-1 bg-black rounded-full ms-1'>{userCart?.length}</span></Link></li>
            </ul>
        </nav>
   </>
   
  )
}

export default Header