import React from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { removeWishlistItem } from '../redux/slice/wishlist'
import { addToCart } from '../redux/slice/cartSlice'


function Wishlist() {
  const ourWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item => item.id == product.id)
    if (existingProduct) {
      alert("Product Updared Successfully")
    }
    dispatch(removeWishlistItem(product?.id))
  }
  return (
    <>
      <Header />
      <div className='pt-17 pb-5 mx-5 '>
        <h1 className='text-3xl font-bold text-center text-red-500 m-4'>My Wishlist</h1>


        <div className="grid grid-cols-4 gap-4" >
          {
            ourWishlist?.length > 0 ?
              ourWishlist?.map((item) => (

                <div className="rounded p-2 shadow" key={item.id} >
                  {/* image */}
                  <img height={'200px'} src={item?.thumbnail} />

                  <div className='text-center'>
                    {/* title */}
                    <h3 className='font-bold text-xl'>{item?.title}</h3>
                    {/* icons */}
                    <div className='flex justify-evenly my-2'>
                      <button><i onClick={() => dispatch(removeWishlistItem(item?.id))} className="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                      <button><i onClick={()=> dispatch(handleAddToCart(item))} className="fa-solid fa-cart-plus text-green-500"></i></button>
                    </div>

                  </div>
                </div>
              ))

              :
              <p>Wish List not avilable</p>
          }


        </div>

      </div>

    </>
  )
}

export default Wishlist