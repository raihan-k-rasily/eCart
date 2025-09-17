import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
<Header />

function Cart() {
  return (
    <>
      <Header />
      <div className='pt-17 pb-5 mx-5  '>
        <h1 className='text-3xl font-bold text-center text-red-500 my-10'> Cart Summary</h1>
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
                <tr>
                  <td>1</td>
                  <td>Title</td>
                  <td><img width={'70px'} height={'70px'} src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="produt" /></td>
                  <td>
                    <div className="flex">
                      <button className="font-bold"> - </button>
                      <input type="text" value={10} className='rounded p-1 mx-1'  style={{width:'40px'}} readOnly/>
                      <button className="font-bold"> + </button>
                    </div>
                  </td>
                  <td>$300</td>
                  <td><button><i className="fa-solid fa-trash text-red-500"></i></button></td>
                </tr>
              </tbody>
             
            </table>
             <div className='float-right'>
                  <button className=' bg-red-600 p-2 rounded mt-4 font-bold text-white mx-2'>Empty CArt</button>
                  <Link  className=' bg-blue-600 p-2 rounded mt-4 font-bold text-white mx-2 inline-block'>Shop More</Link>
              </div>
            
          </div>
          <div className="col-span-1 rounded shadow p-5">
              <h1 className='font-bold text-2xl'>Total Amount : <span className='text-red-500'>$ 500</span></h1>
              <div className='w-full h-1 rounded  bg-black  mb-5 mt-2 '></div>
              <button className='w-full bg-green-500 p-1 rounded mt-5 font-bold text-white'>CHECK OUT</button>
            </div>

        </div>

      </div>

    </>
  )
}

export default Cart