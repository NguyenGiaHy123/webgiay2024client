import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "../../../Api/product";
export const GetProductTypeKey = createAsyncThunk("ProductTypeKey", async (params) => {
    const data=await ProductApi.getProductTypes(params);
    return data;
})