import { createAsyncThunk } from "@reduxjs/toolkit";
import menuApi from "../../Api/menu";
export const getMenu=createAsyncThunk('getMenu',async()=>{
    const response =menuApi.getAllMenu();
    return response;
})

export const KeyNsxProduct=createAsyncThunk('KeyNsxProduct',async(key)=>{
 
    const response =menuApi.getKeyNsxProduct(key);
    return response;
})