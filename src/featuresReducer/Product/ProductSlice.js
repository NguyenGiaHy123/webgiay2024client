import { createSlice } from "@reduxjs/toolkit";
import {GetProductType} from './pathApi';
import {message,notification} from 'antd'

const ProductSlice=createSlice({
    name:'productType',
    initialState:{
        ProductSlice:[],
        total:0,
        loading:false,
    },
    extraReducers:{
        [GetProductType.pending]:(state)=>{
           state.loading=true
        },
        [GetProductType.rejected]:(state)=>{
            state.loading=false;
            
        }
        ,[GetProductType.fulfilled]:(state,action)=>{
           
            const {listProductFilterPage}=action.payload
          
            state.ProductSlice=listProductFilterPage
            state.loading=false;
        
        }
    }
})
const {reducer}=ProductSlice
export default reducer