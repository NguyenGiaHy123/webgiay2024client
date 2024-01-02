import { createSlice } from "@reduxjs/toolkit";
import {GetProductDiscount} from './pathApi';
import {message,notification} from 'antd'

const ProductDiscount=createSlice({
    name:'productType',
    initialState:{
        ProductSlice:[],
        total:0,
        loading:false,
    },
    extraReducers:{
        [GetProductDiscount.pending]:(state)=>{
           state.loading=true
        },
        [GetProductDiscount.rejected]:(state)=>{
            state.loading=false;
            
        }
        ,[GetProductDiscount.fulfilled]:(state,action)=>{
           
            const {listProductFilterPage}=action.payload
            state.ProductSlice=listProductFilterPage
            state.loading=false;
        
        }
    }
})
const {reducer}=ProductDiscount
export default reducer