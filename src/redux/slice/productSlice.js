import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts",async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result.data.products)
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products
})

const productSlice =  createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        loading:true,
        error:''
    },
    reducers:{
        // synchronus action function
    },
    extraReducers:(builder)=>{
          builder.addCase(fetchAllProducts.pending,(state,action)=>{
            state.allProducts = []
            state.loading = true
            state.error = ""
          }),
          builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.allProducts = action.payload
            state.loading = false
            state.error = ""
          }),
          builder.addCase(fetchAllProducts.rejected,(state,action)=>{
            state.allProducts = []
            state.loading = false
            state.error = "Api Call Failed"
          })

    }
})

export default productSlice.reducer