import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";
import TazasReducer from "./reducers/tazas.reducer";
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    tazas: TazasReducer,
    cart: CartReducer,
    auth: AuthReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));