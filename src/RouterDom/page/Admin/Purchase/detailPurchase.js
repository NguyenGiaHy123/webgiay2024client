import React,{useEffect,useRef,useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch,useSelector} from 'react-redux'  
import {GetAllCarts} from '../../../../featuresReducer/Admin/CartAdmin/pathApi'
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';

import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import { useParams } from 'react-router-dom';
import {GetCartId} from '../../../../featuresReducer/Admin/CartAdmin/pathApi'
import './index.css'
import {Link} from 'react-router-dom'
PushChange.propTypes = {
    
};

function PushChange(props) {
    const {id}=useParams();
    var totalPayment=0;
    const listAllCartAdmin=useSelector(state=>state.cartAdmin.dataCart);
    const userCart=useSelector(state=>state.cartAdmin.userCart);
    const Cart_detail_Users=useSelector(state=>state.cartAdmin.Cart_detail_Users);
    console.log(userCart)
    console.log("day la cart detail ")
    console.log(Cart_detail_Users)


    // const {userCart,list_All_Cart_Users}=listAllCartAdmin[0]
 
    const dispatch=useDispatch();
    const fomat=new Intl.NumberFormat('vn')
    useEffect(() => {
        if(id){
            dispatch(GetCartId(id))
        }
    }, [id])


    
      const columns= [

        {
            title: render => <div className='font-medium title_RowTable'>Mã khách</div>,
            dataIndex: '_id',
            key: '_id',
            width: '20%',
            render: (avatar,record) =><p >
                   {record._id}
            </p>


        },
        
      
       {
        title: render => <div className='font-medium title_RowTable'>Tên khách đặt hàng</div>,
        dataIndex: 'name',
        key: 'poster_user',
        width: '20%',
        render: (avatar,record) =>

         <p className='   cursor-pointer' >
            
             <div className='img_listProduct_admin_pushChange  gap-2 '>
                <span className='color_text_pushChangeUser'>{record.name}</span>
             </div>
        </p>, 
      },

   


    {
           title: render=> <div className='font-medium title_RowTable'>Ngày đặt  </div>,
           dataIndex: 'timeCart',
           key: 'timeCart',
           width: '20%',
           sorter: (a, b) => a.timeCart - b.timeCart,
         
           render: text =><p >{moment(text).format('L')}   </p>,
       },

       
       {
           title: render=> <div className='font-medium title_RowTable'>Email  </div>,
           dataIndex: 'success',
           key: 'success',
           width: '20%',
           render:(value,record)=>{
                return <p >{record.email}</p>
           }
       },

      
   ];

   const columnsUserAcceptOrder= [
   {
    title: render => <div className='font-medium title_RowTable'>Tên khách nhận hàng</div>,
    dataIndex: 'name',
    key: 'poster_user',
    width: '20%',
    render: (avatar,record) =>

     <p className='   cursor-pointer' >
        
         <div className='img_listProduct_admin_pushChange  gap-2 '>
            <span className='color_text_pushChangeUser'>{record.name}</span>
         </div>
    </p>, 
  },

  {
    title: render => <div className='font-medium title_RowTable'>Số điện thoại </div>,
    dataIndex: 'phone',
    key: 'phone',
    width: '20%',
    render: (avatar,record) =><p >
           {record.phone}
    </p>


},




{
       title: render=> <div className='font-medium title_RowTable'>Ngày đặt  </div>,
       dataIndex: 'timeCart',
       key: 'timeCart',
       width: '20%',
       sorter: (a, b) => a.timeCart - b.timeCart,
     
       render: text =><p >{moment(text).format('L')}   </p>,
   },

   
   {
       title: render=> <div className='font-medium title_RowTable'>Địa chỉ   </div>,
       dataIndex: 'address',
       key: 'address',
       width: '20%',
       render:(value,record)=>{
            return <p >{record.address}</p>
       }
   },

   {
    title: render=> <div className='font-medium title_RowTable'>Trạng thái  </div>,
    dataIndex: 'success',
    key: 'success',
    width: '20%',
    render:(value,record)=>{
        if(record.success===false){
            return <p >Đang chờ phê duyệt</p>
      
    }
    else{
        return <p >Đã phê duyệt</p>
    }
}
},

  
];


const columnsProductOrder= [
    {
        title: 'STT',
        key: 'sno',
        width: '20px',
        render: (text, object, index) =>{return  index + 1}
    },
    {
        title: 'Ảnh',
        dataIndex: 'poster',
        key: 'poster',
        width: '20%',
        render: (name,record) =>
         <p className='text-Gray1 d-flex items-center gap-2 hover:text-red  text-lg cursor-pointer' >
             <div className='img_listProduct_admin'>
                  <img src={record.image} style={{width:"70px",height:"70px"}}/>
             </div>
        </p>, 
    },

 
   {
     title: render => <div className='font-medium title_RowTable'>Tên sản phẩm</div>,
     dataIndex: 'name',
     key: 'name',
     width: '20%',
     render: (avatar,record) =><p >
            {record.name}
     </p>
 
 
 },
 
 
 
 
   {
        title: render=> <div className='font-medium title_RowTable'>Số lượng  </div>,
        dataIndex: 'quantity',
        key: 'quantity',
        width: '20%',
        sorter: (a, b) => a.quantity - b.quantity,
      
        render: text =><p > {text}  </p>,
    },

    
    {
        title: render=> <div className='font-medium title_RowTable'>Giá bán   </div>,
        dataIndex: 'price',
        key: 'price',
        width: '20%',
    
    
        render: text =><p > {fomat.format(text)} đ  </p>,
    },
 
    
    {
        title: render=> <div className='font-medium title_RowTable'>Thành tiền  </div>,
        dataIndex: 'address',
        key: 'address',
        width: '20%',
        render:(value,record)=>{
             return <p className='text-red font-medium'>{fomat.format(record.quantity*record.price)} đ </p>
        }
    },
];
 
const columnsOrDerPayMent= [
    {
        title: 'STT',
        key: 'sno',
        width: '20px',
        render: (text, object, index) =>{return  index + 1}
    },
    {
        title: 'Thanh toán',
        dataIndex: 'poster',
        key: 'poster',
        width: '20%',
        render: (name,record) =>
         <p className='text-Gray1 gap-2 hover:text-red  text-lg cursor-pointer' >
         
         {
            
            record.cart.forEach(element => {
                totalPayment+=element.price*element.quantity
            })
         }
     
          <p className='text-red d-flex items-center'>{fomat.format(totalPayment)} đ </p>  
        </p>, 
    },

 

    {
        title: render=> <div className='font-medium title_RowTable'>Trạng thái  </div>,
        dataIndex: 'success',
        key: 'success',
        width: '20%',
        render:(value,record)=>{
            if(record.success===false){
                return <p >Đang chờ phê duyệt</p>
          
        }
        else{
            return <p >Đã phê duyệt</p>
        }
    }
    },

    {
        title: 'Hóa đơn',
        dataIndex: 'poster',
        key: 'poster',
        width: '20%',
        render: (name,record) =>
         <p className='text-Gray1 gap-2 hover:text-red  text-lg cursor-pointer' >
     
          <p className='text-red d-flex items-center'><Link to='/' className='no-underline'>In hóa đơn </Link></p>  
        </p>, 
    },


    {
        title: ()=>{return <div className='text-center'>Hành Động</div>},
        dataIndex: '',
        key: 'x',
        render: (value,record) => 
        <p className='text-Gray1 d-flex items-center justify-center gap-2 hover:text-red  text-lg cursor-pointer' >
            <Button  className='d-flex gap-1 items-center bg_color_btnProduct'><Link className='no-underline hv_color_detail' to={`/admin/detailPushChange/${record._id}`}>Xác nhận và giao hàng </Link> </Button>
            <Button type='danger d-flex gap-1 items-center' className='font-medium'><span><AiOutlineDelete/></span>Xóa</Button>
        </p>,
    },
 
 
 
 

   
 
    
    
];
 

    
    return (
        <div>
         <div className='group-product-admin head-title-admin'>
        <div className='group-product-admin-title group-headTileAdmin d-flex items-center '>
        <img src="https://cdn-icons-png.flaticon.com/128/1524/1524855.png" className='img_menu_admin_product bg-white shadow-md p-2 rounded-md'/> 
        <div className='group-product-admin-title-search group-heade-tileAdmin-search'>
            <h5 className='cl-titleProduct'>Quản Lý Chi Tiết Đơn Hàng   </h5>
            <p className='text-Gray1'>Danh Sách Chi Tiết </p>
        </div>
    </div>
    <div className='p-3 group-product-admin-addProduct-content  content_title_adMinAll shadow-md'>
         <h6 className='text-start cl-titleProduct mt-3  mb-3'>THÔNG TIN NGƯỜI ĐẶT HÀNG   </h6>
         <div className='group-product-admin-addProduct-content-form'>
          {userCart&&<Table className='tableListProduct' columns={columns} dataSource={userCart?userCart:[]} pagination={false}/>}
         </div>

         <h6 className='text-start cl-titleProduct mt-3  mb-3'>THÔNG TIN NGƯỜI NHẬN HÀNG   </h6>
    
         {Cart_detail_Users&&<Table className='tableListProduct' columns={columnsUserAcceptOrder} dataSource={Cart_detail_Users?Cart_detail_Users:[]} pagination={false} />}
         <h6 className='text-start cl-titleProduct mt-3  mb-3'>THÔNG TIN SẢN PHẨM  </h6>
         {Cart_detail_Users.length>0&&<Table className='tableListProduct' columns={columnsProductOrder} dataSource={Cart_detail_Users?Cart_detail_Users[0].cart:[]} pagination={true} />}
    
         <h6 className='text-start cl-titleProduct mt-3  mb-3'>THANH TOÁN   </h6>
         {Cart_detail_Users.length>0&&<Table className='tableListProduct' columns={columnsOrDerPayMent} dataSource={Cart_detail_Users?Cart_detail_Users:[]} pagination={false} />}
    
    </div>
    </div>
            
        </div>
    );
}

export default PushChange;