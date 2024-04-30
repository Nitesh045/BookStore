const initialState = {
  cart: [],
  cartLength: 0,

  rating: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CART_ITEMS":
      const getCartLength = action.payload.reduce(
        (total, item) => total + item.quantityToBuy,
        0
      );
      return {
        ...state,
        cart: [...action.payload],
        cartLength: getCartLength,
      };
    default:
      return state;
  }
};

export default CartReducer;
