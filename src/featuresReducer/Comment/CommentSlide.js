import { createSlice } from '@reduxjs/toolkit'
import {getComment} from './pathApi'
const comomentSlice=createSlice({
    name:'comment',
    initialState:{
        commentSlice:[],
        loading:false
    },
    extraReducers:{
        [getComment.pending]:(state)=>{
            state.loading=true

        },
        [getComment.rejected]:(state)=>{
            state.loading=false

        },
        [getComment.fulfilled]:(state,action)=>{
            state.loading=false
            state.commentSlice=action.payload
        }
    }
})

const {reducer}=comomentSlice
export default reducer