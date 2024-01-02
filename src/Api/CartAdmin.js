import axiosClient from "./axiosClient"

const CartApi={
    Admin_GetAllCart_User:()=>{
     const url='/userAdmin/getAllCartAdmin'
     return axiosClient.get(url);
    },
    Admin_GetCartId:(id)=>{
        const idUser={
            id:id
        }
        const url=`/userAdmin/LIST_CART_ID`
    
        return axiosClient.post(url,idUser);
    }
}
export default CartApi;