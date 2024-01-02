import axiosClient from "./axiosClient"

const UserApi={
    getProfileUser:()=>{
        const url='/user/getProfile'
       return axiosClient.get(url);
    },
    userLogin:(data)=>{
        const url='/user/login'
        return axiosClient.post(url,data)
    },
  
    userUploadImage:(data)=>{
        const url='/user/update-image'
        return axiosClient.put(url,data);
    },

    UserRegister:(data)=>{
        const url='/user/register';
        return axiosClient.post(url,data)
    }
    ,
    UserActiveEmail:(accessToken)=>{
        const url='/user/active-email';
        return axiosClient.post(url,accessToken)
    },
    //active-email password
    UserForgotPassword:(email)=>{
        const url='/user/forgot-password'
        return axiosClient.post(url,email)
    },
    //cap nhat lai passoword
    UserUpadatePassword:(data)=>{

        const url='/user/resetPassword';
        return axiosClient.put(url,data);
    },
    userLoginGoogle:(tokenId)=>{
        const url='/user/google-login';
        return axiosClient.post(url,tokenId)
    },
    userLoginFaceBook:(data)=>{
   
        const url='/user/Facebook-login';
        return axiosClient.post(url,data)
    }
}

export default UserApi;