import React, { useEffect,useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams,useLocation, useNavigate } from 'react-router-dom';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { GetProductID } from '../../../../featuresReducer/Product/ProductOne/path';
import InforProduct from '../InforProduct';
import NotFound from '../../NotFound/NotFound';
import queryString from "query-string";
 import ProductSeeMore from '../seemoreProduct/index'
import { GetProductDiscount } from '../../../../featuresReducer/Product/ProductDiscount/pathApi';
import { GetProductAll } from '../../../../featuresReducer/Product/ProductAll/pathApi';
import Comment from '../ProductDetailComment';
import { UserContext } from '../../../../contexts/UserContentext';
import $ from "jquery";
import {addCart} from '../../../../featuresReducer/Cart/CartReducer';
Productdetail.propTypes = {
    
};

function Productdetail(props) {
   
    const location=useLocation()
    const dispatch=useDispatch();
    const navigate=useNavigate()

     const actionAddToCart=(cartItem)=>{
        dispatch(addCart(cartItem))



     }
    const UserContentext=useContext(UserContext);
    const state =UserContentext.state;
    const [user,setUser]=state.user;
    const {socket}=state
    const {id}=useParams();
    useEffect(() => {
        if (socket) {
            socket.emit("joinRoom", id);
        }
    }, [socket, id]);
    const pageCurrent=Number(queryString.parse(location.search).page_current)||1;
    const LimitCurrent=Number(queryString.parse(location.search).limitCurrent)||15;

    const productSlider=useSelector(state=>state.productAll.ProductSlice);
    const productAllFull=useSelector(state=>state.productAll.ProductAll);
   
    const productById=useSelector((state)=>state.productId.ProductSlice);
  const {product}=productById
  const actionProductSlider=(params)=>{
       dispatch(GetProductAll(params))
  }
  useEffect(()=>{
        actionProductSlider({page:pageCurrent,limit:LimitCurrent})
  },[pageCurrent])
    const actionProductById=(id)=>{
        dispatch(GetProductID(id));
    }
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        if(id){
            actionProductById(id);
        }
    },[id])
  
    function onchangePage(page,limit){
        const urlPagePagination= {
            id:id,
            page_current:page,
            limitCurrent:limit
        }
        navigate(`/productDetail/${id}?${queryString.stringify(urlPagePagination)}`)
    }
    return (
       <div className='group_product_detail_all'>
       {product?
       <div className='ground-product-detail'>
            <div className='ground-inForProduct-content group-product-detail'>
                {product&&<div className='group-link mb-5'>
                    <Link to='/'>
                        Trang Chủ
                    </Link>/
                    <Link to='/'>
                        {product.key}

                    </Link>/
                    <Link to='/'>
                    {product.productType}

                    </Link>/
                    <Link to='/' style={{color:'red',fontWeight:'500'}}>
                        {product.name}

                    </Link>
                </div>}
               <InforProduct productValue={productById}
               actionAddToCart={actionAddToCart}
               user={user}
               />
               <Comment
                 productId={product}
               />
               <ProductSeeMore
                  listProduct={productSlider}
                  totalItems={productAllFull}
                  onchangePage={onchangePage}
               />
            </div>
        </div>:""}
       </div>
    );
}

export default Productdetail;