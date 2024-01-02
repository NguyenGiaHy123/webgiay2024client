import axiosClient from "./axiosClient"

const CartApi = {
    AddTocart: (data) => {
        const url = '/cart/addToCart'
        return axiosClient.post(url, data);
    },
    GetAllCart: (params) => {
        //phai de day la params moi chuyen len server rq.query duoc
        const url = '/cart/getCart'
        return axiosClient.get(url, {
            params
        })
    },
    DeleteCart: (params) => {
        const url = `cart/deleteCart`
        return axiosClient.delete(url, {
            params
        })
    },
    UpDateStatusCard: (params) => {

        const url = '/cart/updateStatus'
        return axiosClient.put(url, {
            params
        })
    },
    UpdateInformationCart: (params) => {
        const url = '/cart/updateCart'
        return axiosClient.put(url, {
            params
        })
    }

}
export default CartApi;