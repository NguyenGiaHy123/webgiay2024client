import React, { useContext } from 'react'
import {Box, useMediaQuery} from '@mui/material';
import DashboardBox from './DashboardBox';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import  {UserContext}  from '../../../../contexts/UserContentext';
//a khoang cach 4 deon b 4 dong c 3 dong 
const templateGrid=`
"a a b"
"a a b"
"a a b"
"d d c"
"d d c"
"d d c"
"e f g"
"e f g"
"e f g"
`
const temGridSmall=`
"a"
"a" 
"a" 
"a"
"a" 
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
`
type Props = {

}

type UserState = {
 
  countUserOline: [countUserOline: number];
};

type User = {
  name: string;
  email: string;
  age: number;
};
type Socket = {
  // define socket properties
};
const DashBoard = (props: Props) => {

  const isAboveMediumScreen=useMediaQuery("(min-width:1200px)")
  const userContext = useContext(UserContext);



  return (
  <div>
    <div className='group-product-admin head-title-admin'>
 <div className='group-product-admin-title group-headTileAdmin d-flex items-center '>
   <img src="https://cdn-icons-png.flaticon.com/128/2936/2936690.png" className='img_menu_admin_product bg-white shadow-md p-2 rounded-md'/> 
   <div className='group-product-admin-title-search group-heade-tileAdmin-search'>
       <h5 className='cl-titleProduct'>Thống Kê Tổng Quan  </h5>
   </div>
 </div>
 <div className='p-3 group-product-admin-addProduct-content  content_title_adMinAll shadow-md'>
    <h6 className='text-start cl-titleProduct mt-0  mb-3'>Thông  Tin Thống Kê Trực Quan  Qua Biểu Đồ </h6>
    <Box display="grid" width="100%" height={"100%"}
      gap={"1.5rem"}
     sx={
      isAboveMediumScreen?
      
      {
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateAreas: templateGrid,
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",

      }:{
        gridTemplateAreas:temGridSmall,
        gridAutoRows:"80px",
        gridTemplateColumns:"1fr",
      }
  }
    >
      <Row1/>
      <Row2/>
      <Row3/>
    </Box>
 </div>
 </div>
</div>
  )
}
export default DashBoard
//useMemo: giúp tối ưu hóa hiệu năng của ứng dụng
//bang cach tranh tinh toan nhung gia tri khong can thiet
//su dung useMemo de tinh toan gia tri moi khi cac gia tri trong mang tham so thay doi
//luu ket qua khi cac component khi goi nhieu lan ma khong can tinh toan lai
