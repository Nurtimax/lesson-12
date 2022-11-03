import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export default CartContext;
