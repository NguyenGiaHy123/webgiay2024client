import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { UserActiveEmail } from '../../../featuresReducer/User/pathApi';
import { unwrapResult } from '@reduxjs/toolkit';
import { UserContext } from '../../../contexts/UserContentext';
import {useDispatch, useSelector} from 'react-redux'
import { Alert, notification } from 'antd';
import Loading from '../../../loading';
export default function ActiveEmail() {
    const loading=useSelector(state=>state.user.loading);
    const useContextUser=useContext(UserContext);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {state}=useContextUser;
    const [user,setUser]=state.user;
    const [,setIdUser]=state.idUser;
    const [token,setToken]=state.token
    const {accessToken}=useParams();
    
  
    const tokenUser=localStorage.getItem('tokenUser');
  

    useEffect(()=>{      
        async function activeMailRegister(){
           
            if(accessToken){
           
                // alert('123')
                const acTionActiveEmail=await dispatch(UserActiveEmail({accessToken:accessToken}));
                const CurrrentUser=unwrapResult(acTionActiveEmail);        
                if(CurrrentUser){
                    const {user,token}=CurrrentUser;
                    setUser(user)
                    setToken(token);
                    setIdUser(user._id);
                    navigate('/');
                }
              }
           
        }
        activeMailRegister();
        }
    ,[])
    return (
       <>{console.log("render")}</>
    );
}




