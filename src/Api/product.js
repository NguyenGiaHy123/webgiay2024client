
import axiosClient from "./axiosClient";

const ProductApi={
    getProductTypes:(params)=>{
        const url='/product/getProductType'
        return axiosClient.get(url,{params});
    },

    getAllProduct:(params)=>{
        const url='/product/getProduct'
        return axiosClient.get(url,{params});
    },
    getProductId:(id)=>{
        
        const url=`/product/getProduct_id?id=${id}`
     
        return axiosClient.get(url)
    },
    getProductNsx:(params)=>{
        const url='/product/nsx'
        return axiosClient.get(url,{params});
    }

}
export default ProductApi