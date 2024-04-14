import { createSlice } from "@reduxjs/toolkit";

const loginslice = createSlice({
    name : 'login',
    initialState : {
        showlogin : false,
    },
    reducers : {
       togglelogin :(state) =>{
         state.showlogin = !state.showlogin;
       },
}
}); 

export const {togglelogin} = loginslice.actions;

export default loginslice.reducer;