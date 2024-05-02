

const initialState = {
    StartCounter: 0
};
  
  
const CounterReducer = (state = initialState, action) => {
    
switch (action.type) {
    case 'updateCounter':
        return {
            ...state,
            StartCounter: action.payload 
        }
    default:
        return state;
}
};

export default CounterReducer;
