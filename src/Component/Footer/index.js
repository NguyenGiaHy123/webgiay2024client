import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import { Link } from 'react-router-dom';
import payment1 from '../../imgage/payment/cash.jpg'
import payment2 from '../../imgage/payment/img8.jfif'
import payment3 from '../../imgage/payment/internet_banking.jpg'
import payment4 from '../../imgage/payment/visa.jpg'
import payment5 from '../../imgage/payment/paymen5.png'
import payment12 from '../../imgage/payment/img12.png'
import payment13 from '../../imgage/payment/img13.png'
import payment7 from '../../imgage/payment/img10.png'
import payment8 from '../../imgage/payment/img11.png'
import {UserContext} from '../../contexts/UserContentext'
Footer.propTypes = {
    
};

function Footer(props) {
    const contentTextUser=useContext(UserContext)
    const {state}=contentTextUser
    const [countUserOline]=state.countUserOline
    const [view]=state.view
    
    return (
 

    <footer class="new_footer_area bg_color">
        <div className='footer_content_text'>
            <div className='footer_items'>
                <div className='content_footerInformation_items'>
                     <h5 className='title_footer'>THÔNG TIN CHÚNG TÔI </h5>
                     <p className='contentLogo'>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP. HCM Địa chỉ : Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh Điện thoại: 0283.8940 390 Fax: 0283.9940 954 Email: dhcn@iuh.edu.vn</p>
                </div>
                <div className='content_footerInformation_itemss'>
                   <h5 className='title_footer'>Chăm Sóc Khách Hàng </h5>
                       <ul className='list_menu_footer'>
                                <li>Các câu hỏi thường gặp</li>
                                <li>Gửi yêu cầu hỗ trợ</li>
                                <li>Hướng dẫn đặt hàng</li>
                                <li>Phương thức vận chuyển</li>
                                <li>Chính sách đổi trả</li>
                                <li>Hướng dẫn mua trả góp</li>
                       </ul>
                </div>
            </div>

            <div className='footer_items'>
                <div className='content_footerInformation_itemss'>
                   <h5 className='title_footer'>VỀ SHOP </h5>
                       <ul className='list_menu_footer'>
                                <li>Giới thiệu</li>
                                <li>Tuyển Dụng</li>
                                <li>Chính sách bảo mật thanh toán</li>
                                <li>Chính sách bảo mật thông tin cá nhân</li>
                                <li>Chính sách giải quyết khiếu nại</li>
                                <li>Điều khoản sử dụng</li>
                       </ul>
                </div>

                <div className='content_footerInformation_itemss'>
                  <h5 className='title_footer'>TIỆN ÍCH </h5>
                       <ul className='kilimanjaro_widget'>
                        <li><a href="#">Classy</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Creative</a></li>
                                    <li><a href="#">One Page</a></li>
                                    <li><a href="#">Multipurpose</a></li>
                                    <li><a href="#">Minimal</a></li>
                                    <li><a href="#">Classic</a></li>
                                    <li><a href="#">Medical</a></li>
                       </ul>
                </div>
            </div>

            <div className='footer_items'>
                <div className='content_footerInformation_itemss'>
                   <h5 className='title_footer'>CHÍNH SÁCH THANH TOÁN</h5>
                       <ul className='list_menu_footer_img'>
                                <li><img src={payment1}/></li>
                                <li><img  src={payment2}/></li>
                                <li><img  src={payment3}/></li>
                                <li><img  src={payment4}/></li>
                                <li><img   src={payment5}/></li>
                               
                                <li><img   src={payment7}/></li>
                                <li><img   src={payment8}/></li>
                                <li><img   src={payment12}/></li>
                                <li><img   src={payment13}/></li>
                             
                       </ul>
                </div>
            </div>

            <div className='footer_items'>
                <div className='content_footerInformation_itemss'>
                    
                   <h5 className='title_footer'>Liên Hệ CHÚNG TÔI </h5>
                   <div className='icon_logo_contact'>
                    <ul className='icon_logo_contact_list'>
                                <li className='iconfacebook'>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100082009098372"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li className='iconin'>
                                    <a
                                        href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F%3Ftrk%3D404_page&trk=login_reg_redirect"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li className='giftHub'>
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <i class="fa fa-github" />{" "}
                                    </a>
                                </li>
                                <li className='giftHub'>
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <i className="fa fa-external-link" />
                                    </a>
                                </li>
                            </ul>


                    </div>
                       <div className='list_menu_footer_oneline'>
                        <p>Online: {countUserOline?countUserOline:0} User</p>
                        <p>Lượt truy cập :{view?view.View:0} lượt </p>
                       </div>
                </div>
            </div>

        </div>
        
        
    <div class="new_footer_top">
   
        <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
        </div>
    </div>
    
</footer>

      
    );
}

export default Footer;