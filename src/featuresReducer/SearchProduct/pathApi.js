import { createAsyncThunk } from "@reduxjs/toolkit";
import SearchApi_Product from "../../Api/Search";
export const SearchApi=createAsyncThunk("SearchApi",async(params)=>{
    
    const data=SearchApi_Product.Search(params);
    return data;
})

