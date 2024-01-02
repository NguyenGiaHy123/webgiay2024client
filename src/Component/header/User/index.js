import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContentext';
import UserNotLogin from './UseNotLogin';
import InForUser from './inforUser';
import {Spin} from 'antd'
import {useSelector} from 'react-redux'
User.propTypes = {
    
};

function User(props) {
    const {user,setUser,idUser,setIdUser,token,setToken,setOpenMenu,socket}=props
    const tokeUserInPage=localStorage.getItem('tokenUser');
    const [toggelUser,setToggleUser]=useState(false);
    const userinfor=useSelector(state=>state.user); 
  const loading=userinfor.loadingGetProfile

    return (
    
        <div class="ground-user">
           {loading&&<Spin size='large'/>}

            {!loading&&!tokeUserInPage?
            <UserNotLogin
            toggelUser={toggelUser}
            setToggleUser={setToggleUser}
            />
            :
            <>
            {
            !loading&&
            <InForUser
            user={user}
            setUser={setUser}
            idUser={idUser}
            setIdUser={setIdUser}
            token={token}
            setToken={setToken}
            socket={socket}
            />
            }
            </>
           } 
            {toggelUser&&<div className='active-before' onClick={()=>setToggleUser(false)}></div>}
        </div>
        
    );
}

export default User;