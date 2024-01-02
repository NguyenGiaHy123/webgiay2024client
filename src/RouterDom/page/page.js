import { lazy } from "react"

import Home from "../../Component/Home/Home"

import ActiveEmail from './register/ActiveEmail'
const EnterEmailResetPassword=lazy(()=>import('./Login/EnterEmail/EnterEmailResetPassword'))
const PageRegister=lazy(()=>import('./register/index'))
const PageActiveEmail=lazy(()=>import('./register/ActiveEmail'))
const ForgotPassword=lazy(()=>import('./Login/ForgotPassword/ForgotPassword'))
 const ProductNsx=lazy(()=>import('../../Component/Home/ProductNsx/index'))
 const SearchUi=lazy(()=>import('./Search/Search'))
const PageLogin=lazy(()=>{
    return new Promise(resolve => {
      setTimeout(() => resolve(import('../page/Login/index')), 500);
    })
  })
  const PageHome=lazy(()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>resolve(import('../../Component/Home/Home')),500)
    })
  })
  const Productdetail=lazy(()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>resolve(import('./Product/ProductDetail')),500)
    })
  })

  const CartBuy=lazy(()=>import('./CartBuy/index'))
  const HistoryCart=lazy(()=>import('./historyCart/index'))
  const ProductKey=lazy(()=>import('../../Component/Home/ProductKey/index'))
  const AdminAddProduct=lazy(()=>import('../../RouterDom/page/Admin/Product/index'))
  const ProductListProductAdmin=lazy(()=>import('../../RouterDom/page/Admin/Product/listProduct/index'))
  const ListPurchase=lazy(()=>import('../../RouterDom/page/Admin/Purchase/index'))
  const ListSlider=lazy(()=>import('../../RouterDom/page/Admin/Slider/index'))
  const AddSlider=lazy(()=>import('../../RouterDom/page/Admin/Slider/AddSlider/index'))
  const TranPortList=lazy(()=>import('../../RouterDom/page/Admin/Tranport/index'))
  const AddTranPort=lazy(()=>import('../../RouterDom/page/Admin/Tranport/AddTranport/index'))
  const Satistical=lazy(()=>import('../../RouterDom/page/Admin/Satistical/index'))
  const DetailPushChange=lazy(()=>import('../../RouterDom/page/Admin/Purchase/detailPurchase'))
  const DashBoard=lazy(()=>import('../../RouterDom/page/Admin/Dashboard/DashBoard.tsx'))
  //product trackMark
const allPageUser=[
{
    path:'/sign',
    main:<PageLogin/>
},
{
  path:'/forgotPassword',
  main:<EnterEmailResetPassword/>
 
},
{
  path:'/sign-up',
  main:<PageRegister/>
}
,
{
  path:'/active-email/:accessToken',
  main:<PageActiveEmail/>
  ,
},
{
  path:'/resetPassword/:accessToken',
  main:<ForgotPassword/>

},
{
  path:'/',
  main:<PageHome/>
},
{
  path:'/productDetail/:id',
  main:<Productdetail/>
},
{
  path:'/productNsx/:id',
  main:<ProductNsx/>
},
{
  path:'/cartBuy',
  main:<CartBuy/>
},
{
  path:'/HistoryCart',
  main:<HistoryCart/>
},
{
  path:'/productKey/:keySearch',
  main:<ProductKey/>
},
{
  path:'/search/:keySearch',
  main:<SearchUi/>
},
{
  path:'/admin/addProduct',
  main:<AdminAddProduct/>
}
,
{
  path:'/admin/listProduct',
  main:<ProductListProductAdmin/>
}
,
{
  path:'/admin/listPurchase',
  main:<ListPurchase/>
},
{
  path:'/admin/ListSlider',
  main:<ListSlider/>
},
{
  path:'/admin/AddSlider',
  main:<AddSlider/>
},
{
  path:'/admin/TranPort',
  main:<TranPortList/>
},
{
  path:'/admin/AddTranPort',
  main:<AddTranPort/>
},
{
  path:'/admin/Satistical',
  main:<Satistical/>
}
,
{
  path:'/admin/detailPushChange/:id',
  main:<DetailPushChange/>
},
{
  path:'/admin/TrangChu',
  main:<DashBoard/>
}
]

export default allPageUser

