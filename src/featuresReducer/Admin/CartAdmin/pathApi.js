import { createAsyncThunk } from "@reduxjs/toolkit";
import CartApi from "../../../Api/CartAdmin";

export const GetAllCarts=createAsyncThunk('GetAllCartAdmin',async()=>{
    const response=CartApi.Admin_GetAllCart_User();
    return response
})


export const GetCartId=createAsyncThunk('AdminGetCartId',async(data)=>{
    const response=CartApi.Admin_GetCartId(data);
    return response
})