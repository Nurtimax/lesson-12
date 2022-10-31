import React from "react";
import CartIcon from "../../icons/CartIcon";
import cls from "./HeaderButton.module.css";

const HeaderButton = () => {
  return (
    <button className={cls.button}>
      <span className={cls.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderButton;
