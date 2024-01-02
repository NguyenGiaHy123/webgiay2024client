import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {Formik,FastField,Form} from 'formik'
import Inputemail from '../../../../FastFieldAllForm/Inputemail';

import *as Yup from 'yup';

import { Link } from 'react-router-dom';
import './enterEmailresset.css'
import '../index.css'
import { Button,Spinner } from 'reactstrap';
import InputFied from '../../../../FastFieldAllForm/InputFied';
import nikeImageLogo from '../../../../imgage/iconMenu/nike.png'
import { useDispatch, useSelector } from 'react-redux';
import { UserActiveEmail, UserForgotPasword } from '../../../../featuresReducer/User/pathApi';
EnterEmailResetPassword.propTypes = {
    
};

function EnterEmailResetPassword(props) {
    const [togleFormResetPassword,seToogleFormResetPassword]=useState(false);
    const dispatch=useDispatch();
    const ActionEnterEmail=(email)=>{
        dispatch(UserForgotPasword(email));
    }
     const loadindEmail=useSelector(state=>state.user.loading);
    const initalValues={
        email:'',
      
    }
    const validationSchemat=Yup.object().shape({
        email:  Yup.string().email("email nhập sai định dạng").required("email không được để rỗng"),
   })

   const getValueSubmit=(value)=>{
    console.log(value)
    if(value){
        ActionEnterEmail(value);
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
                            <h3>Enter Email</h3>
                            <p>Enter your email to receive instructions on how to reset your password.</p>

                            </div>
                              <Form className='form-content-login'>
                                <FastField
                                name='email'
                                component={Inputemail}
                                placeholder="nhập email của bạn"
                                type='text'
                                />
                                <button type='submit' className='loginbtn'>{loadindEmail&&<Spinner className='sm ml-3 mr-3'/> }Reset</button>
                             </Form> 
                        </div>
                  )
                }}
            </Formik>
        </div>
    );
}

export default EnterEmailResetPassword;