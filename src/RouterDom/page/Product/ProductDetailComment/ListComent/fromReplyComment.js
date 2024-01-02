import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Form,Input,Button} from 'antd'
import StarRatings from 'react-star-ratings';
import moment from 'moment';
FromReplyComment.propTypes = {
    
};

function FromReplyComment({set_nameUserReplys,_nameUserReplys,_id_comment,content_Comment,setOpenFormReply,items,user,socket,token,_id_product}) {
   
    const [form]=Form.useForm();

    const {TextArea}=Input;
    const [content, setContent] = useState("");
    const [loadingComment, setLoadingComment] = useState(false);
   
    const getValueReplyComment=()=>{
        if(socket){
            const newCommentReply={
                _id_product,
                idComment:_id_comment,
                token,
                send:"replyComment",
                contentComment:content,
                nameUserReply:_nameUserReplys,
            }
            socket.emit("createComment",newCommentReply)
            setContent("")
            setOpenFormReply(false)
            set_nameUserReplys("")
        }
    }
    

    return (
        <>
         <Form form={form} onFinish={getValueReplyComment}>
            <div className='d-flex items-center gap-3 border-2 p-3 mt-2 border-none'>
                <img src={user.avatar} className='h-12 w-12 rounded-full items-center justify-center' alt=""/>
                <div>
                   <p className='tittle-items-comment'>{user.name}</p>
                {user.timeComment&&<p className='mt-1 timeComment mb-1'>{ moment(user.timeComment).fromNow()}</p>}
                </div>
            </div>
            <TextArea
                            name='content'
                            placeholder='Mời bạn nhập bình luận'
                            rows={9}
                            max={20}
                            // value={content_Comment}
                            // defaultValue={content_Comment}
                            maxLength={700}
                            onChange={(e)=>{setContent(e.target.value)}}

                            />

            <div className='d-flex justify-end items-center gap-3 mr-2'>
                <Button type='primary ' htmlType='submit' 
                loading={loadingComment}
                disabled={content.length>1?false:true}
                className='w-15 mt-3'>Gửi</Button>
                <Button type='danger' className='w-15 mt-3' onClick={()=>{
                     setOpenFormReply(false)
                     setContent("")
                    }
                    
                     }>Hủy</Button>
            </div>




        </Form>

        </>
       
    );
}

export default FromReplyComment;