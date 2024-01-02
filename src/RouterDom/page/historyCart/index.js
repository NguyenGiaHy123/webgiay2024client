import React ,{useEffect, useState}from 'react';
import PropTypes from 'prop-types';
import {useDispatch,useSelector} from 'react-redux'
import { DeleteCarts, GetAllCarts,UpDateStatusCart } from '../../../featuresReducer/Cart/pathApi';
import NotCart from '../CartBuy/NotCart';
import {Link} from 'react-router-dom'
import './index.css'
import { Button } from 'antd';
import imgeFreship from '../../../imgage/freeship.png'
import { unwrapResult } from '@reduxjs/toolkit';
import moment from 'moment'
import UpdateInfoCart from './updateInforCart';
import {Modal,Tabs,TabPane} from 'antd'

import StaStusOrderAll from './StaStusOrderAll';
import {AiOutlineDelete} from 'react-icons/ai'
import {
    EditOutlined,
    LoadingOutlined,
    CheckCircleOutlined,
    CloseOutlined,
    DeleteOutlined,
    ShoppingCartOutlined,
    WarningOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";
HistoryCart.propTypes = {
    
};

function HistoryCart(props) {
    // const listCart=useSelector(state=>state.cart.CartHistory);
    
    const { TabPane } = Tabs;
    const dispatch=useDispatch();
    const loadingdelete=useSelector(state=>state.cart.loading);
    const loadingStatus=useSelector(state=>state.cart.loadingStatus);
    const [valueUpdate,setValueUpdate]=useState("");
    const [loadingModal, setLoadingModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [listCart,setListCart]=useState([])
    const [_id_product,setIdProduct]=useState("");
    const format=new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'})
    const  tokenUser=localStorage.getItem('tokenUser');
    useEffect( () => {
        async function fetchCartList() {
        const actionGetHistoryCartUser=await dispatch(GetAllCarts({page:1,limit:10}));
        const currentHistoryCart=unwrapResult(actionGetHistoryCartUser);
        if(currentHistoryCart){
            setListCart(currentHistoryCart.data)
        }}
        fetchCartList();
    }, [])
    
    const handleDeleteHistoryCart=async (id)=>{
        Modal.confirm({
            title: "Bạn có chắc chắn xóa những giỏ hàng này không ?.",
            icon: <ExclamationCircleOutlined />,
            width: 500,
            okText: "Chắc chắn ",
            cancelText: "hủy",
            async onOk() {
                const actionDeleteHistoryCart=await dispatch(DeleteCarts({id:id}));
                const currentCartDelete=unwrapResult(actionDeleteHistoryCart);
                if(currentCartDelete){
                const {cartDelete}=currentCartDelete;
                const listCartDeleteUpdate=[...listCart];
                const deleteCart=listCartDeleteUpdate.filter(item=>item._id!==cartDelete._id);
                setListCart(deleteCart);
               }
            },
            onCancel() {
                console.log("Cancel");
            },
        });
      
    }
    
    const handleUpdateStatusOrder=async (id,status)=>{
        const actionUpdateStatusOrder=await dispatch(UpDateStatusCart({_id:id,status:status}));
        const currentCartUpdate=unwrapResult(actionUpdateStatusOrder);
        if(currentCartUpdate){
            const {data}=currentCartUpdate;
            const listCartUpdate=[...listCart];
            const index=listCartUpdate.findIndex(item=>item._id===data._id);
            if(index!==-1){
                listCartUpdate[index]=data;
                setListCart(listCartUpdate);
            }
        }
    }
    const handleUpdateOrder=(value)=>{
        setOpen(true);
        setValueUpdate(value);
        setIdProduct(value._id);
    }

    const SHOW_ALL_Cart=()=>{
        return (
            <>
            {tokenUser&&listCart.length>0?
                <>

            <StaStusOrderAll
            listCartAll={listCart}
            handleDeleteHistoryCart={handleDeleteHistoryCart}
            handleUpdateStatusOrder={handleUpdateStatusOrder}
            handleUpdateOrder={handleUpdateOrder}
            loadingModal={loadingModal}
            open={open}
            setOpen={setOpen}
            valueUpdate={valueUpdate}
            setLoadingModal={setLoadingModal}
            listCart={listCart}
            setListCart={setListCart}
            _id_product={_id_product}
            loadingdelete={loadingdelete}
            loadingStatus={loadingStatus}

            />
                </>
                
                :<NotCart/>}
            </>
        )
    }
    const SHOW_WAIT_Cart=()=>{
       const listCartWaiting=listCart.filter(item=>item.success===false)
        return (
         <>
         {listCartWaiting.length>0?
          <StaStusOrderAll
          listCartAll={listCartWaiting}
          handleDeleteHistoryCart={handleDeleteHistoryCart}
          handleUpdateStatusOrder={handleUpdateStatusOrder}
          handleUpdateOrder={handleUpdateOrder}
          loadingModal={loadingModal}
          open={open}
          setOpen={setOpen}
          valueUpdate={valueUpdate}
          setLoadingModal={setLoadingModal}
          listCart={listCart}
          setListCart={setListCart}
          _id_product={_id_product}
          loadingdelete={loadingdelete}
          loadingStatus={loadingStatus}

          />
         :<NotCart/>}
         </>
        )
    }
    const SHOW_SUCCESS_Cart=()=>{
        const listCartWaiting= listCart.filter(item=>item.success===true)
        return (
         <>
         {listCartWaiting.length>0?
          <StaStusOrderAll
          listCartAll={listCartWaiting}
          handleDeleteHistoryCart={handleDeleteHistoryCart}
          handleUpdateStatusOrder={handleUpdateStatusOrder}
          handleUpdateOrder={handleUpdateOrder}
          loadingModal={loadingModal}
          open={open}
          setOpen={setOpen}
          valueUpdate={valueUpdate}
          setLoadingModal={setLoadingModal}
          listCart={listCart}
          setListCart={setListCart}
          _id_product={_id_product}
          loadingdelete={loadingdelete}
          loadingStatus={loadingStatus}

          />
         :<NotCart/>}
         </>
        )
    }
    const Show_Ordered_Cancel=()=>{
        const listCartWaiting= listCart.filter(item=>item.status_order===false)
        return (
         <>
         {listCartWaiting.length>0?
          <StaStusOrderAll
          listCartAll={listCartWaiting}
          handleDeleteHistoryCart={handleDeleteHistoryCart}
          handleUpdateStatusOrder={handleUpdateStatusOrder}
          handleUpdateOrder={handleUpdateOrder}
          loadingModal={loadingModal}
          open={open}
          setOpen={setOpen}
          valueUpdate={valueUpdate}
          setLoadingModal={setLoadingModal}
          listCart={listCart}
          setListCart={setListCart}
          _id_product={_id_product}
          loadingdelete={loadingdelete}
          loadingStatus={loadingStatus}

          />
         :<NotCart/>}
         </>
        )
    }
    return (
        <div className='group-history_cart'>
            <div class="box">
                <div className='shadow-sm p-2 py-4'>
                            <Link to='/' className='no-underline text-dark text-2xl'>Trang Chủ </Link>/ <Link className='no-underline text-dark text-2xl italic text-blue ' to='/HistoryCart'>Lịch sử mua hàng</Link>
                        </div>
                        {/* <div className='d-flex items-center mt-3 mb-3 shadow-sm p-2 gap-2 boderstyle_history' >
                            <img src={imgeFreship} className='w-6'/>
                            <span>Xem thông tin đơn hàng sẽ được duyệt bên dưới </span>
                        </div> */}
                        {tokenUser&&listCart.length>0?
                        <Tabs defaultActiveKey="1">
                        <TabPane tab="Tất Cả" key="1">
                            {SHOW_ALL_Cart()}
                          
                        </TabPane>
                        <TabPane tab="Chờ Duyệt" key="2">
                            {SHOW_WAIT_Cart()}
                        </TabPane>
                        <TabPane tab="Đã Xét Duyệt" key="3">
                            {SHOW_SUCCESS_Cart()}
                        </TabPane>
                        <TabPane tab="Đã Hủy" key="4">
                            {Show_Ordered_Cancel()}
                       
                        </TabPane>
                    </Tabs>
                    :<NotCart/>}
                    
           
            </div>
        </div>
    );
}

export default HistoryCart;