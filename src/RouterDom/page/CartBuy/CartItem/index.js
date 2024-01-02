import React ,{useState}from 'react';
import PropTypes from 'prop-types';
import imgFreeShip from '../../../../imgage/freeship.png';
import './index.css'
import {Table,Button,Space} from 'antd'
import {AiFillDelete} from "react-icons/ai"
import { DeleteCart, UpdateQuantityCart } from '../../../../featuresReducer/Cart/CartReducer';
import {useDispatch,useSelector} from 'react-redux'
CartItem.propTypes = {
    
};

function CartItem({dataCart,user}) {
  const fomat=new Intl.NumberFormat('vn')
  
  const dispatch=useDispatch();
    const deleteCart=(value)=>{
      dispatch(DeleteCart({_id:value._id,size:value.size}))

    }
    const updateQuantity=(_id,quantity,size)=>{
      const updateQuantityValue={_id,quantity,size}
      dispatch(UpdateQuantityCart(updateQuantityValue))


    }
    
    const columns = [
        {
          title: 'Ảnh ',
          dataIndex: 'image',
          key: 'Ảnh',
          render: text =><p><img src={text} alt="Ảnh sản phẩm" width="100px" height="100px" /></p> ,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <p>{text}</p>,
        },

        {
          title: 'Size',
          dataIndex: 'size',
          key: 'Size',
          render: text => <p>{text}</p>,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          render: text =><p className='text-red font-medium'>{fomat.format(text)} đ </p>
        },
        {
          title: 'quantity',
          dataIndex: '',
          key: 'quantity',
          render: value =>
          <>
        <div className='group-quantity-cart  border'>
          <Button disabled={value.quantity===1} onClick={()=>updateQuantity(value._id,value.quantity-1,value.size)} type='primary' className='btn-quantity-cart  group-quantity-cart1  border-right'>-</Button>
          <input type="text" className='input-quantity-cart text-center'  value={value.quantity} />
          <Button onClick={()=>updateQuantity(value._id,value.quantity+1,value.size)} className='btn-quantity-cart group-quantity-cart2'>+</Button>
        </div>
          </>,
        },
     
       

        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (value) => <p onClick={()=>deleteCart(value)} className='text-Gray1 hover:text-red  text-lg cursor-pointer' ><AiFillDelete/></p>,
        },
      ];
     
    return (
        <>
          
        <Table

        
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <p
          style={{
            margin: 0,
           
          }}
        >
          <h6 className='text-Gray'>Mô tả </h6>
           <p>{record.description}</p>
          <p className='text-red font-medium font-Georgia text-lg italic '>Tổng tiền trên một sản phẩm : {fomat.format(record.quantity*record.price)} đ </p> 
        </p>
      ),
      rowExpandable: (record) => record.name !== 'Not Expandable',
    }}
    // scroll={{ y: 1000}} 
   
    dataSource={dataCart}
    scroll={{ x: 700, y: 700 }}
    
  />
        </>
      
    );
}

export default CartItem