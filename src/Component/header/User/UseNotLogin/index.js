import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './index.css'
UserNotLogin.propTypes = {
    
};

function UserNotLogin(props) {
    const {toggelUser,setToggleUser}=props
    return (
        <>
        <div class="group-sign">
          <Link to='/sign' className='signInText'>Sign in</Link>
          <Link to='/sign-up' className='signInText'>Sign up</Link>
        </div>
       
            <i class="uil uil-user iconRegister" onClick={()=>{setToggleUser(true)}}></i>
            <div className={`toggleUser ${toggelUser?'open':''}`}>
            <i class="uil uil-multiply toggleCloseUser" onClick={()=>{setToggleUser(false)}}></i>
                <Link to='/sign'>
                  <p>Sign in</p>  
                </Link>
                <Link to='/sign-up'>
                    <p>Sign up</p>
                </Link>
            </div>
            </>
    );
}

export default UserNotLogin;