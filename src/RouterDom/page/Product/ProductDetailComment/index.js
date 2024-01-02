 import  { useContext, useEffect,useState } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import PropTypes from 'prop-types';
import WriteComment from './WriteComment/WriteComment';
 import  { UserContext}from '../../../../contexts/UserContentext'
import ProcessComment from './ProcessComment';
import { getComment } from '../../../../featuresReducer/Comment/pathApi';
import ListComment from './ListComent/ListComment';
import { unwrapResult } from '@reduxjs/toolkit';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from "query-string";
import {notification,message} from 'antd'
 Comment.propTypes = {
    
 };
 
 
 function Comment(props) {
    const {productId}=props
   const navigate=useNavigate();
   const location =useLocation();
   const [loadingDeleteComment,setLoadingDeleteComment]=useState(false)
   const pageCurrent=Number(queryString.parse(location.search).pageComment)||1;
    // danh sach comment
    const [commentSlices,setcommentSlices]=useState([])
    const [starRatings,setStarRating]=useState({oneStar:0,twoStar:0,threeStar:0,fourStar:0,fiveStars:0});
    const [reviewRatings,setReviewRating]=useState(0);
    const [sumRatings,setSumRating]=useState(0);
    const [numReviews,setNumReviews]=useState(0);
    const dispatch=useDispatch()
    const contentText=useContext(UserContext);
    const {state}=contentText
    const [user,setUser]=state.user
     const {socket}=state
     const [token,setToken]=state.token
     const [idUser,setIdUser]=state.idUser
     const [send,setSend]=useState("postComment")
     useEffect(() => {
        if (socket) {
            socket.on("serverSendNewComment", (data) => {
                if(data){
                    const {numReviews,SumstarRating,dataComment,starRating,reviewRating}=data
                    setSumRating(SumstarRating)
                    setcommentSlices(dataComment)
                    setStarRating(starRating)
                    setReviewRating(reviewRating)
                    setNumReviews(numReviews)
                
                    document.querySelector(".resetValueTextField").value=""
                }
            });
        }
        return () => socket.off("serverSendNewComment");
    },[socket,commentSlices])
    useEffect(() => {
        if(socket){
            socket.on("serverSendReplyComment",data=>{
                if(commentSlices.length>0){
                    const newReply=[...commentSlices]
                    const index=newReply.findIndex(item=>item._id===data._id)
                    if(index!==-1){
                        newReply[index]=data
                        setcommentSlices(newReply)
                    }
                } // setcommentSlices(dataReplyCommentSave)
            })
            return ()=>socket.off("serverSendReplyComment")
        }
        //if khon co socket .offf no se chay 2 lan 
    },[socket,commentSlices])

     useEffect(()=>{
        try{
        async function getCommetProduct(){
            if(productId){  
                const _id_product=productId._id
                const ActionGetComment=await dispatch(getComment({_id_product,page:pageCurrent,limit:3}));
                const commentCurrent=unwrapResult(ActionGetComment)
                if(commentCurrent){
                   const {numReviews,dataComment,starRating,sumRating,reviewRating}=commentCurrent
                        setStarRating(starRating)
                        setcommentSlices(dataComment)
                        setSumRating(sumRating)
                        setReviewRating(reviewRating)
                        setNumReviews(numReviews)
                }
            }
        }
        getCommetProduct()
    }
        catch(err){ 
            console.log(err)
        }
        // actionDispatchComment({productId,page:1,limit:20})
     },[productId._id,pageCurrent])


   

     useEffect(()=>{
        if(socket){
            socket.on("serverSendUpdatePicker",data=>{
                const {commentReply}=data
                if(commentReply){
                    setcommentSlices(commentReply)
                }

            })
        }
        
    },[socket])


     function onChangComment(){
        navigate(`/productDetail/${productId._id}?pageComment=${pageCurrent+1}`)
     }

    return (
        <div className='ground-comment'>
           
              <WriteComment
            _id_product={productId._id}
            user={user}
            setUser={setUser}
            socket={socket}
            token={token}
            idUser={idUser}
            send={send}
            setSend={setSend}
            />
            <ProcessComment
            productId={productId}
            commentSlice={commentSlices}
            starRating={starRatings}
            sumRating={sumRatings}
            reviewRating={reviewRatings}
            numReviews={numReviews}
            />
            <ListComment
             commentSlices={commentSlices}
             productId={productId}
             user={user}
             setUser={setUser}
             socket={socket}
             token={token}
             idUser={idUser}
             onChangeComment={onChangComment}
             setcommentSlices={setcommentSlices}
             loadingDeleteComment={loadingDeleteComment}
             setLoadingDeleteComment={setLoadingDeleteComment}
             setSumRating={setSumRating}
             setStarRating={setStarRating}
             setReviewRating={setReviewRating}
             setNumReviews={setNumReviews}
            
            />
           
            
         
            


         
        </div>
    );
 }
 
 export default Comment;