import {createStore,combineReducers} from 'redux';
import CartReducer from './CartReducer';
import SearchReducer from './SearchReducer';


const mainReducer = combineReducers({
    CartReducer: CartReducer,
    SearchReducer:SearchReducer
   
})

const store = createStore(mainReducer)

export default store;