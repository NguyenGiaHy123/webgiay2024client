import { createAsyncThunk } from "@reduxjs/toolkit";
import CartApi from "../../Api/Cart";

export const AddtoCart=createAsyncThunk('AdtoCart',async(data)=>{
    const response=CartApi.AddTocart(data);
    return response
})
export const GetAllCarts=createAsyncThunk('GetAllCart',async(data)=>{
    const response=CartApi.GetAllCart(data);
    return response
})

export const DeleteCarts=createAsyncThunk('DeleteCart',async(data)=>{
    const response=CartApi.DeleteCart(data);
    return response
})
export const UpDateStatusCart=createAsyncThunk('UpDateStatusCart',async(data)=>{
    const response=CartApi.UpDateStatusCard(data);
    return response
})

export const UpdateInformationCart=createAsyncThunk('UpdateInformationCart',async(data)=>{
    const response=CartApi.UpdateInformationCart(data);
    return response
})