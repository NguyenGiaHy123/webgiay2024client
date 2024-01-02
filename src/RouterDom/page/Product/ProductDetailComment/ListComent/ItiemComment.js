import {React,useState,useEffect} from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import "moment/locale/vi";
import './index.css'
import StarRatings from 'react-star-ratings';
import { MessageOutlined } from "@ant-design/icons";
import { notification ,Popover,Button,Spin} from 'antd';
import { useNavigate } from 'react-router-dom';
import FromReplyComment from './fromReplyComment'
import {AiOutlineEllipsis,AiFillEdit,AiFillDelete} from 'react-icons/ai'
import FormEditComment from './FormEditComment';
import useItems from 'antd/lib/menu/hooks/useItems';
import FormEditReplyComment from './FormEditRepleyComment';
ItiemComment.propTypes = {
    
};

moment.locale('vi');

function ItiemComment({setNumReviews,setSumRating,setStarRating,setReviewRating,loadingDeleteComment,setLoadingDeleteComment,send,setSend,itemComment,productId,user,socket,token,idUser,onChangeComment,dataCommentOnProduct,commentSlices,setcommentSlices}) {
   
 
    const [openFormReply, setOpenFormReply] = useState(false);
    const [content,setContent]=useState('')
    const [_idComment,set_idComment]=useState('')
    const [_nameUserReplys,set_nameUserReplys]=useState('')
    const [openForm_EditComments,setOpenForm_EditComment]=useState(false)
    
    const tokenUser=localStorage.getItem('tokenUser')
    const [itemReplyComment,setitemReplyComment]=useState([])
    const [openFormEditReplyComment,setOpenForm_EditCommentReply]=useState(false)
    const [id_replyComment,setid_replyComment]=useState('')
    const [loadingDeleteCommentReply,setLoadingDeleteCommentReply]=useState(false)
   
    // const items=itemComment.items
    // cons
    
  const items=itemComment
  const [valuesComment,setValuesComment]=useState(items.contentComment)

    const navigate=useNavigate();
  
    const ShowRegister=()=>{
        notification["error"]({
            message: "Thông báo",
            description: "Bạn cần đăng nhập trước khi thêM bình luận"
        });
        navigate('/sign')
    }

    const openForm_ReplyComment=(id_comment,content_Comment,nameUserReply)=>{
       
        set_idComment(id_comment)
        setContent(content_Comment)
        set_nameUserReplys(nameUserReply)
        setOpenFormReply(true)
    }

    const showFormEditComment=()=>{
        return <FormEditComment
        openForm_EditComments={openForm_EditComments}
        setOpenForm_EditComment={setOpenForm_EditComment}
        valuesComment={valuesComment}
        setValuesComment={setValuesComment}
        socket={socket}
        tokenUser={tokenUser}
        idComment={items._id}
        _id_product={productId}
        commentSlices={commentSlices}
       
        setcommentSlices={setcommentSlices}
        />
    }

    const showFormEditCommentReply=(itemReplyComment)=>{
        
        if(itemReplyComment){
            return (
                <FormEditReplyComment
                valuesComment={itemReplyComment.contentComment}
                setOpenForm_EditCommentReply={setOpenForm_EditCommentReply}
                socket={socket}
                itemComment={itemReplyComment._id}
                tokenUser={tokenUser}
                _id_product={productId}
                commentSlices={commentSlices}
                setcommentSlices={setcommentSlices}
                />
            )

        }
      
       
    }

    const deleteComment=(itemDelete)=>{
        setLoadingDeleteComment(true)
        if(socket){
            const valueDelete={
                token:tokenUser,
                _id_product:productId._id,
                idComment:itemDelete._id
            }
            socket.emit("userDeleteComment",valueDelete)
        }
        // neu khong co off se ra 2 thang 
        return () => socket.off("userDeleteComment");
    }

   

    useEffect(() => {
        if(socket){
            socket.on('serversenduserDeleteComment',data=>{
                 const lisComment=[...commentSlices]
                 const index=lisComment.findIndex(item=>item._id===data._id)
                 if(index!==-1){
                     lisComment[index]=data
                     setcommentSlices(lisComment)
                     setLoadingDeleteCommentReply(false)
                 }

            })
        }

        return ()=>socket.off('serversenduserDeleteComment')

    },[socket])


     useEffect(() => {
        if(socket&&commentSlices.length>0){
            socket.on('serverSendDeleteComment',data=>{
                
  
                if(data){
                    const {numReviews,reviewRating,sumRating,starRating,dataCommentDelete}=data
                    const dataCommnetDeleteAll=[...commentSlices]
                 
                   
                    const index=dataCommnetDeleteAll.findIndex(item=>item._id==dataCommentDelete._id)
                   
                    if(index!=-1){
                        dataCommnetDeleteAll.splice(index,1)
                        setcommentSlices(dataCommnetDeleteAll)
                        setSumRating(sumRating)
                        setStarRating(starRating)
                        setReviewRating(reviewRating)
                        setNumReviews(numReviews)
                        setLoadingDeleteComment(false)
                        

                    }                
                }
            })
        }
        return () => socket.off("serverSendDeleteComment");
     
    }, [socket,commentSlices])
    

    const text = <span>Edit and delete comment</span>;
    const contents =(
      
        <div className='group_edit_delete_comment'>
          <p className='d-flex p-2 gap-2 items-center cursor-pointer edit hover:shadow-sm' onClick={()=>setOpenForm_EditComment(true)}><AiFillEdit/> <span>Chỉnh sửa một  comment </span></p>
          <p className='d-flex p-2 gap-2 items-center cursor-pointer delete' onClick={()=>deleteComment(items)}>{loadingDeleteComment?<Spin/>:<AiFillDelete/>}<span>Xóa một comment </span></p>
        </div>
    )
      const buttonWidth = 70;

      const contentReply=(item)=>{
       
        if(itemReplyComment){
            return (
                <div className='group_edit_delete_comment'>
                  <p className='d-flex p-2 gap-2 items-center cursor-pointer edit hover:shadow-sm' onClick={()=>{setOpenForm_EditCommentReply(true)
                   setid_replyComment(itemReplyComment._id)
                }}><AiFillEdit/> <span>Chỉnh sửa một  comment </span></p>
                  <p className='d-flex p-2 gap-2 items-center cursor-pointer delete' onClick={()=>{deleteComment(item)
                           setLoadingDeleteCommentReply(true)}}>{loadingDeleteCommentReply?<Spin/>:<AiFillDelete/>}<span>Xóa một comment </span></p>
                </div>
                )
        }
      }

    return (
            <div className='items-comment'>
                <div className='items-comment-avatar'>
                    <img src={items.avatar} alt='avatar' className='avatarPost h-12 w-12'/>
                    <div className='mt-1 items-comment-name '>
                        <p className='mt-1 tittle-items-comment'>{items.name}</p>
                            <div clasaName='items-comment-time_icon_delete_edit_comment'>
                            <div className="demo">
 
   

                         <div className='group_edit_delete_comment_parents'>
                            {user&&user._id==items._id_user&&(
                                <div
                                style={{
                                    width: buttonWidth,
                                    float: 'right',
                                }}
                                >
                                
                                <Popover placement="left" title={text} content={contents} trigger="click">
                                    <Button><AiOutlineEllipsis/></Button>
                                </Popover>
                            
                            </div>
                            )}

                         </div>
                         </div>
                            </div>
                        <div className='mt-1'>
                           {items.star>0&&
                            <StarRatings
                            numberOfStars={items.star}
                            name="start"
                            starDimension="18px"
                            starRatedColor="#fed330"
                            starHoverColor="#fed330"
                            starEmptyColor="#fed330"
                        />
                           }

                            </div>

                        <p className='mt-1 timeComment mb-1'>{ moment(items.timeComment).fromNow()}</p>
                        <div className='mt-1 ground-admin'>
                           {console.log(items.role)}
                               
                        {items.role==1&&<p className='admin mt-1 '>Quản trị viên </p>}
                        </div>
                        <div className='content-items-comment mt-1'>

                        {
                            tokenUser && openForm_EditComments?showFormEditComment():<p>{items.contentComment}</p>
                        }
                          
                        </div>
                        <div className='ground-reply mt-1'>
                            <div className='ground-reply-icon'  onClick={()=>openForm_ReplyComment(items._id,items.contentComment,items.name)} >
                                <MessageOutlined
                                /> trả lời
                            </div>
                            {
                            user&&openFormReply? <FromReplyComment
                            user={user}
                            socket={socket}
                            token={token}
                            idUser={idUser}
                            _id_product={productId}
                            _id_comment={_idComment}
                            items={items}
                            content_Comment={content}
                            setOpenFormReply={setOpenFormReply}
                            _nameUserReplys={_nameUserReplys}
                            set_nameUserReplys={set_nameUserReplys}
                            />:""}
                            {items.reply.length>0&&
                            <div>
                                {items.reply.map((item,index)=>(
                                    
                                <div className=' mt-2 mb-2 px-3 py-2 box_reply  '>
                                       
                                    <img src={item.avatar} alt='avatar' className='avatarPost h-12 w-12 '/>
                                    <div className='group_content_all_reply'>
                                      
                                        
                                        <h3 className='tittle-items-comment'>{item.name}</h3>
                                           
                                            {user&&user._id==item._id_user&&(
                                                <div
                                                    style={{
                                                        width: buttonWidth,
                                                        float: 'right',
                                                    }}
                                                    onClick={()=>setitemReplyComment(item)}
                                                >
                                                
                                                <Popover placement="left" title={text} content={()=>contentReply(item)}  trigger="click">
                                                    <Button><AiOutlineEllipsis/></Button>
                                                </Popover>
                                            
                                            </div>
                                            )}
                                            <p className=' timeComment '>{ moment(items.timeComment).fromNow()}</p>
                                            <div className=' ground-admin'>
                                            
                                            {items.role==1&&<p className='admin mt-1 mb-1 '>Quản trị viên </p>}

                                            <div className='content-items-comment mt-1'>
                                               
                                               {tokenUser&&id_replyComment===item._id&&openFormEditReplyComment?showFormEditCommentReply(item):<p> <span className='font-bold'>@{item.nameUserReply}</span> {item.contentComment}</p>} 
                                            </div>
                                            <div className='ground-reply-icon'  onClick={()=>openForm_ReplyComment(items._id,item.contentComment,item.name)} >
                                                <MessageOutlined
                                                /> trả lời
                                            </div>
                                            </div>
                                        </div>
                                       </div>                                      
                               
                                ))}
                            
                            </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
          
            
     
    );
}

export default ItiemComment;