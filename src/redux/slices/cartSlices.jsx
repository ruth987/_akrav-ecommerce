import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,

}

const cartSlices = createSlice({
  name: 'cart',

  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      state.totalQuantity += 1;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,

        })
      }
      else {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalAmount = state.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
      
      console.log(state.cartItems);
      console.log(state.totalQuantity);
      console.log(newItem);

    }
    ,
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      state.totalQuantity -= existingItem.quantity;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
      else {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalAmount = state.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
      console.log(state.cartItems);
      console.log(state.totalQuantity);
    }
  }
});


export const cartActions = cartSlices.actions

export default cartSlices.reducer
