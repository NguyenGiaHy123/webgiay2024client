import {GetProductTypeKey} from "./pathApi";
import { createSlice } from "@reduxjs/toolkit";
const ProductKeySlice=createSlice({
    name:'ProductTypeKey',
    initialState:{
        ProductSlice:[],
        ProductKeySliceTotal:[],
        loading:false,
    },
    extraReducers:{
        [GetProductTypeKey.pending]:(state,action)=>{
            state.loading=true;
        }
        ,
        [GetProductTypeKey.fulfilled]:(state,action)=>{

            state.loading=false;
            const {listProductFilterPage,listProductALLtypes}=action.payload;
            console.log(action.payload);
            state.ProductSlice=listProductFilterPage;
            state.ProductKeySliceTotal=listProductALLtypes;
           
        }
        ,
        [GetProductTypeKey.rejected]:(state,action)=>{
            state.loading=false;
          
        }
    }
})

const {reducer}=ProductKeySlice;
export default reducer;