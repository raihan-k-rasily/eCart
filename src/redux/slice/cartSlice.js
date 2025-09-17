import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // add to cart - when add to cart button clicked from view and wishlist
        addToCart :(state,action)=>{
            // find product is in state
            const excistingProduct = state?.find(item=>item.id==action.payload.id)
            if(excistingProduct){
                excistingProduct.quantity++
                excistingProduct.totalPrice=excistingProduct.quantity*excistingProduct.price
                // get remaining products other than excistingProduct
                const remainingProducts = state.filter(item=>item.id!=excistingProduct.id)
                state = [...remainingProducts,excistingProduct]
            }else{
                // add to cart
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        }
        // remove cart item
        // increment quantity
        // decrement quantity 
        // empty cart
    }
})

export const {addToCart} = cartSlice.actions 

export default cartSlice.reducer