import React from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    
};

function index(props) {
    return (
        <div>
         <div className='group-product-admin head-title-admin'>
        <div className='group-product-admin-title group-headTileAdmin d-flex items-center '>
        <img src="https://cdn-icons-png.flaticon.com/128/1524/1524855.png" className='img_menu_admin_product bg-white shadow-md p-2 rounded-md'/> 
        <div className='group-product-admin-title-search group-heade-tileAdmin-search'>
            <h5 className='cl-titleProduct'>Quản Lý Sản Phẩm  </h5>
            <p className='text-Gray1'>Danh Sách Sản Phẩm    </p>
        </div>
    </div>
    <div className='p-3 group-product-admin-addProduct-content  content_title_adMinAll shadow-md'>
         <h6 className='text-start cl-titleProduct mt-2  mb-5'>THÔNG TIN Danh Sách Sản Phẩm   </h6>
         <div className='group-product-admin-addProduct-content-form'>
          {/* {listProductByPage&&<Table className='tableListProduct' columns={columns} dataSource={!totalAllListProduct?[]:data} />} */}
         </div>
    </div>
    </div>
            
        </div>
    );
}

export default index;