import React ,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import './index.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import shoe from '../../../imgage/shoe.png'
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { Spin } from 'antd';
import {AiOutlineCheck}  from "react-icons/ai";
import {GetProductTypeKey} from '../../../featuresReducer/Product/ProductTypeKey/pathApi'
import {Pagination} from 'antd'
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';
import {Form,Select} from 'antd'
const {Option}=Select;
ProductType.propTypes = {
    
};

function ProductType(props) {
  const {keyProduct}=useParams()
  const [form]=Form.useForm();
  const [price,setPrices]=useState("-1")
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const listProduct=useSelector((state)=>state.productKey.ProductSlice);
  const totalProduct=useSelector((state)=>state.productKey.ProductKeySliceTotal);
  
  const pageCurrent=Number(queryString.parse(location.search).page)||1;
  const limitCurrent=Number(queryString.parse(location.search).limit)||25;
  
  
  const ActionProductKey=(params)=>{
    dispatch(GetProductTypeKey(params))
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  //-1 giam gian ,1 tang dan
    ActionProductKey({name:keyProduct,page:pageCurrent,limit:limitCurrent})
  }, [pageCurrent,limitCurrent,keyProduct])
   
    // const listProductType=useSelector((state)=>state.ProductSlice);
    const formatter = new Intl.NumberFormat("vn");
    const onChangePagination=(page,limit)=>{
      navigate('/productKey/'+keyProduct+'?page='+page+'&limit='+limit)
    }
   

    const showPagination = (length) => {
        if (length > 0) {
            return (
                <Pagination
                showSizeChanger
                showQuickJumper
                       onChange={onChangePagination}
                       total={totalProduct.length}
                       defaultPageSize={limitCurrent}
                />
            );
        }
    };
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
                          starEmptyColor="white"
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
    const setPrice=(value)=>{
      setPrices(value)
      ActionProductKey({name:keyProduct,page:pageCurrent,limit:limitCurrent,price:price})
    
    }

    const showProduct=(listProduct)=>{
        if(listProduct.length>0){
            return(
                <>
                <h3 className='title'>Sản Phẩm Giày  {keyProduct} </h3>
                <Form form={form}
                
               
                layout='horizontal'
                className='w-full'
                >

                 <Form.Item
                   name="filterProductPrice"
                   
                   className='width_form_antd_select'
                 >
                   <Select
                   placeholder="Lọc Theo Giá"
                    showSearch
                    onChange={setPrice}
                   >
                     <Option value="-1" >Giá Tăng Dần</Option>
                     <Option value="1">Giá Giảm Dần</Option>
                   </Select>
                     

                 </Form.Item>

               </Form>
                <div className='listProductType'>
               
                {listProduct.map((value,index)=>(
         
                <div className='product_item_card' key={index} data-aos='zoom-in'>

                       <Link to={`/productDetail/${value._id}`}  className='box-link-card'>
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
                        Yêu Thích
                       </div>

                       <div className='homeItems_sale-off'>
                           <span className='percent-sale-off'>10%</span>
                           <span className='sale-off-label'>Giảm</span>
                       </div>
                 </div>
                      
                 
                ))}
                
                </div>     
                <div className='flex justify-center items-center pb-3'>
                   {showPagination(listProduct.length)}
                </div>   
               

                
         
                </>
            )

        }
           
            

              
    }
    return (
        <div className='group-ProductType group_product_type_key ground-content-product'>

          {listProduct.length==0&&<div className='loadingProduct flex items-center justify-center'>
           <Spin size="large"/> 
         
          </div>
          }
           {listProduct.length>0 && showProduct(listProduct)}
       
        </div>
    );
}

export default React.memo( ProductType);