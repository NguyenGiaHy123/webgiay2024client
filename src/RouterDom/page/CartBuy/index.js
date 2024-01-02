import React ,{useContext, useState} from 'react';
import PropTypes from 'prop-types';
import './index.css'
import {Row,Col} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import {Form,Drawer, Button, Input, Select, InputNumber} from 'antd'
import dataCity from '../../../data.json'
import CartItem from './CartItem';
import {useSelector,useDispatch} from 'react-redux'
import dataVnPay from '../../../bank.json'
import NotCart from './NotCart';
import {UserContext} from '../../../contexts/UserContentext';
import { AddtoCart } from '../../../featuresReducer/Cart/pathApi';
import {Spin} from 'antd'
import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect } from 'react';
const { Option } = Select;

CartBuy.propTypes = {
    
};

function CartBuy(props) {
    const dispatch=useDispatch();
    const loadingPayment=useSelector(state=>state.cart.loading);
    const dataCarts=useSelector(state=>state.cart.dataCart);
    const [dataCart,setdataCarts]=useState([]);
    useEffect (()=>{
        setdataCarts(dataCarts)
    },[dataCarts])
    const contextUser=useContext(UserContext)
    const navigate=useNavigate()
    const {state}=contextUser;
    const [user,setUser]=state.user;
  
    const format=new Intl.NumberFormat('vn')
    const [form] = Form.useForm();
    const [openPayment,setOpenPayment]=useState(false)
    const { TextArea } = Input;
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [xa, setXa] = useState("");
    const [payment, setPayment] = useState("");
    const [visible, setVisible] = useState(false);
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])

    const showDrawer = () => {
        if(user){
            setVisible(true);

        }
        else{
            navigate('/sign')
        }
     
    };
  
    const onClose = () => {
      setVisible(false);
    };
   
    const onFinish=async (value)=>{
        const InforPayment={
            name:value.name,
            address:value.city +"-"+ value.district+ "-"+value.xa+"-"+ value.address,
            phone:value.phone,
            totalSum:showTotoalMoney(dataCart),
            payment:value.payment,
            cart:dataCart
        }
        

            // actionAddToCartPayment(InforPayment)
            const actionAddToCartPaymentS=await dispatch(AddtoCart(InforPayment))
            const PaymentCurrent=unwrapResult(actionAddToCartPaymentS)
            
            if(PaymentCurrent){
                setdataCarts([])
                form.resetFields();
                setVisible(false);

            }
    }
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
    const showTotoalMoney=(dataTotal)=>{
        let tong=0;
        dataTotal.forEach(element => {
            tong+=element.price*element.quantity;
        });
        return tong;

    }
    return (
        <div className='group-cart '>
            
            {dataCart.length>0?
             <div className='cart-buy  mt-4 p-2  shadow-inner'>
             <div className='d-flex items-center gap-1 mb-3'>
                 <Link to='/'  className='list-none no-underline totalItem text-2xl  font-medium text-Gray'>Trang Chủ </Link> /<Link to ='/cartBuy' className='list-none no-underline font-Georgia italic text-2xl '>Giỏ hàng </Link>
                
             </div>
           

             <div className=' group-card-responsive gap-2'>
                 <div  className='shadow-md p-4'>
                 <h6 className='totalItem text-right pr-11'> Có {dataCart.length} sản phẩm </h6>
                     <CartItem
                     user={user}
                     dataCart={dataCart}
                     />
                 </div>
                 <div className='ml-auto relative  group-payment-all justify-center'>
                 <div className="card-total-money">
                    <div className="total-money p-1  pb-5">
                        <h4>Thành tiền</h4>
                        <div className="group-total-money">
                           <span className='vat'>(Đã bao gồm VAT nếu có)</span>
                            <p className='mt-2 font-sans text-red font-medium'>
                                {format.format( showTotoalMoney(dataCart))} VNĐ
                             
                            </p>
                           
                        </div>
                        <button className="btn btn-danger" onClick={()=>showDrawer()}>
                            Tiến hành đặt hàng
                        </button>
                    </div>
                </div>
                 </div>

                
                  <Drawer
                  title="Thông tin người nhận mua/người đặt hàng"
                  width={500}
                  className='w-full'
                  onClose={onClose}
                  visible={visible}
                  bodyStyle={{ paddingBottom: 80 }}
                  >

               
                 <Col xs={24} sm={24} md={24} lg={24}>
                  
                  <Form 
                       className='bg-white p-4  form-payment  shadow-md'
                       
                       form={form}
                       onFinish={onFinish}
                       layout='vertical'
                          // layout='horizontal'
                      >
                          <h6 className='text-justify'>Điền thông tin đầy đủ để thanh toán  </h6>
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
                          name="payment"
                          label='Hình thức thanh toán'
                          hasFeedback
                          rules={[{
                              required: true,
                              message:'Vui lòng chọn hình thức thanh toán',
                          }]}
                          >
                              <Select
                              showSearch
                              placeholder="Hình thức thanh toán"
                              onChange={onChangePayment}
                              >
                                  <Option value="1">Thanh toán khi nhận hàng</Option>
                                
                                  <Option value="2"> VN Pay</Option>
                                 
                              </Select>
 
                          </Form.Item>
                          
                          {payment=="2"&&
                          <Form.Item
                            name="vnpay"
                            label='Chọn ngân hàng thanh toán (Nếu có )'
                            hasFeedback
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            }
                           >
                              <Select
                              name="vnpay"
                              showSearch
                              placeholder="Không có "
                             
                              >
                                  {dataVnPay.map((item,index)=>
                                  <Option value={item.vn_name} key={index}></Option>
                                  )}
                              </Select>
                              
                          </Form.Item>}
                          <Form.Item>
                            
                              <Button type='primary'  htmlType='submit' className='w-100 bg-red' >
                                {loadingPayment&& <div class="spinner-border spinner-border-sm text-light mr-3" role="status"></div>}Đặt hàng</Button>
 
                          </Form.Item>
                      </Form>
                  
                  </Col>
                </Drawer>
                
                 

             </div>

         </div>:<NotCart/>
            }
           
            
        </div>
    );
}

export default CartBuy;