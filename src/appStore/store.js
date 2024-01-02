import { configureStore } from "@reduxjs/toolkit";
import menuSlice from '../featuresReducer/menu/menuSlice'
import userSlice from '../featuresReducer/User/UserSlice';
import productTypeSlice from '../featuresReducer/Product/ProductSlice'
import ProductDisCount from "../featuresReducer/Product/ProductDiscount/productDiscount";
import ProductAll from '../featuresReducer/Product/ProductAll/ProductAllSlice'
import getProductById from '../featuresReducer/Product/ProductOne/ProductOneSlice'
import comomentSlice from '../featuresReducer/Comment/CommentSlide'
import productNsxSlice from '../featuresReducer/Product/ProductNsx/ProductNsx'
import CartReducer from '../featuresReducer/Cart/CartReducer'
import ProductKeySlice  from "../featuresReducer/Product/ProductTypeKey/ProductTypeKeySlice";
import CartAdmin_UserAll from '../featuresReducer/Admin/CartAdmin/CartAdminSlice'
const rootReducer={
   menu: menuSlice,
   user: userSlice,
   productType:productTypeSlice,
   slider:ProductDisCount,
   productAll:ProductAll,
   productId:getProductById,
   comment:comomentSlice,
   productNsx:productNsxSlice,
   cart:CartReducer,
   productKey:ProductKeySlice,
   cartAdmin:CartAdmin_UserAll
}

const store=configureStore({
    reducer:rootReducer
})

export default store