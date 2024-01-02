import {createSlice} from'@reduxjs/toolkit'

import {getProfileUser,UserUpdatePawordNew,UserUploadImage,UserRegister,UserActiveEmail, UserForgotPasword, UserLoginGoogle,UserLoginFaceBook} from './pathApi';
import {userLogins} from './pathApi';
import {message,notification} from 'antd'

const UserSlice=createSlice({
    name:'user',
    initialState:{
        userSlice: [],
        tokenSlice: null,
        loadingSlice: false,
        // history comment
        diaryComment: [],
        diaryCommentLength: 0,
        loadingDiaryComment: false,
        loadingGetProfile: false,
        isAdmin: false,
        error:'',
        loading:false
    }
    ,
    extraReducers:{
       
        [getProfileUser.pending]:(state)=>{
         state.loadingGetProfile=true;

        },
        [getProfileUser.rejected]:(state)=>{
            state.loadingGetProfile=false
            localStorage.removeItem('tokenUser')
        },
        [getProfileUser.fulfilled]:(state,action)=>{
            state.loadingGetProfile=false;
            const {user}=action.payload;
            if(user.role===0){
                state.isAdmin=false
            }
            if(user.role===1){
                state.isAdmin=true
            }
            
        }
,

        [userLogins.pending]:(state)=>{
            state.loadingSlice=true;

        },
        [userLogins.rejected]:(state,action)=>{
            state.loadingSlice=false;

            notification["error"]({
                message: "Thông báo",
                description: "Mật khẩu hoặc email không chính xác ",
            });
        }
        ,
        [userLogins.fulfilled]:(state,action)=>{
            const {accessToken,user}=action.payload
            
            state.loadingSlice=false;
            state.UserSlice=user
           
            state.tokenSlice=action.payload.accessToken
            if(user.role==0){
               state.isAdmin=false
            }

            if(user.role==1){
              state.isAdmin=true
            }
            localStorage.setItem('tokenUser',accessToken)
            
            notification["success"]({
                message: "Thông báo",
                description: "Đăng nhập thành công",
            });
        },

        [UserUploadImage.pending]:(state)=>{
            state.loading=true
        },
        [UserUploadImage.rejected]:(state)=>{
            state.loading=false

            notification['error']({
                message:'Thông báo',
                description:"Upload file thất bại "
            })
        },
        [UserUploadImage.fulfilled]:(state,action)=>{
            state.loading=false;
            state.userSlice=action.payload.data;
           
        }
        ,

        [UserRegister.pending]:(state)=>{
           state.loading=true;

        },
        [UserRegister.rejected]:(state)=>{
            state.loading=false;
            notification['error']({
                message:'Thông báo',
                description:'email này đã tồn tại '
            })

        },
        [UserRegister.fulfilled]:(state,action)=>{
           
            state.loading=false;
           
            notification['success']({
                message:'Thông báo',
                description:'Vui lòng kiểm tra lại email để kích hoạt tài khoảng '
            })
         
        },
        [UserActiveEmail.pending]:(state)=>{
            state.loading=true
        },
        [UserActiveEmail.rejected]:(state)=>{
            state.loading=false;
            
            notification['error']({
                message:'Thông báo',
                description:'đăng ký lỗi vui lòng đăng ký lại '
            })
        },
        [UserActiveEmail.fulfilled]:(state,action)=>{
            state.loading=false;
            const {token,user}=action.payload;

    
            if(user.role===0){
                state.isAdmin=false
            }
            if(user.role===1){
                state.isAdmin=true;
            }
          
            state.UserSlice=user;
            state.tokenSlice=token
            localStorage.setItem('tokenUser',token);
            
            notification['success']({
                message:'Thông báo',
                description:'đăng ký thành công '
            })

        },
        [UserForgotPasword.pending]:(state)=>{
            state.loading=true;
        }
        ,
        [UserForgotPasword.rejected]:(state)=>{
            state.loading=false;
            notification['error']({
                message:'Thông báo',
                description:'Email này chưa đăng ký'
            })
        },
        [UserForgotPasword.fulfilled]:(state)=>{
            state.loading=false;
            notification['success']({
                message:'Thông báo',
                description:'kiểm tra email để cập nhật lại password của bạn'
            })
        },
        [UserUpdatePawordNew.pending]:(state)=>{
            state.loading=true;
        },
        [UserUpdatePawordNew.rejected]:(state)=>{
            state.loading=false;
            notification['error']({
                message:'Thông báo',
                description:'email này không tồn tại vui lòng nhập lại'
            })
        },
        [UserUpdatePawordNew.fulfilled]:(state,action)=>{
            const {user,token}=action.payload;
           localStorage.setItem('tokenUser',token);
           state.userSlice=user;
           notification['success']({
            message:'Thông báo',
            description:'password update thành công'
        })

        },
        [UserLoginGoogle.pending]:(state)=>{
          state.loadingSlice=true
        },
        [UserLoginGoogle.rejected]:(state)=>{
            state.loadingSlice=false
            notification['error']({
                message:'Thông báo',
                description:'Login google Thất Bại'
            })
        }
        ,
        [UserLoginGoogle.fulfilled]:(state,action)=>{
            
            const {user,token}=action.payload
            if(user.role===1){
                state.isAdmin=true;
            }
            if(user.role===0){
                state.isAdmin=false;
            }
     
            localStorage.setItem('tokenUser',token);
            state.loadingSlice=false;
            state.userSlice=user
            state.tokenSlice=token
            notification['success']({
                message:'Thông báo',
                description:'Login Thành Công '
            })
        },
        [UserLoginFaceBook.pending]:(state)=>{
            state.loadingSlice=true
        }
        ,
        [UserLoginFaceBook.rejected]:(state)=>{
            state.loadingSlice=false;
            notification['error']({
                message:'Thông báo',
                description:'Login FaceBook Thất Bại'
            })
        },
        [UserLoginFaceBook.fulfilled]:(state,action)=>{
            const {user,token}=action.payload;
            console.log('day la token silec')
            console.log(token)
            if(user.role===1){
                state.isAdmin=true
            }
            if(user.role===0){
                state.isAdmin=false;
            }
            localStorage.setItem('tokenUser',token);
            state.tokenSlice=token;
            state.userSlice=user
            state.loadingSlice=false
            notification['success']({
                message:'Thông báo',
                description:'Login  với Facebooke thành công '
            })

        }
    }
})

const {reducer}=UserSlice
export default reducer