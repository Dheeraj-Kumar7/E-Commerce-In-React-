import {configureStore} from "@reduxjs/toolkit";
import addProductSlice from "./addProductSlice.js"
import sendCart from "./sendCart.js";
const MainStore=configureStore({
reducer:{
      addProduct:addProductSlice,
      sendProduct:sendCart
}
})
export default MainStore