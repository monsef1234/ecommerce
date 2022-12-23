import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: action.payload.id,
          productName: action.payload.productName,
          imgUrl: action.payload.imgUrl,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.price) + Number(existingItem.totalPrice);
      }
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => (total += Number(item.quantity)),
        0
      );
      state.totalAmount = state.cartItems.reduce(
        (total, item) => (total += Number(item.price) * Number(item.quantity)),
        0
      );
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => (total += Number(item.quantity)),
        0
      );
      state.totalAmount = state.cartItems.reduce(
        (total, item) => (total += Number(item.price) * Number(item.quantity)),
        0
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice;
