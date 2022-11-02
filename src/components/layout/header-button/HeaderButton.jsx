import React, { useContext } from "react";
import ChangeColor from "../../../store/ChangeColor";
import CartIcon from "../../icons/CartIcon";
import cls from "./HeaderButton.module.css";

const HeaderButton = () => {

  const {openModal} = useContext(ChangeColor)

  return (
    <button className={cls.button} onClick={openModal}>
      <span className={cls.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={cls.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
