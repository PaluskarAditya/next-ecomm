import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import userReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer
  }
})

export default store;