import React from 'react';
import PropTypes from 'prop-types';
import {Result,Button} from 'antd'
import { Link } from 'react-router-dom';
NotSearch.propTypes = {
    
};

function NotSearch(props) {
    return (
        <div>
     <div>
         <Result
        status="404"
        title="404"
        subTitle="  Rất tiếc, không tìm thấy sản phẩm nào phù hợp với từ khóa tìm kiếm của bạn."
        extra={<Button type="primary"><Link to='/' style={{textDecoration:"none"}}> Back Home</Link></Button>}
       />   
        </div>
        </div>
    );
}

export default NotSearch;