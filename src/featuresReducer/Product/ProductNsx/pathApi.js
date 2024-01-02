import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../../Api/product";
export const GetProductNxs=createAsyncThunk('getProductNxs',async (params)=>{
    const response=ProductApi.getProductNsx(params);
    return response;
})