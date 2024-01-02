import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {getMenu} from '../../../featuresReducer/menu/pathAPI'
import MenuUser from './menuUser';
import MenuAdmin from './menuAdmin';
import './index.css'
Menu.propTypes = {
    
};

function Menu(props) {
    
    const isAdmin=useSelector(state=>state.user.isAdmin);
    const listMenu=useSelector(state=>state.menu);
    const {token,openMenu,setOpenMenu}=props;
    const tokenUser=localStorage.getItem('tokenUser');
   
    const onClickCloseMenu=()=>{
        setOpenMenu(false)
    }
    const dispatch=useDispatch();
    const actionGetMenu=()=>{
        dispatch(getMenu())
    }
    useEffect(()=>{
        actionGetMenu();
    },[])

    useEffect(()=>{
    

  const allListMenuAdmin=document.querySelectorAll(".group_menu_page_addMin .menu .menu_item");
 
   allListMenuAdmin.forEach(element=>{
      if(element){
         element.addEventListener("click",(e)=>{
            element.classList.toggle("open");
         })
      }
 })
       
    },[isAdmin])


    useEffect(()=>{
    
        const allListMenu=document.querySelectorAll(".nav-item");
        console.log(allListMenu)
        allListMenu.forEach(element=>{
        if(element){
           element.addEventListener("click",(e)=>{
            const MenuParent=e.target.parentElement;
            MenuParent.classList.toggle("open")
           })
        }
        })
          },[!isAdmin])
      

    return (
       <>
       <div className={`ground-menu ${openMenu?'open':''}`}>
        {
            (isAdmin&&tokenUser)?<MenuAdmin openMenuAdmin={openMenu}/>:(<MenuUser  listMenuUser={listMenu.listMenu}/>)
        }
       </div>
       {openMenu&&<div className='active-before' onClick={onClickCloseMenu}></div>} 
       </>
    );
}

export default Menu;