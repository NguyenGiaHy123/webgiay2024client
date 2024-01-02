import {React,useContext} from 'react';
import PropTypes from 'prop-types';
import logogiay from '../../imgage/dark1logo.png'
import { Link } from 'react-router-dom';
import '../header/index.css'
import Search from './Search';
import User from './User';
import Cart from './User/cart';
import {UserContext} from '../../contexts/UserContentext'
import { useDispatch } from 'react-redux';
Header.propTypes = {

};
function Header(props) {
    const {setOpenMenu}=props;
    const userContentex=useContext(UserContext);
    const {state}=userContentex;
    const [user,setUser]=state.user;
    const [idUser,setIdUser]=state.idUser
    const [token,setToken]=state.token;
    const {socket}=state;
    const dispatch=useDispatch()

    return (
        <div className='ground-header'>
            <div className='header-main'>
        
                <div className='header-main_logo'>
                    <Link to='/'>
                   
                       <span>Vn</span> Shop
                    </Link>
                </div>

                <Search setOpenMenu={setOpenMenu}/>

                <div className='toggle-menu'>
                   <i class="uil uil-bars"
                   onClick={()=>setOpenMenu(true)}
                   ></i>
                </div>
                <Cart
                user={user}
                dispatch={dispatch}
                />

                <User 
                user={user}
                setUser={setUser}
                idUser={idUser}
                setIdUser={setIdUser}
                setOpenMenu={setOpenMenu}
                token={token}
                setToken={setToken}
                socket={socket}
                />
                
            </div>
            
        </div>
    );
}

export default Header;