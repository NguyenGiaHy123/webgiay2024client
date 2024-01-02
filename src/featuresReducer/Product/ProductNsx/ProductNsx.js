import { createSlice } from "@reduxjs/toolkit";
import {GetProductNxs} from './pathApi';
const productNsxSlice=createSlice({
    name:'productNsx',
    initialState:{
        productNsx:[],
        productNsxSliceTotal:[],
        loading:false,
    },
    extraReducers:{
        [GetProductNxs.pending]:(state)=>{
           state.loading=true
        },
        [GetProductNxs.rejected]:(state)=>{

        },
        [GetProductNxs.fulfilled]:(state,action)=>{
            console.log(action.payload);
            const {listProductpage,lisproductAllNsx
            }=action.payload
            state.productNsx=listProductpage
            state.productNsxSliceTotal=lisproductAllNsx

            state.loading=false;
        }
    }
})
const {reducer}=productNsxSlice
export default reducer