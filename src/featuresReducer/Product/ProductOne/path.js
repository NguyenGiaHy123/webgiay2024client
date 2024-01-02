import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../../Api/product";
export const GetProductID=createAsyncThunk('GetProductID',async (ID)=>{
 
    const response=ProductApi.getProductId(ID);

 
    return response;
})