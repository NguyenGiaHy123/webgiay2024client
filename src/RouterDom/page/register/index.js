import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {Formik,FastField,Form} from 'formik'
import Inputemail from '../../../FastFieldAllForm/Inputemail';

import *as Yup from 'yup';

import { Link } from 'react-router-dom';

// import '../Login/index.css'
import { Button, Spinner } from 'reactstrap';
import InputFied from '../../../FastFieldAllForm/InputFied';
import nikeImageLogo from '../../../imgage/iconMenu/nike.png'
import Inputname from '../../../FastFieldAllForm/Inputname';
import Inputpassword from '../../../FastFieldAllForm/Inputpassword';
import './index.css';
import nikebaground from '../../../imgage/nikeform3.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { UserRegister } from '../../../featuresReducer/User/pathApi';
Register.propTypes = {
    
};

function Register(props) {
    const [togleFormResetPassword,seToogleFormResetPassword]=useState(false);
    const loading=useSelector(state=>state.user.loading);
  
    const dispatch=useDispatch();
    const initalValues={
        name:'',
        email:'',
        password:'',
        passwordComfirm:''
      
    }
    
    const actionRegister=(value)=>dispatch(UserRegister(value))
    const validationSchemat=Yup.object().shape({
        name:Yup.string().required('Tên không được để trống'),
        email:  Yup.string().email("email nhập sai định dạng").required("email không được để rỗng"),
        password:Yup.string()
        .min(3,'password must 3 least')
        .required('password is valid'),
        passwordComfirm:Yup.string()
        .min(3,'passwordComfirm must 3 least')
        .oneOf([Yup.ref('password'),null],'passwordComfirm must match')
        .required('passwordComfirm is valid')
   })

   const getValueSubmit=async(value)=>{
  

    const data={
        email:value.email.toLowerCase().trim(),
        name:value.name,
        password:value.password.trim()
    }
     actionRegister(data)
   }
  
    return (
        <div className='ground-login'>
              <img src='https://cdna.artstation.com/p/assets/images/images/040/713/322/large/apoorv-chandrawanshi-iwannagotothemoondontleavesosoon-posterfinalfinal.jpg?1629691228' className='backgrounLogin'/>
            <Formik initialValues={initalValues}
            validationSchema={validationSchemat}
            onSubmit={getValueSubmit}
            >
                {formilkProps=>{
                    const {isSubmitting}=formilkProps
                    return(
                        <div className='wrapper-register'>
                            <div className='imgForm'>
                                <img src="https://wallpaperaccess.com/full/5548111.jpg"/>
                            </div>
                          

                              <Form className='form-content-login'>
                              <h2>Sign up an account</h2>
                              <p>Name:</p>
                                
                              <FastField
                                name='name'
                                component={Inputname}
                                placeholder="Nhập tên của bạn"
                                type='text'
                                />
                                   <p>Email:</p>

                                <FastField
                                name='email'
                                component={Inputemail}
                                placeholder="nhập email của bạn"
                                type='text'
                                />

                                 <p>Password :</p>
                               <FastField
                                name='password'
                                component={Inputpassword}
                                placeholder="nhập password của bạn"
                                type='text'
                                />
                                <p>password comfirm :</p>

                                <FastField
                                name='passwordComfirm'
                                component={Inputpassword}
                                placeholder="xác nhận mật khẩu của bạn"
                                type='text'
                                />
                             
                                <button type='submit' className='loginbtn'>{loading&&<Spinner size="sm" className='mr-3 ml-3' />}Register </button>
                             </Form> 
                        </div>
                  )
                }}
            </Formik>
        </div>
    );
}

export default Register;