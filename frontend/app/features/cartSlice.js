import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    items: 0
  },
  reducers: {
    add: (state, action) => {
      const exist = state.cart.find(el => el.id === action.payload.id);
      if (exist) {
        state.total += exist.price * exist.qty;
        exist.qty += 1;
        state.items += 1;
      } else {
        state.total += action.payload.price * action.payload.qty;
        state.items += Number(action.payload.qty);
        state.cart.push(action.payload);
      }
    },
    remove: (state, action) => {
      const item = state.cart.find(el => el.id === action.payload.id);
      const total = item.price * item.qty;
      state.total -= total;
      state.items -= item.qty;
      state.cart = state.cart.filter(el => el.id !== action.payload.id);
    },
    add_qty: (state, action) => {
      state.total += action.payload.price;
      state.items += Number(1);
      state.cart = state.cart.map(el => el.id === action.payload.id ? { ...el, qty: el.qty + 1 } : el);
    },
    sub_qty: (state, action) => {
      const exist = state.cart.find(el => el.id === action.payload.id);
      if (exist.qty <= 1) {
        state.total -= action.payload.price;
        state.items -= 1;
        state.cart = state.cart.filter(el => el.id !== action.payload.id);
      } else {
        state.total -= action.payload.price;
        state.items -= 1;
        state.cart = state.cart.map(el => el.id === action.payload.id ? { ...el, qty: el.qty - 1 } : el);
      }
    },
    clear: (state) => {
      return { ...state, cart: [], items: 0, total: 0 };
    }
  }
})

export const { add, remove, add_qty, sub_qty, clear } = cartSlice.actions;
export default cartSlice.reducer;