import { createSlice } from "@reduxjs/toolkit";
import {GetProductAll} from './pathApi';
import {message,notification} from 'antd'

const ProductAll=createSlice({
    name:'productAll',
    initialState:{
        ProductSlice:[],
        ProductAll:[],
        total:0,
        loading:false,
    },
    extraReducers:{
        [GetProductAll.pending]:(state)=>{
           state.loading=true
        },
        [GetProductAll.rejected]:(state)=>{
            state.loading=false;
            
        }
        ,[GetProductAll.fulfilled]:(state,action)=>{
           
            const {products,listProductAll}=action.payload
            state.ProductAll=listProductAll
            state.ProductSlice=products
            state.loading=false;
        
        }
    }
})
const {reducer}=ProductAll
export default reducer