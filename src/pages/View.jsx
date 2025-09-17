import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlist'
import { addToCart } from '../redux/slice/cartSlice'

function View() {
   const userWishlist = useSelector(state =>state.wishlistReducer)
   const userCart = useSelector(state=>state.cartReducer)
   const dispatch = useDispatch()
   const [product,setProduct] = useState({})
  const {id} = useParams()
  // console.log(id);
   
  useEffect(()=>{
     const allProducts  = JSON.parse(sessionStorage.getItem("allProducts"))
     setProduct(allProducts.find((item)=>item.id == id))
     },[])

    //  console.log(product);
   
    const handleAddToWishlist = ()=>{
      const existingProduct = userWishlist?.find((item)=>item.id == product.id)
      if(existingProduct){
        alert("product already exist in your whishlist")
      }
      else{
        dispatch(addToWishlist(product))
      }
    }
  
    const handleAddToCart = ()=>{
      dispatch(addToCart(product))
      const existingProduct = userCart?.find(item=>item.id==product.id)
      if(existingProduct){
        alert("Product Updared Successfully")
      }
    }

  return (
    <>
    <Header/>
      <div>

        <div className="grid grid-cols-2 gap-4 p-16">

          
           <div className='flex justify-center items-center flex-col'>
              <div >
                <img height={'250px'} width={'350px'} src={product?.thumbnail} alt="product" />
              </div>
              <div className='flex  my-4 '>
                <button className='py-1 px-2 bg-blue-500 text-white font-medium rounded me-20' onClick={handleAddToWishlist} >ADD To Wishlist</button>
                <button className='py-1 px-2 bg-green-500 text-white font-medium  rounded' onClick={handleAddToCart}>ADD TO Cart</button>
              </div>
           </div>
           <div>
            <h1 className='text-3xl font-bold'>{product?.title}</h1>
            <h2 className='text-2xl text-red-500 font-bold' >$ {product?.price}</h2>
            <h3 className='text-xl  mt-3'><span className='font-bold'>Brand</span> : {product?.brand} </h3>
             <h3 className='text-xl  mt-3'><span className='font-bold'>Categorey</span> : {product?.category} </h3>
             <h3 className='text-xl  mt-3'><span className='font-bold'>Description</span> : {product?.description} </h3>
             <h3 className='text-xl font-bold my-5'>Client Review</h3>
             {/* review tobe duplicate */}
            {
                product?.reviews?.length>0 ?
                product?.reviews?.map(item=>(
                  <div className='rounded shadow my-3 p-2'>
              <p><span className='font-Bold'>{item?.reviewerName} </span> : {item?.comment} !</p>
              <p>Rating : {item.rating} <i className="fa-solid fa-star text-yellow-400"></i></p>

             </div>
                ))
               :
               <p>No Reviews Yet!!!</p>
             }
           </div>


        </div>
        <div>

        </div>

      </div>

    </>
  )
}

export default View