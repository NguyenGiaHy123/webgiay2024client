import React ,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import './Search.css';  
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {SearchApi} from '../../../featuresReducer/SearchProduct/pathApi'
import { unwrapResult } from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux'
import $ from "jquery";
import StarRatings from 'react-star-ratings';
import { Spin ,Pagination} from 'antd';
import {AiOutlineCheck}  from "react-icons/ai";
import { Link } from 'react-router-dom';
import NotSearch from './NotSearch';
import queryString from 'query-string';
SearchUi.propTypes = {
    
};

function SearchUi(props) {
    const {keySearch}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location=useLocation()
    const formatter=new Intl.NumberFormat("vn")
    const [listProduct,setListProduct]=useState([])
    const [AllProduct,setAllProduct]=useState([])
    const pageCurrent=Number(queryString.parse(location.search).page)||1;
    const LimitCurrent=Number(queryString.parse(location.search).limit)||25;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        async function fetchSearchApi(){
            const data=await dispatch(SearchApi({keyword:keySearch,page:pageCurrent,limit:LimitCurrent}));
            const CurrentSearch=unwrapResult(data);
            if(CurrentSearch){
                const {data,productAll}=CurrentSearch;
                if(data.length>0){
                    setListProduct(data)
                    setAllProduct(productAll)
                }
                else{
                    setListProduct([])
                }
                
            }
        }
        fetchSearchApi()
      
       
    }, [keySearch,pageCurrent,LimitCurrent]);


    const onChangePagination=(page,limit)=>{
        navigate(`/search/${keySearch}?page=${page}&limit=${limit}`)
        
    }
    const showPagination=()=>{
        if(listProduct.length>0){

            return (<Pagination
            showSizeChanger
            showQuickJumper
            onChange={onChangePagination}
                            total={AllProduct.length}
                            defaultPageSize={10}
            />)
        }
    }
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
                    <div className='group_search_Product'>
                    <h3 className='title'>Kết quả tìm kiếm với từ khóa:<span className='text-red'>{keySearch}</span> </h3>
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
                    <div className='flex items-center justify-center pb-3'>
                  {showPagination()}
    
                    </div>
                    
             
                    </div>
                )
    
            }     
        }
        return (
            <div className='group-ProductType scroll_list_Product_NEW ground-content-product'>
    
              {listProduct==0&&<div className='loadingProduct flex items-center justify-center'>
                <NotSearch/>
              </div>
              }
               {listProduct.length>0 && showProduct(listProduct)}
           
            </div>
        );
   
    
}

export default SearchUi;