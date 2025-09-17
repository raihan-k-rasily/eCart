import React from 'react'
import {useEffect , useState} from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem,incrementQuantity,decrementQuantity,emptyCart  } from '../redux/slice/cartSlice'


<Header />

function Cart() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const [totalCart,setTotalCart] = useState(0)

  useEffect(()=>{
    if(userCart?.length>0){
      setTotalCart(Math.ceil(userCart?.map(product=>product.totalPrice).reduce((curr,acc)=>curr+acc)))
    }
  },[userCart])

  const handleDecrementQuantity = (product)=>{
    if(product.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkOut = ()=>{
    dispatch(emptyCart())
    alert("Your order has been confirmed... Thanks for Shopping")
    navigate('/')
  }
  return (
    <>
      <Header />
      <div className='pt-17 pb-5 mx-5  '>
        <h1 className='text-3xl font-bold text-center text-red-500 my-10'> Cart Summary</h1>
        {
          userCart?.length>0?
          <div className="grid grid-cols-3 gap-4 my-5">
          <div className="col-span-2 rounded shadow p-5">
            <table className='table-auto p-2 w-full' >
              <thead>
                <tr>
                  <td className='font-semibold'>#</td>
                  <td className='font-semibold'>Name</td>
                  <td className='font-semibold'>Image</td>
                  <td className='font-semibold'>Quantity</td>
                  <td className='font-semibold'>Price</td>
                  <td className='font-semibold'>...</td>
                </tr>
              </thead>
              <tbody>
                {/* duplicate according to cart array */}
                {
                  userCart?.map((product,index)=>
                  <tr>
                  <td>{index+1}</td>
                  <td><Link to={`/${product.id}/view`} className='text-blue-500 underline'>{product?.title?.slice(0,20)}...</Link></td>
                  <td><img width={'70px'} height={'70px'} src={product.thumbnail} alt="produt" /></td>
                  <td>
                    <div className="flex">
                      <button onClick={()=>handleDecrementQuantity(product)} className="font-bold"> - </button>
                      <input type="text" value={product.quantity} className='rounded p-1 mx-1'  style={{width:'40px'}} readOnly/>
                      <button onClick={()=>dispatch(incrementQuantity(product?.id))} className="font-bold"> + </button>
                    </div>
                  </td>
                  <td>${product.totalPrice}</td>
                  <td><button><i onClick={()=>dispatch(removeCartItem(product?.id))} className="fa-solid fa-trash text-red-500"></i></button></td>
                </tr>
                  )
                }
              </tbody>
             
            </table>
             <div className='float-right'>
                  <button className=' bg-red-600 p-2 rounded mt-4 font-bold text-white mx-2' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
                  <Link  className=' bg-blue-600 p-2 rounded mt-4 font-bold text-white mx-2 inline-block' to={'/'} >Shop More</Link>
              </div>
            
          </div>
          <div className="col-span-1 rounded shadow p-5">
              <h1 className='font-bold text-2xl'>Total Amount : <span className='text-red-500'>$ {totalCart}</span></h1>
              <div className='w-full h-1 rounded  bg-black  mb-5 mt-2 '></div>
              <button onClick={()=>checkOut()} className='w-full bg-green-500 p-1 rounded mt-5 font-bold text-white'>CHECK OUT</button>
            </div>

        </div>
        :
        <div className='flex justify-center items-center h-70 flex-col my-70'>
          <img src="https://tse3.mm.bing.net/th/id/OIP.Q1s4YWZ9FQ_JXIbJixu7PAHaE3?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <p className='font-bold  my-10 text-xl'>Your cart is empty...</p>
                <p className='text-blue-500 underline'><Link to={'/'}>Go To Home</Link></p>
        </div>
        }

      </div>

    </>
  )
}

export default Cart