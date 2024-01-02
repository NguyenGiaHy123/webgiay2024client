import React, { useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import {Formik,FastField,Form} from 'formik'
import Inputemail from '../../../FastFieldAllForm/Inputemail';
import Inputpassword from '../../../FastFieldAllForm/Inputpassword';
import *as Yup from 'yup';
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import ReCAPTCHA from "react-google-recaptcha";
import { getValue } from '@testing-library/user-event/dist/utils';
import {Spinner}from 'reactstrap'
import { UserLoginFaceBook, UserLoginGoogle, userLogins } from '../../../featuresReducer/User/pathApi';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, message, notification, Space } from 'antd';
import {UserContext} from '../../../contexts/UserContentext'
import env from 'react-dotenv';
import {gapi} from 'gapi-script'
import Nike2 from '../../../imgage/Banner/Nike2.jpg'
Login.propTypes = {
    
};
// 89598028532-h47c6tivvfmq9ul1t8p863c0r60a38qv.apps.googleusercontent.com
function Login(props) {
    const navigate=useNavigate()
    const UserLoginbtn=useSelector(state=>state.user.loadingSlice);
    const contentUser=useContext(UserContext);
    const {state}=contentUser;
    const [user,setUser]=state.user;
    const [,setIdUser]=state.idUser;
    const [token,setToken]=state.token
    const dispatch=useDispatch();
    const [responseRecapCha,setResponeRecapCha]=useState(false);

    //====================FORM VS FOMILK=====================
    const initalValues={
        email:'',
        password:''
    }
    const validationSchemat=Yup.object().shape({
        email:  Yup.string().email("email nhập sai định dạng").required("email không được để rỗng"),
        password:Yup.string().required("password không được để rỗng")})


   ///=============================check RecapCha==========================///

   function onChangeReCapch(response)
   {
        if(response)
        {
            setResponeRecapCha(true)
            document.querySelector(".errorRecapCha").innerHTML="";
        }
        else{setResponeRecapCha(false)}
   }

  

   //==============================Login username and password=============================

    async  function getValueFormLogin(value)
    {
            if(responseRecapCha){   
                document.querySelector(".errorRecapCha").innerHTML="";
                const actionUserLogin=await dispatch(userLogins(value));
                const resultUserLogin=unwrapResult(actionUserLogin);
                if(resultUserLogin){
                const {user}=resultUserLogin
                    setUser(resultUserLogin.user);
                    setIdUser(resultUserLogin.user._id);
                    setToken(resultUserLogin.accessToken)
                    navigate('/')
                }
                ///neu reacap cha pagibang true moi bac loding len nuwa
            } 
            else{document.querySelector(".errorRecapCha").innerHTML="Vui lòng xác mình người máy ";}
    }
 
    // ======================login Google============================================//
    const responseGoogle= async (response)=>{
        // const {Cc}=response
        // console.log("day la response google",response)
        // console.log(Cc)
        const id_token=response.tokenId
        ;
        
        const actionLoginGoogle=await dispatch(UserLoginGoogle({tokenId:id_token}))
        const CurrentUser=unwrapResult(actionLoginGoogle);
       if(CurrentUser){
        setUser(CurrentUser.user);
        setToken(CurrentUser.accessToken)
        setIdUser(CurrentUser._id)
        navigate('/')
       }
    }

    const responseGoogleFail=(err)=>{
      
            notification['error']({
                message:'Thông Báo',
                description:'Login google Fail'
            })
    }
  
    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
            function start() {
                gapi.auth2.init({
                apiKey:'AIzaSyCrEa_AenSOrp7qz7X8GyMPZXYZlqkFwdg',
                clientId: 
                '39780276999-23ndjnog9cr448vg0jqcmcf4qq62ufnq.apps.googleusercontent.com',
                scope:'',
            plugin_name: 'streamy'
            });
            }
            gapi.load('client:auth2', start);
    }); 

 // ======================login Google============================================//


 //=======================Login facebook===========================================//
     async  function responseFacebook(response){           
            const {accessToken,id}=response
            const data={
                userId:id,
                accessToken
            }       
         const actionUserLoginFaceBook=await dispatch(UserLoginFaceBook(data));
          const CurrentUser=unwrapResult(actionUserLoginFaceBook);
        
          if(CurrentUser){
            const {user,token}=CurrentUser;
            setUser(user)
            setToken(token)
            setIdUser(user._id);
            navigate('/')
            
          }

        }
        function componentClickedFaceBook(value){

        }

    return (
     <div className='ground-login'>
            <img src={Nike2} className='backgrounLogin'/>
            <Formik initialValues={initalValues}
                    validationSchema={validationSchemat}
                    onSubmit={getValueFormLogin}>
                    {formilkProps=>
                    {
                            const {isSubmitting}=formilkProps
                            return(
                            <div className='wrapper-login-register'>

                                    <div className='title-text'>
                                        <p className='text'>Sign in an account</p>
                                    </div>

                                   <div className='login-google-facebook'>
                                    {/* loginGooglenew2022 */}
                                            <GoogleLogin
                                            className="btn-google-login"
                                            clientId='39780276999-23ndjnog9cr448vg0jqcmcf4qq62ufnq.apps.googleusercontent.com'
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogleFail}
                                            buttonText="Login with google"
                                            cookiePolicy={'single_host_origin'}/>
                                    </div>

                                   {/* <div className='login-google-facebook'>
                                       <FacebookLogin
                                        appId="369529538654989"
                                        autoLoad={true}
                                        cssClass="my-facebook-button-class"
                                        fields="name,email,picture"
                                        onClick={componentClickedFaceBook}
                                        callback={responseFacebook}
                                        icon="fa-facebook"/>
                                    </div> */}
                                    
                                    <div className='content_meo'>
                                        <p>Mẹo đăng ký nhanh với Google hoặc facebook</p>
                                        <div class="hror">
                                            <hr/>
                                            <p>Hoặc</p>
                                            <hr/>      
                                        </div>
                                    </div>

                                    <Form className='form-content-login'>
                                        <FastField
                                        name='email'
                                        component={Inputemail}
                                        placeholder="nhập email của bạn"
                                        type='text'
                                        />         
                                        <FastField
                                        name='password'
                                        type="password"
                                        placeholder="nhập password của bạn "
                                        component={Inputpassword}
                                        />

                                        <div className='content-recapCha'>
                                            <ReCAPTCHA
                                            sitekey="6Lc6HdYgAAAAAIKgwEaw-mAtM1zOtaDW3YP9TJOt"
                                            onChange={onChangeReCapch}
                                            />
                                            <p className='errorRecapCha' style={{color:'red'}}></p>
                                        </div>

                                        <button
                                           type='submit' 
                                           className='loginbtn'>
                                            {UserLoginbtn&&<Spinner size="sm" style={{marginRight:'1rem'}}/>}Login
                                        </button>

                                    </Form> 
                                    <div className='form-content-end'>
                                        <Link to='/forgotPassword'>forgot password ?</Link>
                                        {/* neeu khong de / thi no se laf sign/sign-up con co / thif /signup */}
                                        <Link to='/sign-up'>Create an account ?</Link>
                                    </div>      
                                </div>
                           )
                    }}
            </Formik>
          
          
        </div>
    );
}

export default Login;
