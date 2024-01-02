import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../../Api/product";
export const GetProductDiscount=createAsyncThunk('getProuductDiscount',async (params)=>{

    const response=ProductApi.getProductTypes(params);
    return response;
})