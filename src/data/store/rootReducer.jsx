import { combineReducers } from "@reduxjs/toolkit";
import {reducer as cartReducer} from"../slices/cart"
import {reducer as shopReducer} from"../slices/shop"

const rootReducer = combineReducers({
    cart:cartReducer,
    shop:shopReducer
})

export default rootReducer