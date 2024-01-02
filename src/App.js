import logo from './logo.svg';
import './App.css';
import Menu from './Component/header/Menu';
import { lazy, Suspense, useContext, useEffect, useState } from 'react';
import {UserContext} from './contexts/UserContentext'
import { gapi } from "gapi-script";
import Header from './Component/header';
import { Route,Routes } from 'react-router-dom';
import imga from './imgage/dark1logo.png'
import Login from './RouterDom/page/Login';
import Loading from './loading';
import EnterEmailResetPassword from './RouterDom/page/Login/EnterEmail/EnterEmailResetPassword';
import allPageUser from './RouterDom/page/page';
import ActiveEmail from './RouterDom/page/register/ActiveEmail';
import NotFound from './RouterDom/page/NotFound/NotFound';
import imgagenike from './imgage/shoe.png'
import logow from './imgage/logo.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import StarRatings from 'react-star-ratings'
import AOS from 'aos'
import Footer from './Component/Footer';
import $ from "jquery";



//khi import phai viet hoa chu cai dau tien moi hieu
const PageSingIn = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./RouterDom/page/Login/index")), 2000);
    });
  });
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
   
  }, []);
 
 
   //muon su dung dc display inline bloc the cha phai de block
  const [openMenu,setOpenMenu]=useState(false);
  const stateUser=useContext(UserContext);
  const {state}=stateUser;
  const [token,]=state.token 
  const showPageUser=(allPageUser)=>{
      if(allPageUser.length>0){
        return allPageUser.map((page,index)=>(
            <>
             <Route
            key={index}
            path={page.path}
            element={<Suspense fallback={<Loading/>}>
            {page.main}
          </Suspense>
          }
          />
            </>
        ))
    }}

     
    // localStorage.clear()
   
  return (
    <div className="App">
      <Header setOpenMenu={setOpenMenu}/>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
       <Routes>
         { showPageUser(allPageUser)}
         <Route
          path='/*'
          element={<NotFound/>}
         />
      </Routes>
      <Footer/>
  </div>
    // <div className='list-item-trackline'>
    //   <img src={imga}/>
    //   <img src={imga}/>
    //   <img src={imga}/>
    //   <img src={imga}/>
    //   <img src={imga}/>
    //   <img src={imga}/>
    // </div>
   
    
   
  );
}

export default App;
