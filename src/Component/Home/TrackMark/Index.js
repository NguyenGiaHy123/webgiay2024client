import React from 'react';
import PropTypes from 'prop-types';
import logo1 from '../../../imgage/logoTrackMark/logo1.png'
import logo2 from '../../../imgage/logoTrackMark/Logo2.png'
import logo3 from '../../../imgage/logoTrackMark/logo3.jpg'
import logo4 from '../../../imgage/logoTrackMark/logo4.jfif'
import logo5 from '../../../imgage/logoTrackMark/logo5.png'
import logo6 from '../../../imgage/logoTrackMark/logo6.jpg'
import {Link} from 'react-router-dom'
import './index.css'
TrackMark.propTypes = {
    
};

function TrackMark(props) {
    return (
        <div className='ground-trackMark'>
            <h3>THƯƠNG HIỆU  </h3>
            <ul className='list-trackMark'>
                <li>
                    <Link data-aos="zoom-in-down" to='/productKey/adidas'><img src={logo1} alt="adidas"/></Link>
                </li>
                <li>
                    <Link data-aos="zoom-in-down" to='/productKey/vans'><img src={logo2} alt="vans"/></Link>
                </li>
                <li>
                    <Link data-aos="zoom-in-down" to='/productKey/converse'><img src={logo3} alt="converse"/></Link>
                </li>
                <li>
                    <Link data-aos="zoom-in-down" to='/productKey/newbalance'><img src={logo4} alt="newbalance"/></Link>
                </li>
                <li>
                    <Link data-aos="zoom-in-down" to='/productKey/nike'><img src={logo5} alt="nike"/></Link>
                </li>

                <li>
                    <Link  data-aos="zoom-in-down" to='/productKey/puma'><img src={logo6} alt="puma"/></Link>
                </li>


            </ul>

            
        </div>
    );
}

export default TrackMark;