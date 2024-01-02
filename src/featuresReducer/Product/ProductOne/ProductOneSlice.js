import { createSlice } from "@reduxjs/toolkit";
import {GetProductID} from './path';
import {message,notification} from 'antd'

const getProductById=createSlice({
    name:'ProductById',
    initialState:{
        ProductSlice:[],
        total:0,
        loading:false,
    },
    extraReducers:{
        [GetProductID.pending]:(state)=>{
           state.loading=true
        },
        [GetProductID.rejected]:(state)=>{
            state.loading=false;
            
        }
        ,[GetProductID.fulfilled]:(state,action)=>{
           
            const {product}=action.payload
         
          
            state.ProductSlice=action.payload
            state.loading=false;
        
        }
    }
})
const {reducer}=getProductById
export default reducer