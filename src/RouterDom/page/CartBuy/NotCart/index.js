import React from 'react';
import PropTypes from 'prop-types';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
NotCart.propTypes = {
    
};

function NotCart(props) {
    return (
        <Result
        icon={<SmileOutlined />}
        title="Bạn không có sản phẩm nào hết "
        extra={<Button type="primary"><Link to='/' className='no-underline'>Tiếp tục mua sắp thôi  </Link></Button>}
      />
    );
}

export default NotCart;