import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import './index.css'
import imgdashBoard2 from "../../../../imgage/admin/bar-chart.png"
import home  from "../../../../imgage/admin/house.png"
import muaHang  from "../../../../imgage/admin/ProductBlue.png"
import sanPham  from "../../../../imgage/admin/ProductBlueCart.png"
import thuongHieu  from "../../../../imgage/admin/trademark.png"
import vanChuyen  from "../../../../imgage/admin/vanChuyen.png"
import taiKhoan from '../../../../imgage/admin/user.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

MenuAdmin.propTypes = {
    
};

function MenuAdmin(props) {
    const {openMenuAdmin}=props

   
    return (
        <div className={`group_menu_page_addMin ${openMenuAdmin?"open":""}`}>
            <ul className='menu'>
                <li className=' menu_item_title  mt-2'>
                     
                        <div class="groupmenuItemtitle"><img src={"https://cdn-icons-png.flaticon.com/128/8280/8280281.png"} className='img_menu_admin '/><Link to="/admin/TrangChu">Trang chủ</Link>  </div>
                </li>

                <li className='menu_item'>
                    <a  className='link_item'>
                        <img src={"https://cdn-icons-png.flaticon.com/128/3621/3621289.png"} className='img_menu_admin bg-white shadow-md p-2 rounded-md'/> Slider 
                        <i className="fa fa-caret-down" />
                    </a>
                    <ul className='submenu_admin'>
                        <li className=''>
                            <Link to="/admin/AddSlider">Thêm slider</Link>
                            <Link to="/admin/ListSlider">Danh sách slider </Link>
                        </li>
                    </ul>
                </li>

                <li className='menu_item'>
                    <a  className='link_item'>
                   
                        <img src="https://cdn-icons-png.flaticon.com/128/1246/1246234.png" className='img_menu_admin bg-white shadow-md p-2 rounded-md'/> Sản phẩm
                        <i className="fa fa-caret-down" />
                    </a>

                    <ul className='submenu_admin'>
                        <li className=''>
                            <Link to="/admin/addProduct"> Thêm sản phẩm </Link>
                            <Link to="/admin/listProduct"> Danh sách sản phẩm </Link>
                        </li>
                    </ul>

                </li>
                <li className='menu_item'>
                    <a  className='link_item'>
                        <img src={"https://cdn-icons-png.flaticon.com/128/411/411763.png"} className='img_menu_admin bg-white shadow-md p-2 rounded-md'/> Mua hàng
                        <i className="fa fa-caret-down" />
                    </a>

                    <ul className='submenu_admin'>
                        <li className="">
                            <Link to="/admin/listPurchase"> Danh sách mua hàng </Link>
                        </li>
                    </ul>
                </li>

                <li className='menu_item'>
                    <a  className='link_item'>
                        <img src={"https://cdn-icons-png.flaticon.com/128/2203/2203145.png"} className='img_menu_admin bg-white shadow-md p-2 rounded-md'/> Vận chuyển
                        <i className="fa fa-caret-down" />
                    </a>

                    <ul className='submenu_admin'>
                        <li className="">
                            <Link to="/admin/AddTranPort"> Thêm phí vận chuyển   </Link>
                            <Link to="/admin/TranPort"> Danh sách vận chuyển  </Link>
                        </li>
                    </ul>
                </li>

                <li className='menu_item'>
                    <a  className='link_item'>
                        <img src={"https://cdn-icons-png.flaticon.com/128/3239/3239045.png"} className='img_menu_admin bg-white shadow-md p-2 rounded-md'/> Người dùng 
                        <i className="fa fa-caret-down" />
                    </a>
                    <ul className='submenu_admin'>
                        <li className=''>
                            
                            <Link to="/">  Tất cả người dùng </Link>
                            <Link to="/">  Quản Lý Tài Khoản</Link>
                            
                        </li>
                    </ul>
                </li>

                <li className='menu_item'>
                    <a  className='link_item'>
                        <img src={"https://cdn-icons-png.flaticon.com/128/2936/2936690.png"} className='img_menu_admin bg-white shadow-md p-2 rounded-md'/> Thống kê 
                        <i className="fa fa-caret-down" />
                    </a>
                    <ul className='submenu_admin'>
                        <li className=''>
                            <Link to="/admin/Satistical"> Tổng quan </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default MenuAdmin;
