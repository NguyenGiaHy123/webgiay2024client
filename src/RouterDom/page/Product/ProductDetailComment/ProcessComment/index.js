import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import './index.css'
import {Progress} from 'antd'
ProcessComment.propTypes = {
    
};

function ProcessComment({numReviews,productId,commentSlice,starRating,sumRating,reviewRating}) {
    console.log(reviewRating)
  
   const {oneStar,twoStar,threeStar,fourStar,fiveStar}=starRating 

    const showRatingAndProcess=(value)=>{
        return (
            <div className='group-show-review'>
              <div className='starRating'>
                <h2>Đánh giá trung bình</h2>
                <h3>{reviewRating>0? reviewRating.toFixed(1):0} out of 5</h3>
                      <StarRatings
                       starDimension="18px"
                          rating={reviewRating>0? reviewRating:0}
                          starRatedColor="#fed330"
                          starHoverColor="#fed330"
                          name='rating'
                          starEmptyColor="none"
                        />
              </div>

              <div className='processRating'>
                <div className='processInformationItem'>
                <span className="control-start">
                            <span>1</span>
                            <StarRatings
                                numberOfStars={1}
                                name="start"
                                starDimension="18px"
                                starRatedColor="#fed330"
                                starHoverColor="#fed330"
                                starEmptyColor="#fed330"
                            />
                        </span>
                         <Progress
                          size="small"
                          strokeColor={{
                              from: "#f25800",
                              to: "#ff7d26",
                          }}
                          status="active"
                          percent={oneStar>0?((oneStar / sumRating)*100).toFixed(1):0}/>
                         <span className='numberRating'>{oneStar} đáng giá</span>
                        
                </div>


                <div className='processInformationItem'>
                <span className="control-start">
                            <span>2</span>
                            <StarRatings
                                numberOfStars={1}
                                name="start"
                                starDimension="18px"
                                starRatedColor="#fed330"
                                starHoverColor="#fed330"
                                starEmptyColor="#fed330"
                            />
                        </span>
                         <Progress
                          size="small"
                          strokeColor={{
                              from: "#f25800",
                              to: "#ff7d26",
                          }}
                          status="active"

           
                          percent={twoStar>0?((twoStar / sumRating)*100).toFixed(1):0}
                          
                          />
                         <span className='numberRating'>{twoStar} đáng giá</span>
                        
                </div>

                <div className='processInformationItem'>
                <span className="control-start">
                            <span>3</span>
                            <StarRatings
                                numberOfStars={1}
                                name="start"
                                starDimension="18px"
                                starRatedColor="#fed330"
                                starHoverColor="#fed330"
                                starEmptyColor="#fed330"
                            />
                        </span>
                         <Progress
                          size="small"
                          strokeColor={{
                              from: "#f25800",
                              to: "#ff7d26",
                          }}
                          status="active"
                          percent={threeStar>0?((threeStar / sumRating)*100).toFixed(1):0}/>
                         <span className='numberRating'>{threeStar} đáng giá</span>
                        
                </div>

                <div className='processInformationItem'>
                <span className="control-start">
                            <span>4</span>
                            <StarRatings
                                numberOfStars={1}
                                name="start"
                                starDimension="18px"
                                starRatedColor="#fed330"
                                starHoverColor="#fed330"
                                starEmptyColor="#fed330"
                            />
                        </span>
                         <Progress
                          size="small"
                          strokeColor={{
                              from: "#f25800",
                              to: "#ff7d26",
                          }}
                          status="active"
                          percent={fourStar>0?((fourStar / sumRating)*100).toFixed(1):0}/>
                         <span className='numberRating'>{fourStar} đáng giá</span>
                        
                </div>

                <div className='processInformationItem'>
                <span className="control-start">
                            <span>5</span>
                            <StarRatings
                                numberOfStars={1}
                                name="start"
                                starDimension="18px"
                                starRatedColor="#fed330"
                                starHoverColor="#fed330"
                                starEmptyColor="#fed330"
                            />
                        </span>
                         <Progress
                          size="small"
                          strokeColor={{
                              from: "#f25800",
                              to: "#ff7d26",
                          }}
                          status="active"
                          percent={fiveStar>0?((fiveStar / sumRating)*100).toFixed(1):0}/>
                         <span className='numberRating'>{fiveStar} đáng giá</span>
                        
                </div>


                


              </div>

            </div>
        )

    }
   
    return (
        <div className='ground-writeComment'>
           {numReviews&& <h3 className='title1'>Có {numReviews} review {productId.name}</h3>}
           {commentSlice&&showRatingAndProcess(starRating)}

            
        </div>
    );
}

export default ProcessComment;