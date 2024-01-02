import { createSlice } from "@reduxjs/toolkit";
import { message, notification } from "antd";
import {GetAllCarts,GetCartId} from './pathApi'
const CartReducer = createSlice({
    name: "cartAdminUser",
    initialState: {
        dataCart:[],
        userCart:[],
        Cart_detail_Users:[],
        loading:false,
        loadingStatus:false,
        loadingUpdateInfor:false
    }
    ,
    reducers: {}
    ,
    extraReducers:{

        [GetAllCarts.pending]:(state,action)=>{
            state.loading=true;
        }
        ,
        [GetAllCarts.rejected]:(state,action)=>{
           
            state.loading=false;
        },
        [GetAllCarts.fulfilled]:(state,action)=>{
            state.loading=false;
            state.dataCart=action.payload.list_All_Cart_User;
            
        },
        [GetCartId.pending]:(state,action)=>{
            state.loading=true;
        }
        ,
        [GetCartId.rejected]:(state,action)=>{
           
            state.loading=false;
        },
        [GetCartId.fulfilled]:(state,action)=>{
            state.loading=false;
            state.dataCart=action.payload.list_All_Cart_User;
            state.userCart=action.payload.userCart;
            state.Cart_detail_Users=action.payload.list_All_Cart_Users_One;
        },
    }
})
const {reducer,actions} =CartReducer; 
export default reducer