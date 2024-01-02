import { createSlice } from '@reduxjs/toolkit'
import {getMenu,KeyNsxProduct} from './pathAPI';

const ListMenuSlice=createSlice({
    name:'menu',
    initialState:{
        listMenu:[],
        loading:true,
        listKeyProduct:[],
    }
    ,
    reducers:{
        
    },
    extraReducers:{
        [getMenu.pending]:(state)=>{
            state.loading=true;
        },
        [getMenu.rejected]:(state,action)=>{
            state.loading=false

        }
        ,
        [getMenu.fulfilled]:(state,action)=>{
            state.loading=false;
            state.listMenu=action.payload
        }
        ,
        [KeyNsxProduct.pending]:(state)=>{
            state.loading=true;
        },
        [KeyNsxProduct.rejected]:(state,action)=>{
            state.loading=false

        },
        [KeyNsxProduct.fulfilled]:(state,action)=>{
            state.loading=false;
           
            state.listKeyProduct=action.payload.keyProductNsx
        }

    }
})

const {reducer}=ListMenuSlice
export default reducer
