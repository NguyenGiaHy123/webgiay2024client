import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Form,Input,Button} from 'antd'
FormEditReplyComment.propTypes = {
    
};

function FormEditReplyComment({setcommentSlices,commentSlices,_id_product,tokenUser,valuesComment,setOpenForm_EditCommentReply,socket,itemComment}) {
    const [form]=Form.useForm();
    const [content, setContent] = useState(valuesComment);
    const [loadingComment,setLoading]=useState(false)
    
    const {TextArea}=Input
    const onFinish=(value)=>{
           const data={
            token:tokenUser,
            idComment:itemComment,
            _id_product:_id_product._id,
            contentComment:value.ContentEdit
        }
        
        if(socket){
            socket.emit('userUpdateComment',data)
            setLoading(true)
        }
        }

        useEffect(() => {
           if(socket){
            socket.on('serverSendReplyUpdateComment',data=>{
                if(data){
                    const {_id,reply}=data
                    const ListCommentUpdate=[...commentSlices]
                    const index=ListCommentUpdate.findIndex(item=>item._id===_id)
                    if(index!==-1){
                        // ListCommentUpdate[index].reply=reply
                        ListCommentUpdate[index]=data
                        setcommentSlices(ListCommentUpdate)
                        setOpenForm_EditCommentReply(false)
                        setLoading(false)
                    }
                }
            })
           }

           return ()=>{
            socket.off('serverSendReplyUpdateComment')
           }
        },
        [socket])
    return (
        <Form form={form} onFinish={onFinish}>
           
            <Form.Item
                          name="ContentEdit"
                          >
                              <TextArea
                              maxLength={150}
                              placeholder="địa chỉ cụ thể: ấp, số nhà, tên đường..."
                              rows={4}
                              max={20}
                              defaultValue={content}
                            //   maxLength={700}
                              onChange={(e)=>{setContent(e.target.value)}}
                               >
                              </TextArea>
 
                          </Form.Item>
           

            <div className='d-flex justify-end items-center gap-3 mr-2'>
                <Button type='primary ' htmlType='submit' 
                 loading={loadingComment?true:false}
                disabled={content!=valuesComment?false:true}
                className='w-15 mt-3'>Gửi</Button>
                <Button type='danger'  className='w-15 mt-3' onClick={()=>{
                    
                    setOpenForm_EditCommentReply(false)
                    //  setContent("")
                    }
                    
                     }>Hủy</Button>
            </div>




        </Form>
    );
}

export default FormEditReplyComment;