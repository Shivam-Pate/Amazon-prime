import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Loginslice";


const store =configureStore({
    reducer:{
        login : loginReducer,
    }
})
export default store;