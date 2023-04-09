import { createSlice } from "@reduxjs/toolkit";
const getAuth = ()=> (localStorage.getItem("user"));
const initialState = {
    isLogged: getAuth() ? true : false,
    user: getAuth() ? JSON.parse(getAuth()) : null
}
const authSlice = createSlice(
   {
    initialState,
    reducers: {
        setAuth: (state, user)=> {
            state.user = user;
            state.isLogged = true;
        },
        logOut: (state, user) => {
            state.isLogged = false;
            state.user = null;
            localStorage.removeItem('user')
        }
    },
    name: 'auth'
   },
   
)
export const {setAuth, logOut} = authSlice.actions;
export default authSlice.reducer;