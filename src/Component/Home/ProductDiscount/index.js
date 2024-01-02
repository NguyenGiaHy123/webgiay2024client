import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import {Spin} from 'antd'
import SettingProduct from './Setting'
import { Link } from 'react-router-dom';
import './index.css'
import {AiOutlineCheck}  from "react-icons/ai";
import StarRatings from 'react-star-ratings'
ProductDisCount.propTypes = {
    
};


function ProductDisCount(props) {
  const {listProduct}=props
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
 
  const showProductType=(listProduct)=>{
    if(listProduct.length>0){
         return (
          <div className='productTypeAll'>
            <p className='title_Product_all'>Xem tất cả </p>
      <Slider {...SettingProduct}>
        {listProduct.map((value,index)=>{
             
             
          return (
                    
            <>
                <div className='product_item_card productCartGap' key={index} data-aos='zoom-in'>
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
                        Sales
                       </div>

                       <div className='homeItems_sale-off'>
                           <span className='percent-sale-off'>40%</span>
                           <span className='sale-off-label'>Sales</span>
                       </div>
                 </div>
                  
                
            </>
      
  
          
       
          )
        })}
          
      </Slider>
      </div>
         )
    
     
    }
   
  }
   
    return (
     <div className='ground-content-products  '>
           <h3 className='title'>SẢN PHẨM SEAL </h3>

           {!listProduct&&<div className='loadingProduct flex items-center justify-center'>
           <Spin size="large"/> 
          </div>}


          { listProduct&&showProductType(listProduct)}
          
   
     </div>
    );
}

export default ProductDisCount;