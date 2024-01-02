import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import menuAdias from '../../../../imgage/iconMenu/adidas.png'

import menuConverse from '../../../../imgage/iconMenu/converse.png';
import menuPuma from '../../../../imgage/iconMenu/puma.png'
import menuNike from '../../../../imgage/iconMenu/nike.png'
import menuNewBalance from '../../../../imgage/iconMenu/newBalance.png'
import menuVans from '../../../../imgage/iconMenu/Vans.png'
MenuUser.propTypes = {
    
};

function MenuUser(props) {
    const [toggemenu,setMenuToggle]=useState(false)
   
   
    const {listMenuUser}=props
  
    const {Adidas}=listMenuUser;
    const {Nike}=listMenuUser;
    const {Converse}=listMenuUser;
    const {NewBalance}=listMenuUser
    const {Vans}=listMenuUser
    const {Puma}=listMenuUser
    return (
        
       <nav>
        <ul className='menu'>
          
            <li className='nav-items active'>
            <i class="uil uil-home"></i>
                <Link to='/' className='active'>
                Trang Chủ</Link>
                </li>

            <li className={`nav-item`} >
                <a  rel='noReferer noOpen'>
                    <div className='logo'>
                        <img src={menuAdias} alt='not image'/>
                    </div>
                    Adidas 
                    <i className="fa fa-caret-down" />
                   
                </a>
                
                    <ul className={`submenu`}>
                        <li>

                      
                        {(Adidas)&&Adidas.map((adi,index)=>(
                           
                            <Link to={`ProductNsx/${adi}`} key={index}>{adi} </Link>
                        )
                        )}
                          </li>
                    </ul>
            </li>

            <li className={`nav-item`}>
                <a rel='noReferer noOpen'>
                    <div className='logo'>
                        <img src={menuNike}/>
                    </div>
                    Nike
                    <i className="fa fa-caret-down" />
                </a>

                 <ul className='submenu'>
                 <li>
                    {(Nike)&& Nike.map((cs,index)=>(
                        <Link  to={`ProductNsx/${cs}`} key={index}>{cs}</Link>
                    ))}
                    </li>
                  </ul>
                  
            </li>


            <li className='nav-item'>
            <a  rel='noReferer noOpen'>
                <div className='logo'>
                    <img src={menuConverse} alt='imgConverse'/>
                </div>
                  Converse
                  <i className="fa fa-caret-down" />
            </a>
                  <ul className='submenu'>
                  <li>
                    {(Converse)&& Converse.map((cs,index)=>(
                        <Link  to={`ProductNsx/${cs}`} key={index}>{cs}</Link>
                    ))}
                  </li>
                  </ul>
            </li>

   
            <li className='nav-item'>
                <a rel='noReferer noOpen'>
                    <div className='logo'>
                        <img src={menuVans}/>
                    </div>
                    Vans
                    <i className="fa fa-caret-down" />
                </a>

                 <ul className='submenu'>
                 <li>
                    {(Vans)&& Vans.map((cs,index)=>(
                        <Link  to={`ProductNsx/${cs}`} key={index}>{cs}</Link>
                    ))}
                      </li>
                  </ul>
            </li>

            <li className='nav-item'>
                <a rel='noReferer noOpen'>
                    <div className='logo'>
                        <img src={menuPuma}/>
                    </div>
                    Puma
                    <i className="fa fa-caret-down" />
                </a>

                 <ul className='submenu'>
                 <li>
                    {(Puma)&& Puma.map((cs,index)=>(
                        <Link  to={`ProductNsx/${cs}`} key={index}>{cs}</Link>
                    ))}
                      </li>
                  </ul>
            </li>

            <li className='nav-item'>
                <a rel='noReferer noOpen'>
                    <div className='logo'>
                        <img src={menuNewBalance} alt='menuBanlece'/>
                    </div>
                    NewBalance
                    <i className="fa fa-caret-down" />
                </a>

                 <ul className='submenu'>
                 <li>
                    {(NewBalance)&& NewBalance.map((cs,index)=>(
                        <Link  to={`ProductNsx/${cs}`} key={index}>{cs}</Link>
                    ))}
                     </li>
                  </ul>
            </li>
        </ul>
       </nav>
    );
}

export default MenuUser;