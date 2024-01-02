import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import {Modal,Button} from 'antd'
import {Form, Input, Select, InputNumber} from 'antd'
import dataCity from '../../../data.json'

import {useSelector,useDispatch} from 'react-redux'
import dataVnPay from '../../../bank.json'
import { UpdateInformationCart } from '../../../featuresReducer/Cart/pathApi';
import {unwrapResult} from '@reduxjs/toolkit'
const { Option } = Select;
UpdateInfoCart.propTypes = {
    
};

function UpdateInfoCart({ open,
    setOpen,
    value,
    loadingModal,
    setLoadingModal,
    listCart,
    setListCart,
    _id_product
    }) 
    {
      
    const [form]=Form.useForm()
    const loadingInfor=useSelector(state=>state.cart.loadingUpdateInfor)
    const dispatch=useDispatch()
    const { TextArea } = Input;
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [xa, setXa] = useState("");
    const [payment, setPayment] = useState("");
    const handleOk = () => {
        setLoadingModal(true);
        setTimeout(() => {
            setLoadingModal(false);
          setOpen(false);
        }, 3000);
      };
    
    
      const handleCancel = () => {
        setOpen(false);
      };
      
      const onChangeCity = (City) => {
        
        setCity(City);
    };
    
    const onChangeDistrict=(districtS)=>{
        setDistrict(districtS);

    }
    const onChangeXa=(xaS)=>{
        setXa(xaS);
    }
    const onChangePayment=(paymentS)=>{
        setPayment(paymentS);
    }
    const onFinish=async (value)=>{
       
        const InforPayment={
            _id:_id_product,
            name:value.name,
            address:value.city +"-"+ value.district+ "-"+value.xa+"-"+ value.address,
            phone:value.phone,
           
        }
        const actionUpdateSCartStatus=await dispatch( UpdateInformationCart(InforPayment))
        const currentUpdateCart=unwrapResult(actionUpdateSCartStatus)
       
        if(currentUpdateCart){
            const {cartUpdate}=currentUpdateCart
            const newCartUpdateInfor=[...listCart]
            const indexUpdate=newCartUpdateInfor.findIndex((item)=>item._id===cartUpdate._id)
            if(indexUpdate!==-1){
                newCartUpdateInfor[indexUpdate]=cartUpdate
                setListCart(newCartUpdateInfor)
                form.resetFields();
                setOpen(false);
            }
            }
            
    }
      
    return (
        <Modal
        visible={open}
        title="Cập nhật thông tin đơn hàng "
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
      
         <Form 
                       className='bg-white p-4  form-payment  shadow-md'
                       
                       form={form}
                       onFinish={onFinish}
                          layout='vertical'
                          // layout='horizontal'
                      >
                        
                          <Form.Item 
                          name="name"
                          label="Tên"
                          hasFeedback
                            rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
                          >
                            <Input type="text" placeholder='Tên người mua ' />

                          </Form.Item>
                          <Form.Item
                          
                          name="city"
                          label="Tỉnh/Thành phố"
                          hasFeedback
                          rules={[
                              {
                                  required: true,
                                  message:
                                      "Vui lòng chọn tỉnh hoặc thành phố bạn ở !",
                              },
                          ]}>
 
                           <Select
                                  showSearch
                                  placeholder="Tỉnh/Thành phố"
                                
                                  
                                  onChange={onChangeCity}
                                 
                              >
                                  {dataCity.map((city, index) => (
                                      <Option value={city.name} key={index}>
                                          {city.name}
                                      </Option>
                                  ))}
                              </Select>
 
                          </Form.Item>
 
                          <Form.Item
                            name="district"
                            label='Quận/Huyện'
                            hasFeedback
                            optionFilterProp="children"
                                  filterOption={(input, option) =>
                                      option.children
                                          .toLowerCase()
                                          .indexOf(input.toLowerCase()) >= 0
                                  }
                            rules={[
                              {
                                  required: true,
                                  message:'Vui lòng chọn quận hoặc huyện bạn ở !',
                              }
                            ]}
                            >
                              <Select
                              showSearch
                              placeholder="Quận/Huyện"
                              onChange={onChangeDistrict}
 
                              >
                                  {dataCity.map((itemCity,index)=>{
                                      if(itemCity.name===city){
                                          return itemCity.huyen.map((itemHuyen,index)=>(
                                            <Option value={itemHuyen.name} key={index}>
                                              {itemHuyen.name}
 
                                            </Option>
                                          )
 
                                          )
                                      }
                                     
                                  })}
                              </Select>
                              
                          </Form.Item>
                          <Form.Item
                          name='xa'
                          label='Xã/Phường'
                          hasFeedback
                          optionFilterProp="children"
                                  filterOption={(input, option) =>
                                      option.children
                                          .toLowerCase()
                                          .indexOf(input.toLowerCase()) >= 0
                                  }
                          rules={[{
                              required: true,
                              message:'Vui lòng chọn xã hoặc phường bạn ở !',
                          }]}
                           >
                              <Select
                                showSearch
                                placeholder="Xã/Phường"
                                onChange={onChangeXa}
                              >
                                  {dataCity.map((itemCity)=>
                                       itemCity.name===city&&itemCity.huyen.map(itemHuyen=>
                                          itemHuyen.name===district&&itemHuyen.xa.map((itemXa,index)=>(
                                              <Option value={itemXa.name} key={index}>
                                                  {itemXa.name}
                                              </Option>
                                          ))
                                          )                               
                                  )}
                              </Select>
 
 
                          </Form.Item>
                          <Form.Item
                           name="phone"
                           label='Số điện thoại'
                           hasFeedback
 
                           rules={[{
                              required: true,
                              message:'Nhập số điện thoại của bạn',
 
                           }]}
                           >
                               <InputNumber
                                 
                                  className='w-100'
                                  min={0}
                                  type="number"
                                  max={999999999999}
                              />
                          </Form.Item>
                          <Form.Item
                          name="address"
                          label='Ấp/Số Nhà/Tên Đường'
                          hasFeedback
                          rules={[{
                              required: true,
                              message:'Nhập địa chỉ củ thể ',
                          }]}
                          
                          >
                              <TextArea
                              maxLength={150}
                              placeholder="địa chỉ cụ thể: ấp, số nhà, tên đường..."
                              rows={4}
                               >
 
                              </TextArea>
 
                          </Form.Item>
                        
                         
                          <Form.Item>
                            
                              <Button type='primary'  htmlType='submit' className='w-100 bg-red' >
                                {loadingInfor&&<div class="spinner-border spinner-border-sm text-light mr-3" role="status"></div>} Cập nhật đơn hàng </Button>
 
                          </Form.Item>
                      </Form>
   
      </Modal>
    );
}

export default UpdateInfoCart;