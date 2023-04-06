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
          image: newItem.imageUrl,
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
  }
});

export const cartActions = cartSlices.actions

export default cartSlices.reducer
