import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updateItems = state.items.concat(action.item);
      const updateAmoount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updateItems,
        totalAmount: updateAmoount,
      };

    default:
      break;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {};

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
