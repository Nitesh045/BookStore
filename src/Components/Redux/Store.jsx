import {createStore,combineReducers} from 'redux';
import CartReducer from './CartReducer';


const mainReducer = combineReducers({
    CartReducer: CartReducer,
   
})

const store = createStore(mainReducer)

export default store;