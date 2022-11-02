import React, { useState } from "react";
import CartProvider from "../../store/CartProvider";
import ChangeColor from "../../store/ChangeColor";
import Cart from "../cart/Cart";
import Header from "../layout/header/Header";
import Meal from "../meals/meal/Meal";
import Menu from "../menu_color/menu/Menu";

const Content = () => {
  const [changeColorItem, setChangeColorItem] = useState("");
  const [changeFontColorItem, setChangeFontColorItem] = useState("");

  const changeColorItemHandler = (data) => {
    setChangeColorItem(data);
  };

  const changeFontColorItemHandler = (data) => {
    setChangeFontColorItem(data);
  };

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <ChangeColor.Provider
        value={{
          color: changeColorItem,
          changeColorFn: changeColorItemHandler,
          fontColor: changeFontColorItem,
          changeFontColorFn: changeFontColorItemHandler,
          openModal: showCartHandler,
          closeModal: hideCartHandler,
        }}
      >
        <CartProvider>
          {cartIsShown && <Cart />}
          <Menu />
          <Header />
          <Meal />
        </CartProvider>
      </ChangeColor.Provider>
    </>
  );
};

export default Content;
