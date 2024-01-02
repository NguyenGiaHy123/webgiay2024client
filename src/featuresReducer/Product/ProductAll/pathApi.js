import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../../Api/product";
export const GetProductAll=createAsyncThunk('getProductAll',async (params)=>{
    const response=ProductApi.getAllProduct(params);
    return response;
})