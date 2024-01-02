import axiosClient from "./axiosClient";
const SearchApi_Product={
    Search:(params)=>{
        
        const url='/search/searchProduct'
        return axiosClient.get(url,{params})
    }
}
export default SearchApi_Product