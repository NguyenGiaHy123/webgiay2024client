import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner/Banner';
import './Home.css'
import TrackMark from './TrackMark/Index';
import ProductType from './ProductType';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductType } from '../../featuresReducer/Product/pathApi';
import ProductDisCount from '../Home/ProductDiscount/index'
import { GetProductDiscount } from '../../featuresReducer/Product/ProductDiscount/pathApi';
import ProductNew from './ProductNew/ProductNew';
import { GetProductAll } from '../../featuresReducer/Product/ProductAll/pathApi';
import {useNavigate,useLocation} from 'react-router-dom'
import queryString from 'query-string';
Home.propTypes = {
    
};


function Home(props) {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const listProductType=useSelector((state)=>state.productType.ProductSlice)
    const isAdmin=useSelector((state)=>state.user.isAdmin);
  
    const listProductDiscount=useSelector((state)=>state.slider.ProductSlice)
    const listProductAll=useSelector((state)=>state.productAll.ProductSlice)
    
    const allProductAllNew=useSelector((state)=>state.productAll.ProductAll)
    
    const location=useLocation();
    const pageAll=Number(queryString.parse(location.search).page)||1;
    const limitAll=Number(queryString.parse(location.search).limit)||15;

    const actionProductType=(params)=>{
      dispatch(GetProductType(params));
    }
    const dispatchProductDiscount=(params)=>{
        dispatch(GetProductDiscount(params))
    }

    const dispatchProductAll=(params)=>{
        dispatch(GetProductAll(params))
    }
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
        actionProductType({page:0,name:'puma',price:-1})
        dispatchProductDiscount({page:0,name:'Converse',price:-1})
      
    },[])

    useEffect(()=>{
        dispatchProductAll({page:pageAll,limit:limitAll})
    },[pageAll,limitAll])

    const OnchangePageProductAllHome=(page,limit)=>{
        navigate(`/?page=${page}&limit=${limit}`)

    }
    return (
        <div className='group-home'>
            <div className='home'>
                {isAdmin?<div className='home-admin'>
                    {navigate('/admin/TrangChu')}
                    
                </div>
                :
                <div className='home-user'>
                <Banner/>
               
               <TrackMark/>
             
               <ProductType
                listProduct={listProductType}
               />
               <ProductDisCount
               listProduct={listProductDiscount}
               />
               <ProductNew
                  listProduct={listProductAll}
                  onchangePage={OnchangePageProductAllHome}
                  totalProduct={allProductAllNew}
               />

                </div>
                }
              
            </div>
        </div>
    );
}

export default Home;