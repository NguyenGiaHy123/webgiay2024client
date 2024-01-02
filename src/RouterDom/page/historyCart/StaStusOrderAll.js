import React from 'react';
import PropTypes from 'prop-types';
import  {useEffect, useState}from 'react';

import {useDispatch,useSelector} from 'react-redux'
import { DeleteCarts, GetAllCarts,UpDateStatusCart } from '../../../featuresReducer/Cart/pathApi';
import NotCart from '../CartBuy/NotCart';
import {Link} from 'react-router-dom'
import './index.css'
import { Alert, Button } from 'antd';
import imgeFreship from '../../../imgage/freeship.png'
import { unwrapResult } from '@reduxjs/toolkit';
import moment from 'moment'
import UpdateInfoCart from './updateInforCart';
import {Modal,Tabs,TabPane} from 'antd'

import {AiOutlineDelete} from 'react-icons/ai'
import {
  EditOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
  WarningOutlined,
  
} from "@ant-design/icons";
StaStusOrderAll.propTypes = {
    
};

function StaStusOrderAll({listCartAll,handleDeleteHistoryCart,handleUpdateStatusOrder,handleUpdateOrder,
  loadingModal,setOpen,valueUpdate,setLoadingModal,listCart,setListCart,_id_product,open,loadingdelete,loadingStatus}) {
    
   
    const format=new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    const handleDeleteHistoryCarts=async (id)=>{
      handleDeleteHistoryCart(id)
    }
    
    const handleUpdateStatusOrders=async (id,status)=>{
      handleUpdateStatusOrder(id,status)
    }
    const handleUpdateOrders=(value)=>{
      handleUpdateOrder(value)
    }
    return (
        <div>
              {listCartAll.length>0?
              <>{
                listCartAll.map((item,index)=>(
                    <div className=''>
                        <div className="">
                        <div className='mt-3 mb-4 shadow-sm'>
                            <div className='group_table_history_cart p-4 px-0 pt-0'>
                            <div className='shadow-sm mb-4'>
                                <h4 className='text-center track-header text-Slate mt-3'>Thông tin đơn hàng</h4>
                                <div className='p-3 pt-0 pl-0 flex flex-col gap-4 shadow-md '>
                                <div class="tracking-item flex items-center"><div class="tracking-label pl-3 mr-3 font-medium">Tên shop :</div><div class="tracking-value">{"VN Shop"}</div></div>
                                <div class="tracking-item flex items-center"><div class="tracking-label pl-3 mr-3 font-medium">Mã vận đơn :</div><div class="tracking-value">{item._id}</div></div>
                                <div class="tracking-item flex items-center"><div class="tracking-label pl-3 mr-3 font-medium">Ngày đặt hàng :</div><div class="tracking-value">{moment(item.timeCart).subtract(10, "days").calendar()}</div></div>
                                <div class="tracking-item flex items-center"><div class="tracking-label pl-3 mr-3 font-medium">Trạng thái đơn hàng chờ duyệt :</div><div class="tracking-value">{item.success===false? "Đang duyệt" :"Đã duyệt sản phẩm "} </div></div>
                                <div class="tracking-item flex items-center"><div class="tracking-label pl-3 mr-3 font-medium">Họ tên khách hàng  :</div><div class="tracking-value">{item.name }</div></div>
                                <div class="tracking-item flex items-center"><div class="tracking-label pl-3 mr-3 font-medium">Số điện thoại  :</div><div class="tracking-value">{"0"+item.phone}</div></div>
                                <div class="tracking-item flex items-center"><div class="tracking-label pl-3 mr-3 font-medium">Địa chỉ  :</div><div class="tracking-value">{item.address}</div></div>
                                <div class="tracking-item flex items-center"><div class="tracking-label pl-3 mr-3 font-medium">Trạng thái  :</div><div class="tracking-value">{item.status_order?"Đặt hàng":"Đơn hàng đã hủy"}</div></div>
                                <table>
                             
                                         <tr>
                                                <th>STT</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                  { item.cart.map((items,index)=>(
                                           <tr>
                                                 <td>{index}</td>
                                                 <td className=''><img src={items.image} className='w-20 img_table_historyCart py-3'/></td>
                                                 <td><Link className='fix_max_width' to={`/productDetail/${items._id}`}>{items.name}</Link></td>
                                                 <td>{items.quantity}</td>
                                                 <td className='text-red'>{format.format(items.price)}</td>
                                           </tr>

                                )) }
                            </table>
                              </div>
                
                
                            </div>
                            <h4 className='text-red text-right mt-2'>Tổng tiền : {format.format( item.totalSum)}</h4>
                            <div className='flex group-buttonAll_cart_history justify-end gap-3 mt-4'>
                                <button className='btn btn_bg_delete' 
                                     onClick={()=>handleDeleteHistoryCarts(item._id)}>
                                     {loadingdelete&&<><div class="spinner-border spinner-border-sm text-light" role="status"></div></>}
                                     <span className='flex items-center gap-2'><AiOutlineDelete/>  Xóa đơn hàng</span>
                                </button>
                                <button className={`btn text-white ${item.status_order===true?"bg_cancer_order":"bg_cancer_order1"}`}>
                                    {item.status_order===true?
                                    <div className='flex items-center'>
                                       {loadingStatus&&
                                        <span class="spinner-border spinner-border-sm text-light" role="status"></span>
                                       }
                                    <div onClick={()=>handleUpdateStatusOrders(item._id,false)}>
                                        <span className='flex items-center bg_cancer gap-2'><CloseOutlined/>Hủy đơn hàng</span></div>  
                                    </div>: <div className='flex items-center'>
                                       {loadingStatus&&
                                        <div class="spinner-border spinner-border-sm text-light" role="status"></div>
                                       }
                                       <div onClick={()=>handleUpdateStatusOrders(item._id,true)}>
                                        <span disabled className='flex items-center gap-2'><ShoppingCartOutlined/>Đặt hàng lại</span> </div>  
                                    </div>}
                                </button>
                                {item.status_order==true?<button className='btn bg_update text-white' onClick={()=>handleUpdateOrder(item)}>
                                 <span className='flex items-center gap-2'>
                                 <EditOutlined/>  Cập nhật đơn hàng
                                 </span> 
                                </button>:<button disabled className='btn bg_cancer1 text-white' onClick={()=>handleUpdateOrders(item)}>
                                 <span className='flex items-center gap-2'>
                                 <WarningOutlined/>  Đơn hàng đã hủy
                                 </span>
                                 </button> }
                               {item.status_order==true  &&<button disabled className=  {`text-white  ${item.success===true?'btn btn-success':' btn bg_SuccessCart'}`}>
                
                                  {item.success===false?<div className='flex items-center gap-2'>
                                    <div class="spinner-border spinner-border-sm text-light" role="status"></div> Đang duyệt
                                  </div> :"Đã duyệt sản phẩm "}
                                </button>
                                 }
                            </div>
                         
                              <UpdateInfoCart
                                open={open}
                                setOpen={setOpen}
                                value={valueUpdate}
                                loadingModal={loadingModal}
                                setLoadingModal={setLoadingModal} 
                                listCart={listCart}
                                setListCart={setListCart}
                                _id_product={_id_product}
                                /> 
                        </div>
                        </div>
                 </div>
                </div>
                
                   ))}
              
              </>
              :<NotCart/>}
             
        </div>
    );
}

export default StaStusOrderAll;