import {createAsyncThunk} from '@reduxjs/toolkit';

import UserApi from '../../Api/User';
export const getProfileUser=createAsyncThunk("getProfile", async()=>{
    const data=UserApi.getProfileUser();
    return data;
})

export const userLogins=createAsyncThunk("userLogins",async (data)=>{
    const response=UserApi.userLogin(data);
    return response;
})

export const UserUploadImage=createAsyncThunk('userUploadImageProfile', async (data)=>{

    const response=UserApi.userUploadImage(data);
    return response;
})


export const UserRegister=createAsyncThunk("userRegister",async (data)=>{
    const response=UserApi.UserRegister(data);
    return response;
})

export const UserActiveEmail=createAsyncThunk('userActiveEmail',async (data)=>{
    
      const response=UserApi.UserActiveEmail(data);
      return response;
})

export const UserForgotPasword=createAsyncThunk('UserForgotPasword',async (email)=>{
    const response=UserApi.UserForgotPassword(email)
     return response;
})

export const UserUpdatePawordNew=createAsyncThunk('userUpdatePassword',async (data)=>{
    const respone=UserApi.UserUpadatePassword(data);
    return respone;
})

export const UserLoginGoogle=createAsyncThunk('userLoginGoogle',async (tokenId)=>{
    const response=UserApi.userLoginGoogle(tokenId);
    return response;
})

export const UserLoginFaceBook=createAsyncThunk('userLoginFaceBook',async(data)=>{
  
    const response=UserApi.userLoginFaceBook(data);
   
    return response;
})