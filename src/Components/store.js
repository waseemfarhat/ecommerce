 import CartSlice from "./Uislice"
 import { configureStore } from "@reduxjs/toolkit"
 const store=configureStore({
    reducer:{
    cart:CartSlice.reducer,
    }
    })


export default store