import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // const updateItems = state.items.concat(action.item);
      const updateAmoount = state.totalAmount + action.item.price;
      // state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemHanlder = state.items?.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemHanlder];

      let updatesItems;

      if (existingCartItem) {
        const updateItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };

        updatesItems = [...state.items];
        updatesItems[existingCartItemHanlder] = updateItem;
      } else {
        updatesItems = state.items.concat(action.item);
      }



      return {
        items: updatesItems,
        totalAmount: updateAmoount,
      };

      case 'REMOVE': {
        const existingCartItemIndex = state.items.findIndex((item) => item.id  === action.id)

        const existingItem = state.items[existingCartItemIndex]

        const updatedTotalAmount = state.totalAmount - existingItem.price

        let updatedItems

        if (existingItem.amount === 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id)
        }
        else {
          const updatedItem = {
            ...existingItem,
            amount: existingItem.amount - 1
          }

          updatedItems = [...state.items]
          updatedItems[existingCartItemIndex] = updatedItem
        }

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        }
      }



    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatch({type: 'REMOVE', id: id})
  };

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
