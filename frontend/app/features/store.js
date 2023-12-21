import productReducer from "./productSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    products: productReducer
  }
})

export default store;