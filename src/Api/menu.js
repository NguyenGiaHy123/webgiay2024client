 import axiosClient from './axiosClient'
const menuApi={
    getAllMenu:()=>{
        const url='/menu/getAllMenu';
        return axiosClient.get(url)
    }
    ,
    getKeyNsxProduct :(params)=>{
      
        const url='/userAdmin/Get_Key_Product';
        return axiosClient.get(url,{params})
    }
}
export default menuApi