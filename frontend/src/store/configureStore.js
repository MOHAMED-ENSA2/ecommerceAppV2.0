import { createStore,combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk"
import  { composeWithDevTools } from 'redux-devtools-extension'

import cart from './cart'
import promotions from './promotions'
import products from "./products"
import currentUser from './currentUser'
import categories from "./categories";
import search from "./search";
import users from "./users"
import listOfCategories from "./listOfCategories"
import ordres from "./ordres"

const initialState = []
const reducers = combineReducers({
    cart , promotions , currentUser  , products , categories , search , users , listOfCategories , ordres
})
const middlewares = [thunk]


const store = createStore(reducers, initialState , composeWithDevTools(applyMiddleware(...middlewares)) )

    
export default store