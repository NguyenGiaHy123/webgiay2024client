import React from 'react';
import PropTypes from 'prop-types';
import {Comment} from 'antd'
import ItiemComment from './ItiemComment';
import {Spin} from 'antd'
import {useSelector} from 'react-redux'
ListComment.propTypes = {
    
};

function ListComment(props) {
  const { productId,
    user,
    setUser,
    socket,
    token,
    idUser,
    onChangeComment,
    commentSlices,
    setcommentSlices,
    loadingDeleteComment,
    setLoadingDeleteComment,
    setSumRating,
    setStarRating,
    setReviewRating,
    setNumReviews
}=props
      
      const loading=useSelector(state=>state.comment.loading)
      const handleChangeComment=()=>{
        onChangeComment()
      }
    return (
        <div className='ground-writeComment'>
            <div className='customComment title1'>
                Khách hàng nhận xét 
            </div>
            <div className="list-customComment">
               
                {commentSlices.length>0&&
                commentSlices.map((comment,index)=>(
              
                        <ItiemComment
                        key={index}
                        itemComment={comment}
                        productId={productId}
                        user={user}
                        socket={socket}
                        token={token}
                        idUser={idUser}
                        onChangeComment={onChangeComment}
                        setPage
                        commentSlices={commentSlices}
                        setcommentSlices={setcommentSlices}
                        loadingDeleteComment={loadingDeleteComment}
                        setLoadingDeleteComment={setLoadingDeleteComment}
                        setSumRating={setSumRating}
                        setStarRating={setStarRating}
                        setReviewRating={setReviewRating}
                        setNumReviews={setNumReviews}
                        />
                ))}
              {(commentSlices.length>0)&&<button className='textLoadComent btn form-control' onClick={handleChangeComment}>{loading&&<Spin className='mr-5'/>}Tải thêm comment </button>}  

            </div>
        </div>
    );
}

export default ListComment;