import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Form,Input,Button} from 'antd'
FormEditComment.propTypes = {
    
};

function FormEditComment({setOpenForm_EditCommentReply,setcommentSlices,commentSlices,openForm_EditComments,setOpenForm_EditComment,valuesComment,socket,tokenUser,idComment,_id_product,setValuesComment}) {
    
   
    const [form]=Form.useForm();
    const [content, setContent] = useState(valuesComment);
    const [loadingComment,setLoading]=useState(false)
    
    const {TextArea}=Input
    const onFinish=(value)=>{
        const data={
            token:tokenUser,
            idComment:idComment,
            _id_product:_id_product._id,
            contentComment:value.ContentEdit

        }
        
        if(socket){
            socket.emit('userUpdateComment',data)
            setLoading(true)
        }
    }

    useEffect(()=>{
        if(socket){
            socket.on('serverSendNewUpdateComment',data=>{
                if(data){
                    const {updateComment}=data
                    const ListComment=[...commentSlices]
                const index=ListComment.findIndex(item=>item._id===updateComment._id)
                if(index!==-1){
                    ListComment[index]=updateComment
                    setcommentSlices(ListComment)
                    setValuesComment(updateComment.contentComment)
                    setOpenForm_EditComment(false)
                    setLoading(false)
                }
                }
            })
        }
        

    },[socket,idComment])
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
                disabled={content.length!=valuesComment.length?false:true}
                className='w-15 mt-3'>Gửi</Button>
                <Button type='danger'  className='w-15 mt-3' onClick={()=>{
                      setOpenForm_EditComment(false)
                   
                    //  setContent("")
                    }
                    
                     }>Hủy</Button>
            </div>




        </Form>
    );
}

export default FormEditComment;