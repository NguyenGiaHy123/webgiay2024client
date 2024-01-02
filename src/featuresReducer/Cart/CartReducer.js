import { createSlice } from "@reduxjs/toolkit";
import { message, notification } from "antd";
import {AddtoCart,GetAllCarts,DeleteCarts,UpDateStatusCart,UpdateInformationCart} from './pathApi'
const CartReducer = createSlice({
    name: "cart",
    initialState: {
        dataCart:JSON.parse(localStorage.getItem('cartProduct')) || [],
        CartHistory:[],
        loading:false,
        loadingStatus:false,
        loadingUpdateInfor:false
       
        
    }
    ,
    reducers: {
        addCart: (state, action) => {
            const {dataCart}=state;
            const {_id,size}=action.payload;
            
            const findIndexProduct=(_id_product,size_product,dataCartProduct)=>
            {
                var result=-1;
                if(dataCartProduct.length>0){
                    dataCartProduct.forEach((item,index)=>{
                       
                        if(item._id==_id_product&&item.size===size_product){
                            result=index;
                        }
                     }
                  )
                }
                
             return result;
                
            }
            const index=findIndexProduct(_id,size,dataCart);
           
            if(index!=-1){
                dataCart[index].quantity+=action.payload.quantity;
                notification['success']({
                    message: 'Thông báo ',
                    description: 'Bạn đã cập nhật số lượng thành công',
                })
            }
            else{
               dataCart.unshift(action.payload);
                notification['success']({
                    message: 'Thông báo ',
                    description: 'Bạn đã thêm sản phẩm vào giỏ hàng thành công',
                })
            }
           
     
            
        localStorage.setItem('cartProduct',JSON.stringify(dataCart));
            
        },
        DeleteCart:(state,action)=>{
         const {dataCart}=state;
          const {_id,size}=action.payload;
          dataCart.splice(dataCart.findIndex((item)=>item._id==_id&&item.size==size),1);
          message.success("Xoá Thành Công", 2);
          localStorage.setItem('cartProduct',JSON.stringify(dataCart));
        },
        UpdateQuantityCart:(state,action)=>{
            const {dataCart}=state;
            const {_id,quantity,size}=action.payload;
            const index=dataCart.findIndex((item)=>item._id==_id&&item.size==size);
            dataCart[index].quantity=quantity;
            message.success("Cập nhật số lượng thành công ", 2);
            localStorage.setItem('cartProduct',JSON.stringify(dataCart));

        }
    },
    extraReducers:{
        [AddtoCart.pending]:(state,action)=>{
            state.loading=true;
          
            

        },

        [AddtoCart.rejected]:(state,action)=>{
            state.loading=false; 
            notification["error"]({
                message: "Thông báo",
                description: "Thanh toán thất bại",
            });

        },

        [AddtoCart.fulfilled]:(state,action)=>{
            state.loading=false;
            notification["success"]({
                message: "Thanh toán thành công ",
                description: "kiểm tra thông tin trong lịch sử mua hàng",
            });
            localStorage.removeItem('cartProduct');
            state.dataCart=[]
        },

        [GetAllCarts.pending]:(state,action)=>{
            state.loading=true;
        }
        ,
        [GetAllCarts.rejected]:(state,action)=>{
            state.loading=false;
        },
        [GetAllCarts.fulfilled]:(state,action)=>{
            state.loading=false;
            state.CartHistory=action.payload.data;
            
        },
        [DeleteCarts.pending]:(state,action)=>{
            state.loading=true;
        },
        [DeleteCarts.rejected]:(state,action)=>{
            state.loading=false;
        },
        [DeleteCarts.fulfilled]:(state,action)=>{
            state.loading=false;
            message.success("Xoá Thành Công", 2);
        },
        [UpDateStatusCart.pending]:(state,action)=>{
            state.loadingStatus=true;
        },
        [UpDateStatusCart.rejected]:(state,action)=>{
            state.loadingStatus=false;
            message.error("Lỗi cập nhật lại đơn hàng", 2);
        },
        [UpDateStatusCart.fulfilled]:(state,action)=>{
            state.loadingStatus=false;
            const {data}=action.payload;
            if(data.status_order===true){
            message.success("Đơn hàng đã đặt hàng lại ", 2);
        }
        else{
            message.success("Đơn hàng đã hủy", 2);
        }
        }
        ,
        [UpdateInformationCart.pending]:(state,action)=>{
            state.loadingUpdateInfor=true;
        }
        ,
        [UpdateInformationCart.rejected]:(state,action)=>{
            state.loadingUpdateInfor=true;
        },
        [UpdateInformationCart.fulfilled]:(state,action)=>{
            state.loadingUpdateInfor=false;
            message.success("Cập nhật thông tin thành công", 2);
        }

    }
}
)
const {reducer,actions} =CartReducer; 
export const {addCart,DeleteCart,UpdateQuantityCart}=actions
export default reducer