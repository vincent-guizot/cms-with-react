import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productReducer } from './reducers/productReducer'
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    productReducer,
    userReducer
})

const store = createStore(reducer, applyMiddleware(thunk))


export default store