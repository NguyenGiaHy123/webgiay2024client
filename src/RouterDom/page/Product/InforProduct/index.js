import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import StarRatings from 'react-star-ratings';
import './index.css'
import img1 from '../../../../imgage/ShopLogo/img1.svg'
import img2 from '../../../../imgage/ShopLogo/img2.svg'
import img3 from '../../../../imgage/ShopLogo/img3.svg'
import img4 from '../../../../imgage/ShopLogo/img4.svg'
import Freeship from '../../../../imgage/freeship.png'
import {Link, useNavigate} from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
import {Formik,FastField,Form} from 'formik'
import {notification,message}from 'antd'
import { FormGroup, Input  } from 'reactstrap';

import SelectField from '../../../../FastFieldAllForm/SelectSize';
import { useDispatch } from 'react-redux';
InforProduct.propTypes = {
    
};

function InforProduct(props) {
    const {productValue,actionAddToCart,user}=props
    const navigate=useNavigate()
    const {product}=productValue
    const [quantitys,setquantity]=useState(1);
    const productDescription=product.description.replace('<p>','');


    const fomat=new Intl.NumberFormat('vn')
    
   //
        const optionSize=product.size.map((value,index)=>{
            return {
                value:value,
                label:value
            }
            
         })
  
   const initalValues={
    quantity:'',
    size:""
   }

   const showStar=(value)=>{
    const rate=value.rating/value.numReviews;
   //create function return sum a and b
 if(value){
     if(value.numReviews>0){
         return (
             <div className='flex items-center'>
               <span style={{marginTop:'-1.3rem',marginRight:'10px'}}>
                   <StarRatings
                    starDimension="18px"
                       rating={rate}
                       starRatedColor="#fed330"
                       starHoverColor="#fed330"
                       name='rating'
                     />
               </span>
               <p  style={{color:"initial"}}> {value.rating} Đánh Giá </p>
             </div>
           )

     }
     else{
          return(
      
        <p  style={{color:"initial",fontWeight:'initial'}}> Có ({value.rating}) viết đánh giá</p>
      )
          
     }
    
 }
}
    const getValuePrice=(value)=>{
        if(user){
            if(value&&quantitys>=1&&value.size){
                var productDescription=product.description.replace(/<\/?[^>]+(>|$)/g, "");
                
                const dataAddToCart={
                        _id:product._id,
                        _id_user:user._id,
                        key:product._id+"_"+value.size,
                        name:product.name,
                        price:product.price,
                        image:product.poster[0].url,
                        size:value.size,
                        color:product.color,
                        description:productDescription,
                        quantity:quantitys,
                }
                actionAddToCart(dataAddToCart)
                
                // notification["success"]({
                //     message: "Thông báo",
                //     description: "Đã thêm vào giỏ hàng",
                // });
            }
            if(!value.size){
                notification["error"]({
                    message: "Thông báo",
                    description: "Chọn size trước khi thêm vào giỏ hàng",
                });
            }    

        }
        else{
            notification['error']({
                message: 'Thông báo ',
                description: 'login trước khi thêm vào giỏ hàng',
            })
            navigate('/sign')

        }
    }
    

    const settings = {
        customPaging: function (i) {
            return (
                <a>
                   <p className='active-backgroup'></p>
                    <img src={product.poster[i].url}
                      
                    />
                   
                </a>
            );
        },
        dots: true,
        dotsClass: "group-array-image",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplaySpeed: 3000,
        nextArrow: (
            <div>
                <i class="fa fa-angle-right right"></i>
            </div>
        ),
        prevArrow: (
            <div>
                <i class="fa fa-angle-left left"></i>
            </div>
        ),
    };
    return (

     <div>
         
         <div className='group-inForProduct '>
             <div className='group-img-product'>
            
         
         
         {/* imageSrc={product.poster[0].url} */}
                   <Slider {...settings}>
                           {product&&product.poster.map((image, index) => (
                                 <div className="image-array-slider" key={index}>
                                      <ReactImageMagnify {...{
                                             smallImage: {
                                                 alt: 'Wristwatch by Ted Baker London',
                                                 isFluidWidth: true,
                                                 src: image.url,
         
                                             },
                                             largeImage: {
                                                 src:img4 ,
                                                 width: 1500,
                                                 height: 1800,
         
                                             }
                                         }} />
                                     {/* <img src={image.url} alt={image._id} /> */}
         
                                 </div>
                             ))}
                         </Slider>
         
             </div>
             <div className='group-information-product'>
                 {product&&
                 <>
                 <div className='content-information-product'>
                     {/* <p className='key-inForDetail'>{product.key}</p> */}
                     <h3 className='Title-formDetail'>Giày {product.sex} {product.name}</h3>
                 </div>
                 <div className='content-information-detail-all'>
                     <div className='content-infor-all'>
                         <div className='content-infor-left-one'>
                             <p>Tin dùng :</p>
                             <p>Xuất sứ :</p>
                             <p>Danh mục:</p>
                         </div>
                         <div className='flex'>
                             <p className='codeProduct'>Mã sản phẩm :</p><span>{product._id}</span>
                         </div>
                         <div className='content-infor-left-two'>
                             <p className='fontAll'>Đánh giá :</p>
                             {showStar(product)}
                         </div>
                     </div>
                     
                  <div className='content-infor-right-and-left'>
                      <div className='content-detail-left'>
                             <div className='content-infor-left-price'>
                                 <p>{fomat.format(product.price)}{" "}
                                                 <u>đ</u>{" "}</p>
                                 </div>
                                 <p className='contentSex '>Giới Tính : {product.sex}</p>
                                 <p className='color-content'>Màu sắc :{product.color.map((value,index)=>(
                                     <div className='color-detail' key={index}>{value}</div>
                                 ))}</p>
                                 <p className='phone'>Gọi đặt mua : 0399483301 (7:30 -22:00)</p>
                                 <p className='collection'>Bộ sưu tập : {product.collections}</p>
                                 <p className=''>Loại sản phẩm : {product.productType}</p>
                                 <p>Nhà sản xuất : {product.key}</p>
                         </div>
                         <div className='content-detail-right'>
                             <ul className='content-detail-right-list'>
                                 <li className='content-detail-right-items'>
                                     <img src={img1}/> <span>Vn Shop
                                     </span>
                                 </li>
                                 <li className='content-detail-right-items'>
                                     <img src={img2}/> <span>Giao hàng đảm bảo</span>
                                 </li>
                                 <li className='content-detail-right-items'>
                                     <img src={img3}/> <span>0399.483.301</span>
                                 </li>
                                 <li className='content-detail-right-items'>
                                     <img src={img4}/> <span>Miễn phí đổi trả trong 7 ngày</span>
                                 </li>
                                 <li className='content-detail-right-items'>
                                     <img src={img4}/> <span>Kiểm tra hàng trước khi nhận</span>
                                 </li>
                                 <li className='content-detail-right-items'>
                                     <img src={img4}/> <span>Ho tiền nếu phái hiện hàng giả</span>
                                 </li>
                                 <Link to='/' className='viewShop'>Xem Shop</Link>
                                 <div className='hangHieu'>Bạn muốn bán hàng cùng Vua Hàng Hiệu?<span><Link to='/sign-up'>Đăng ký</Link></span></div>
                             </ul>
                         </div>
                     </div>
         
                 </div>
                 <div className='content-inforDetail-end'>
                     <div className='freeShip'><img src={Freeship}/> Miễn phí giao hàng (tối đa 30k) cho đơn hàng từ 900k Xem chi tiết</div>
                     </div>
                 </>
                 }
                <Formik
                initialValues={initalValues}
                onSubmit={getValuePrice}
                >
                 {formilkProps=>{
                     return (
                         <Form className='formQuantity'>
                             <div className='from-content-quantity-and-size '>
                                <div className='flex items-center gap-2 flex-wrap'>
                                <span className='sluong sl'> Số Lượng :</span>
                                         <FormGroup className='form-group form-group-minus-plus'>
         
         
                                         <input className={`minus ${quantitys===1?"disable":''} hover:text-blue`} type="button" disabled={quantitys===1} onClick={()=>setquantity(quantitys-1) }value="-"/>
         
                                             <Input type="text"
         
         
                                             placeholder="size"
                                             value={quantitys}
         
                                             />
                                        <input className='plus hover:text-blue' type="button" onClick={()=>setquantity(quantitys+1)} value="+"/>
                                         </FormGroup>
         
                                </div>
                                  <div>
                                      <FastField
                                             name="size"
         
                                             component={SelectField}
                                             handleQuanTiTy={(value)=>{setquantity(value)
         
                                             }}
                                             label="Size"
                                             placeholder="Size"
         
                                         option={optionSize}/>
                                  </div>
                             </div>
                             <div className='submitForm-buy'>
                             <p className='priceChange'>Tổng cộng : {fomat.format(quantitys*(product.price))}{" "}
                                                 <u>đ</u>{" "}</p>
         
                               <button type='submit '>Add to cart</button>
                             </div>
         
         
                         </Form>
                     )
                 }}
         
                </Formik>
         
         
             </div>
         
         </div>
         <div className=' ground-writeComment'>
         <h4 className='title1'>Mô tả sản phẩm</h4>
                 <p>
                 {
                   productDescription.replace(/<\/?[^>]+(>|$)/g, "")
                 }
                </p>
               </div>
     </div>
     

    );
}

export default InforProduct;