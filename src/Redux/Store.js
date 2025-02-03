import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./Reducers/ProductReducer/productReducer";
import { loginReducer } from "./Reducers/LoginReducer/loginReducer";
import { thunk } from "redux-thunk";

var allReducer = combineReducers( {
    productReducer,
    loginReducer
})

export const hiren = legacy_createStore(allReducer,applyMiddleware(thunk))