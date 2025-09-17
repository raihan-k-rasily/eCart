import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice'
import wishlistSlice from './slice/wishlist'
import cartSlice from './slice/cartSlice'

const cartStore = configureStore({
    reducer:{
      productsReducer: productSlice,
      wishlistReducer : wishlistSlice,
      cartReducer : cartSlice
    }
})
export default cartStore