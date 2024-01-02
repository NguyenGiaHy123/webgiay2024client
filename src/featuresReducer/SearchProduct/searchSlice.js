import { createSlice } from "@reduxjs/toolkit";
import SearchApi from "../../Api/Search";
const searchSlice=createSlice({
    name:'search',
    initialState:{
        searchProduct:[],
        loading:false,
    },
    extraReducers:{
        [SearchApi.pending]:(state,action)=>{
            state.loading=true;
        },
        [SearchApi.fulfilled]:(state,action)=>{
            state.searchProduct=action.payload;
            state.loading=false;
        }
        ,
        [SearchApi.rejected]:(state,action)=>{
            state.loading=false;
        }

    }
})