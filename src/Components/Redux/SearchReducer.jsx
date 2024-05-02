

const initialState = {
    searchQuery: ""
};
  
  
const SearchReducer = (state = initialState, action) => {
    
switch (action.type) {
    case 'SET_SEARCH_QUERY':
        return {
            ...state,
            searchQuery: action.payload 
        }
    default:
        return state;
}
};

export default SearchReducer;
