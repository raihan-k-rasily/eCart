import React, { useEffect , useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slice/productSlice'


function Home() {
  const dispatch = useDispatch()
  const {loading,error,allProducts} =  useSelector(state => state.productsReducer)
  console.log(loading,error,allProducts);
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const [currPage,setCurrPage] = useState(1)
  const currProductLastIndex = currPage * productsPerPage
  const currProductFirstIndex = currProductLastIndex - productsPerPage
  const visibleProductsCard = allProducts?.slice(currProductFirstIndex,currProductLastIndex)

  const navigateBackward = ()=>{
    if(currPage!=1){
      setCurrPage(currPage-1)
    }else{
      setCurrPage(totalPages)
    }
  }
  const navigateForward = ()=>{
    if(currPage!=totalPages){
      setCurrPage(currPage+1)
    }else{
      setCurrPage(1)
    }
  }
  return (
      
    <>
     <Header insideHeader={true}/>
     <div className='pt-17 pb-5 mx-5 '>
      <div className="grid grid-cols-4 gap-4">
       
        { 
        loading? 

         <p>loading</p>
        :
         visibleProductsCard?.length>0?
         visibleProductsCard?.map((product)=>(
           <div key={product.id} className="rounded p-2 shadow">
          {/* image */}
          <img  height={'200px'} src={product.thumbnail}/>
            
            <div className='text-center'>
            {/* title */}
            <h3 className='font-bold text-xl'>{product.title}</h3>
             {/* link */}
             <Link to={`/${product.id}/view`} className='bg-violet-800 text-white p-1 rounded inline-block mt-3' > View More... </Link>
            </div>
           </div> 
         ))
         : 
         <p>Products Are Not Avilable</p>
         
          }
      </div>
    
     </div>
     {/* pagination */}
     <div className="text-center my-10 font-bold text-2xl text-violet-600">
      <button className='cursor-pointer'><i onClick={navigateBackward} className="fa-solid fa-backward"></i></button>
      <span> { currPage } of { totalPages }</span>
      <button className='cursor-pointer'><i onClick={navigateForward} className="fa-solid fa-forward"></i></button>
     </div>
    </>
  )
}

export default Home