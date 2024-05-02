import {createStore,combineReducers} from 'redux';
import CartReducer from './CartReducer';
import SearchReducer from './SearchReducer';
import CounterReducer from './Counter';


const mainReducer = combineReducers({
    CartReducer: CartReducer,
    SearchReducer:SearchReducer,
    CounterReducer:CounterReducer
   
})

const store = createStore(mainReducer)

export default store;