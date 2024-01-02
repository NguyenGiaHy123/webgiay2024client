import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import {Formik,FastField,Form} from 'formik'
import Inputpassword from '../../../../FastFieldAllForm/Inputpassword';

import *as Yup from 'yup';

import { Link, useNavigate, useParams } from 'react-router-dom';
import '../EnterEmail/enterEmailresset.css'
import '../index.css'
import { Button } from 'reactstrap';
import InputFied from '../../../../FastFieldAllForm/InputFied';
import nikeImageLogo from '../../../../imgage/iconMenu/nike.png';
import { UserUpdatePawordNew } from '../../../../featuresReducer/User/pathApi';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { UserContext } from '../../../../contexts/UserContentext';
ForgotPassword.propTypes = {
    
};

function ForgotPassword(props) {
    const navigate=useNavigate()
    const [togleFormResetPassword,seToogleFormResetPassword]=useState(false);
    const {accessToken}=useParams();
    const contentext=useContext(UserContext);
    const {state}=contentext;
    const [user,setUser]=state.user;
    const [token,setToken]=state.token
    const [idUser,setIdUser]=state.idUser
    

   
const dispatch=useDispatch()

    const initalValues={
        password:'',
        passwordComfirm:''
    }
    const validationSchemat=Yup.object().shape({
        password:Yup.string()
        .min(3,'password must 3 least')
        .required('password is valid'),
        passwordComfirm:Yup.string()
        .min(3,'passwordComfirm must 3 least')
        .oneOf([Yup.ref('password'),null],'passwordComfirm must match')
        .required('passwordComfirm is valid')
   })

   const getValueSubmit=async (value)=>{
  
    if(accessToken){
        const dataReset={
            accessToken:accessToken,
            password:value.password
        }
        const actionUpdatePasswordNew=await dispatch(UserUpdatePawordNew(dataReset))
        const CurrrentUser=unwrapResult(actionUpdatePasswordNew);
        if(CurrrentUser){
             const {user}=CurrrentUser;
             setUser(user);
             setIdUser(user._id)
        }
        navigate('/sign')
       
    }
    
    
    
         

   }
  
    return (
        <div className='ground-login'>
            <Formik initialValues={initalValues}
            validationSchema={validationSchemat}
            onSubmit={getValueSubmit}
            >
                {formilkProps=>{
                    return(
                        <div className='wrapper-login-register'>
                            <div className='group_view_FormRest'>
                            <img src={nikeImageLogo}/>
                            <h3>RESET PASSWORD</h3>
                            <p>Enter your email to receive instructions on how to reset your password.</p>

                            </div>
                              <Form className='form-content-login'>
                                <FastField
                                name='password'
                                component={Inputpassword}
                                placeholder="nhập password của bạn"
                                type='text'
                                />
                                   <FastField
                                name='passwordComfirm'
                                component={Inputpassword}
                                placeholder="xác nhận mật khẩu của bạn"
                                type='password'
                                />
                                <button type='submit' className='loginbtn'>Reset</button>
                             </Form> 
                        </div>
                  )
                }}
            </Formik>
        </div>
    );
}

export default ForgotPassword;