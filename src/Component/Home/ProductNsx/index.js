import React ,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import './index.css'

import { useNavigate, useParams ,useLocation} from 'react-router-dom';
import { GetProductNxs } from '../../../featuresReducer/Product/ProductNsx/pathApi';
// import {GetProductNsx} from '../../../featuresReducer/Product/ProductNsx/pathApi'
import {useDispatch, useSelector} from 'react-redux'
import imge from '../../../imgage/nikeformRegister'
import { Link } from 'react-router-dom';
import {AiOutlineCheck}  from "react-icons/ai";
import StarRatings from 'react-star-ratings'
import {Col,Row} from 'antd'
import $ from "jquery";
import {Spin,Pagination} from 'antd'
import queryString from "query-string";
import {Form,Select} from 'antd'

const {Option}=Select;
ProductNXS.propTypes = {
    
};

function ProductNXS(props) {
    const {id}=useParams();
    const [form]=Form.useForm();
    const [price,setPrices]=useState("-1")
    const location=useLocation()
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const productNsx=useSelector((state)=>state.productNsx.productNsx)
    const totalProduct=useSelector((state)=>state.productNsx.productNsxSliceTotal);
    console.log(totalProduct)
    const formatter = new Intl.NumberFormat("vn");
   
    const pageNsx=Number(queryString.parse(location.search).pageNSX)||1;
    const LimitNsx=Number(queryString.parse(location.search).limitNSX)||10;
    const actionProductNsx=(params)=>{
       
       dispatch(GetProductNxs(params))
    }

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
        if(id){
        actionProductNsx({page:pageNsx,NSX:id,price:-1,limit:LimitNsx})
        }
    }, [id,pageNsx,LimitNsx])
    const onChangePagination=(page,limit)=>{
         navigate(`/ProductNsx/${id}?pageNSX=${page}&limitNSX=${limit}`)
        $("body,html").animate(
          { scrollTop: $(".group-product-nsx").offset().top - 160 }
      );
    }
    
  const setPrice=(value)=>{
    setPrices(value)
    actionProductNsx({page:pageNsx,NSX:id,price:price,limit:LimitNsx})
  }
    const showPagination = (length) => {
        if (length > 0) {
            return (
                <Pagination
                showSizeChanger
                showQuickJumper
                    onChange={onChangePagination}
                    total={totalProduct.length}
                    defaultPageSize={LimitNsx}
               
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
                <div className='product-nsx ground-content-product'>

            
                <h3 className='title'>{id}</h3>
                <Form form={form}
                
               
                layout='horizontal'
                className='w-full'
                >

                 <Form.Item
                   name="filterProductPrice"
                   
                   className='width_form_antd_select'
                 >
                   <Select
                    showSearch
                    placeholder="Lọc Giá"
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
                           <div className='Image-Product p-0'>
                             <img src={value.poster[0].url} className='w-max'/>
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
         
                </div>
            )

        }
           
            

              
    }
     
   
  
    return (
        <div className=''>

        {productNsx.length==0&&<div className='flex items-center justify-center'>
         <Spin size="large"/> 
        </div>
        }
        <div className='group-product-nsx'>
        {productNsx.length>0 &&  showProduct(productNsx)}
        <div className=' mt-3 flex justify-center items-center mb-5'>
         {  showPagination(productNsx.length)}

         </div>

        </div>
         
     
      </div>
     
        
    );
}

export default ProductNXS;