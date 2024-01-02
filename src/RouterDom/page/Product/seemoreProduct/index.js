import React from 'react';
import PropTypes from 'prop-types';
import '../../../../Component/Home/ProductNew/ProductNew.css'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { Spin,Pagination } from 'antd';
import {AiOutlineCheck}  from "react-icons/ai";
import $ from "jquery";
ProductSeeMore.propTypes = {
    
};

function ProductSeeMore(props) {
    const {listProduct,onchangePage,totalItems}=props
    // const listProductType=useSelector((state)=>state.ProductSlice);
    const onChangePagination=(page,limit)=>{
      
        onchangePage(page,limit)
        $("body,html").animate(
          { scrollTop: $(".group-ProductTypesemorr").offset().top -160 }
      );
    }
    const showPagination = (length) => {
      if (length > 0) {
          return (
              <Pagination
              showSizeChanger
              showQuickJumper
                  onChange={onChangePagination}
                  total={totalItems.length}
                  defaultPageSize={10}
             
              />
          );
      }
  };
    const formatter = new Intl.NumberFormat("vn");
    const showStar=(value)=>{
      const rate=value.rating/value.numReviews;
        if(value){
            if(value.numReviews>0){
                return (
                    <>
                      <StarRatings
                       starDimension="18px"
                          rating={rate}
                          starRatedColor="#fed330"
                          starHoverColor="#fed330"
                          name='rating'
                          starEmptyColor="none"
                        />
                      <p className='mt-2' style={{color:"gray"}}>Có {value.rating} Đánh Giá </p>
                    </>
                  )

            }
            else{
                 return(
               <>
                     <StarRatings
                       starDimension="18px"
                        
                          starRatedColor="#fed330"
                          starHoverColor="#fed330"
                          name='rating'
                          starEmptyColor="none"
                        />
                  
                       <p className='mt-2' style={{color:"gray"}}>Chưa Có Đánh Giá </p>
              </>)
                 
            }
           
        }
    }
    const showProduct=(listProduct)=>{
        if(listProduct.length>0){
            return(
            <>
                <h3 className='title1'>Hàng Mới Về </h3>
                <div className='listProductType'>
                {listProduct.map((value,index)=>(
         
                <div className='product_item_card' key={index} data-aos='zoom-in'>
                       <Link to={`/productDetail/${value._id}`} className='box-link-card'>
                           <div className='Image-Product'>
                             <img src={value.poster[0].url}/>
                           </div>
                           <div className='title_Product'>
                             {value.name}

                           </div>
                           <div className='pride_Product'>
                                 {formatter.format(value.price)}{" "}
                                        <u>đ</u>{" "}
                           </div>
                           <div className='start_product_review'>
                                     <p>{showStar(value)}</p>
                           </div>
                       </Link>  

                       <div className='product_item_card_favorite'>
                       <AiOutlineCheck className='icon_product_card_favorite'/>
                        New
                       </div>

                       <div className='homeItems_sale-off'>
                           <span className='percent-sale-off'>5%</span>
                           <span className='sale-off-label'>Giảm</span>
                       </div>
                 </div>
                      
                 
                ))}
                </div>        
         
                </>
            )

        }
           
            

              
    }
    return (
        <div className='group-ProductTypesemorr ground-writeComment'>

          {!listProduct&&<div className='loadingProduct flex items-center justify-center'>
           <Spin size="large"/> 
          </div>
          }
           {listProduct && showProduct(listProduct)}
          
         {listProduct &&
         <div className='flex justify-center items-center mb-5'>
         {  showPagination(listProduct.length)}

         </div>
         
        
         
         }
        </div>
    );
}

export default React.memo(ProductSeeMore);