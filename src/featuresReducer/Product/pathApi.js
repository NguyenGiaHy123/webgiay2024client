import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../Api/product";
export const GetProductType=createAsyncThunk('getProductType',async (params)=>{

    const response=ProductApi.getProductTypes(params);
    return response;
})