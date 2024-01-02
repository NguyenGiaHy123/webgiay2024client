import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiComment from "../../Api/Comment";
export const getComment=createAsyncThunk('getComment',async(parmas)=>{
    const response =ApiComment.getComment(parmas);
    return response;
})


