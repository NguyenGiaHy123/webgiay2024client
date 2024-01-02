import {React,useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../loading';
import { Space, Spin } from 'antd';
import {AiOutlineCamera,AiOutlineClose,AiOutlineBell,AiOutlineEdit,AiOutlineUser,AiOutlineMail,AiOutlineHistory,AiOutlineShoppingCart} from 'react-icons/ai'
import { Button } from 'reactstrap';
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {
  IdcardFilled,
  UserOutlined,
} from "@ant-design/icons";
import {Formik,FastField,Form} from 'formik'
import InputFied from '../../../../FastFieldAllForm/InputFied';
import {notification,message} from 'antd'
import { UserUploadImage } from '../../../../featuresReducer/User/pathApi';
import { unwrapResult } from '@reduxjs/toolkit';
import {PickerOverlay} from 'filestack-react'

InForUser.propTypes = {

};

function InForUser(props) {
  const {user,setUser,idUser,setIdUser,setToken,setOpenMenu,socket}=props;
  const dispatch=useDispatch();
  const token=localStorage.getItem('tokenUser')
  const [isPicker,setIsPicker]=useState(false)
  const userinfor=useSelector(state=>state.user); 
  const loading=userinfor.loadingGetProfile;
  const [lastnameUser,setLastNameUser]=useState("");
  const [openProfile,setOpenProfile]=useState(false);
  const [openEditName,setOpenEditname]=useState(false);
  

  const initalValues={
    name:' '
  }
  const logoutUser=()=>{
    localStorage.removeItem('tokenUser');
    setUser(null);
    setIdUser(null);
    setToken(null);
    notification['success']({
      message:'thông báo',
      description:'logout success'
    })
  }
  const onclicCloseProfile= ()=>{
    setOpenProfile(false)
   
  }
  const editvalue=async (value)=>{
  
    if(value){
        socket.emit('userUpdateInformation',{
          name:value.name,
          token
        });

        setOpenEditname(false)
      return socket.off('userUpdateInformation')
    }
    else{
      setOpenEditname(true)
    }
  }
  useEffect(()=>{
    if(socket){
      try{
        socket.on("serverSendNameUpdate",(data)=>{
      
          if(data){
            const {user,id_user}=data;
            if(id_user==idUser){
              setUser(user);
              
            }
          } 
         })
         return ()=>socket.off("serverSendNameUpdate")
      }
       catch(err){
        console.log(err)
       }
    }

    // return () => socket.off("serverSendNameUpdate");
  },[socket,idUser])

//  async function uploadFileProfileUser(dataUser){
//     const FormDataUpload=new FormData();
//     FormDataUpload.append('avatar',dataUser.filesUploaded[0].onriginalFile);
//     //la da co rospon roi khi dispatch se len store
//     const actionUploadImage=await dispatch(UserUploadImage(FormDataUpload));
//     const resultUploadImage=unwrapResult(actionUploadImage);
   
//   }

     const uploadFileProfileUser=(dataUser)=>{
      if(socket){
        const data={
          token:token,
          avatar:dataUser.filesUploaded[0].url
        }
        socket.emit('updateProfilePicker',data)
      }
      return ()=>socket.off("updateProfilePicker")
     }

     useEffect(()=>{
      if(socket){
        socket.on('serverSendUpdatePicker',(data)=>{
          const {userUpload,commentReply,commentId,userId}=data;

             if(userUpload){
              setUser(userUpload)
              setIdUser(userId)
              console.log('day la user upload'+user);
             }
              
          
        })
        return ()=>socket.off("serverSendUpdatePicker")
      }
             
     },[socket,idUser])

    return (
        <>
        {/* dung the p khong cang giau icon dc phai dung the div */}
        
        {user&&token&&
        <div className='contentGroupHeader' >
           <div className='groupImageUser d-flex  justify-center items-center cursor-pointer' onClick={()=>{setOpenProfile(true)
        }}>

               <img src={user.avatar} className='avatarUserHeader cursor-pointer mr-1'/>
             
              <div className='group_name_user' >
                  <span className=''>
                    {(user.name)}
                    <i className="fa fa-caret-down ml-3 pr-1" />
                  </span>
              </div>
              </div>

       <div className={`detailUser ${openProfile?'open':''}`}>
        <AiOutlineClose className='iconCloseUser' onClick={onclicCloseProfile}/>
    
          <div className='detailUser_header_profile '>

            <div className='iconbell'>
                <AiOutlineBell />
            </div> 
            <span>MFA is now available for your Account!</span>
          </div>
        <div className='Group_detailUser_img_detailUser' >

          <div className='detailUser_img_detailUser'>
            <img src={user.avatar} className="img_user"/>
              <AiOutlineCamera className='iconUserUpload' onClick={() =>{isPicker?setIsPicker(false):setIsPicker(true)}}/>
              {/* ispicker */}
              {isPicker?
               <PickerOverlay
               apikey={"AJTdU9avLQLuSpbbkhQ9iz"}
              
               onSuccess={(res) => 
                uploadFileProfileUser(res)}
        
             pickerOptions={{
              allowManualRetry: true,
            
               maxFiles: 1,
               accept: ["image/*"],
               errorsTimeout: 2000,
               maxSize: 1 * 1000 * 1000,
               onCancel:()=>{
                setIsPicker(false)
               },
             }}
           />
             :''}
              {/* <PickerOverlay  apikey={"AJTdU9avLQLuSpbbkhQ9iz"}/> */}
              {/* <input type='file' onChange={
                (e)=>{uploadImga(e)}
              }/> */}
          </div>
          <h1 className='detailUser_img_detailUser_name'>{(user.name).charAt(0).toUpperCase()+(user.name).slice(1)}</h1>
          <p>{user.email}</p>
          <Button className='w-full' onClick={logoutUser} style={{border:'solid 0.3px white',fontWeight:'500'}} >
            <Link to='/sign' className='list-none' style={{color:'white'}}> Logout your account</Link>
          </Button>
        </div>

         
          <div className='detailUser_Information'>
            <div className='detailUser_group_name_user detailUser_Information_box'>
              <div className='detailUser_icon_user_name'>
                 <UserOutlined className='detailUser_icon-user icon'/> 
              </div>
              <div className='group_name_edit'>
                  {openEditName?
                  <>
                     <Formik
                      initialValues={initalValues}
                      onSubmit={editvalue}
                     >
                      {formilProps=>{
                        return(
                          <Form>
                            <FastField
                              value={user.name}
                              component={InputFied}
                              type="text"
                              name="name"
                              placeholder="nhập tên edit"
                            />

                              <div className='buttomGroup'>
                                  <button onClick={()=>{setOpenEditname(false)}}>Hủy </button>
                                  <button type='submit'>edit</button>
                              </div>
                          </Form>
                        )
                      }}
                     </Formik>
                     </>
                  :
                  <>
                    <div className='flex items-center'>{user.name}</div>
                    <AiOutlineEdit className='icon_name_user icon' onClick={()=>setOpenEditname(true)}/>
                  </>
                  }
              </div>
            </div>

            <div className='detailUser_group_nhatKy detailUser_Information_box'>

             <div className='detailUser_icon_history_nhatKy'>
                <AiOutlineShoppingCart className='detailUser_icon-user icon_nhatKy icon'/>
              </div>

                <div className='detailUser_group_history_information_nhatKy'>
                  <Link to='/HistoryCart' style={{color:'white'}}>Lịch sử mua hàng </Link>
                </div>    
            </div>

            <div className='detailUser_group_Comment detailUser_Information_box'>
                <div className='detailUser_icon_nhatKy'>
                <AiOutlineHistory className='icon-user icon'/>
                </div>
                <div className='detailUser_group_history_information '>
                  <Link to='/history'  style={{color:'white'}}>Nhật ký hoạt động </Link>
                </div>
            </div>

        <div className='detailUser_group_changePassword detailUser_Information_box'>
          <div className='detailUser_icon_changePassword'>
              < RiLockPasswordLine className='icon'/>
              </div>
              <span className='detailUser_groupChangePassword'>
                  <span>Thay đổi mật khẩu</span>
              </span>
          </div>
          </div>
      </div> 
           {openProfile&&<div className='active-before-fullscreen' onClick={onclicCloseProfile
          
          
          }></div>
}
        </div>
      
       } 
        </>
    );
        }
export default InForUser;