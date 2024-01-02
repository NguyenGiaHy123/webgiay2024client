import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import { Button, Input ,Avatar,Comment, notification} from 'antd';
import StarRatings from 'react-star-ratings'
import ModalComment from './ModalComment';
import {Formik,FastField,Form} from 'formik'
import textTereaField from '../../../../../FastFieldAllForm/textTereaField';
import { getValue } from '@testing-library/user-event/dist/utils';
import *as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

WriteComment.propTypes = {
    
};

function WriteComment(
    {user, setUser,
    socket,
    
    idUser
,_id_product,send,setSend})
    
     {
    const token=localStorage.getItem('tokenUser')
  
    const [star,setStar]=useState(0);
    const navigate=useNavigate();
    const getValueComment=(value)=>{
        const {contentComment}=value
        setSend('postComment')
        if(!user){
            notification['error']({
                message:'Thông báo',
                description:'Bạn cần đăng nhập để bình luận'
            })
            navigate('/sign')
        }
        else{
            if(socket){
              
                socket.emit('createComment',{contentComment,star,_id_product,idUser,send,token});
              
                setStar(0)
            }
            return ()=>socket.off('createComment');
        }
    }

  

    const changeRating=(value)=>{
        setStar(value)
    }
    const initTialValue={
        contentComment:''
    }

   
    return (
        <div className='ground-writeComment ground-comment-padding'>
        <Formik initialValues={initTialValue}
        onSubmit={getValueComment}
        >
            {FormilkProp=>{
                return (
     <Form className='contentForm-comment'>
        <Comment 
            >
                <div className='groundAvater-rating'>
                    <div className='ground-information-img'>
                        {console.log("user Upload ben write comment",user)}
                       <img className='imgComment' src={user?user.avatar:"https://joeschmoe.io/api/v1/random"} alt="Han Solo" />
                        {user?<div class="ground-information-comment-name mt-4">
                            <h4>{user.name}</h4>
                            <p className='color-time-comment'>{user.CreateAt}</p>
                        </div>:''}
                    </div>
               
               <StarRatings
                        rating={star}
                        changeRating={changeRating}
                        name="start"
                        starDimension="22px"
                        starRatedColor="#fed330"
                        starHoverColor="#fed330"
                        starEmptyColor="none"  />
                </div>
              
              
              <FastField
               name='contentComment'
               component={textTereaField}
               user={user}
               navigate={navigate}
               />
                 
        </Comment>
        <div className='content-button'>
        <button type='submit' className='btnComment btn btn-primary ml-10'>Submit</button>
        </div>
        </Form>
                )
            }}
        </Formik>

        </div>
        
          );
       
}

export default WriteComment;