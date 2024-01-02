import React ,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import './index.css'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
Cart.propTypes = {
    
};

function Cart({user,dispatch}) {

  const cartUser=useSelector((state)=>state.cart.dataCart);
    return (
      <Link to='/cartBuy'>
      <div className='ground-cart'>
        <div id="cart" class="cart cursor-pointer" totalcart={`${cartUser?cartUser.length:0}`}>
        <i class="uil uil-shopping-cart-alt"></i>      
      </div>
      </div>
      </Link>
      
    );
}

export default Cart;