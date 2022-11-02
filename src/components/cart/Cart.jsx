import React, { useContext } from "react";
import ChangeColor from "../../store/ChangeColor";
import Modal from "../UI/modal/Modal";
import cls from "./Cart.module.css";

const Cart = () => {
  const { closeModal } = useContext(ChangeColor);

  const cartItems = (
    <ul className={cls["cart-items"]}>
      {[{ id: "c1", name: "Sushi" }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={cls.total}>
        <span>Total Amount</span>
        <span>77</span>
      </div>
      <div className={cls.actions}>
        <button className={cls["button--alt"]} onClick={closeModal}>
          Close
        </button>
        <button className={cls.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
