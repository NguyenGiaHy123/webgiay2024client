import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
Loading.propTypes = {
    
};

function Loading(props) {
    return (
    <div className='group-loading'>
         <div class="loaders"></div>
     <div class="loader">
        <span></span>
      </div>
        </div>
        

        // <div className='group-loading'>
        // <div class="loader"></div>
        // </div>
      
    );
}

export default Loading;