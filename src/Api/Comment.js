import axiosClient from './axiosClient'
const ApiComment={
   getComment:(params)=>{
    const url='/comment/getCommentid'
   
    return axiosClient.get(url,{params});
     
   }
}
export default ApiComment
