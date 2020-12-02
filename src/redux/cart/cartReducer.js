import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartAction.js";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.cartItems.find((p) => p.id === action.item.id);

      if (product) {
        // update quantity
        return {
          ...state,
          cartItems: state.cartItems.map((p) => {
            if (product.id === p.id) p.quantity = p.quantity + 1;
            return p;
          }),
        };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          Object.assign(action.item, {
            quantity: 1,
          }),
        ],
      };
    case REMOVE_FROM_CART:
      console.log(action);
      return {
        ...state,
        cartItems: state.cartItems.filter((p) => p.id !== action.id),
      };

    default: {
      return state;
    }
  }
};
