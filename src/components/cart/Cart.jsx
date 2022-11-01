import React from "react";
import cls from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={cls["cart-item"]}>
      {[{ id: "c1", name: "Sushi" }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={cls.total}>
        <span>Total Amount</span>
        <span>77</span>
      </div>
      <div className={cls.action}>
        <button className={cls["button--alt"]}>Close</button>
        <button className={cls.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
