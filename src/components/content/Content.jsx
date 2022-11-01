import React, { useState } from "react";
import ChangeColor from "../../store/ChangeColor";
import Header from "../layout/header/Header";
import Meal from "../meals/meal/Meal";
import Menu from "../menu_color/menu/Menu";

const Content = () => {
  const [changeColorItem, setChangeColorItem] = useState("");
  const [changeFontColorItem, setChangeFontColorItem] = useState('')

  const changeColorItemHandler = (data) => {
    setChangeColorItem(data);
  };

  const changeFontColorItemHandler = (data) => {
    setChangeFontColorItem(data)
  }

  return (
    <>
      <ChangeColor.Provider
        value={{
          color: changeColorItem,
          changeColorFn: changeColorItemHandler,
          fontColor: changeFontColorItem,
          changeFontColorFn: changeFontColorItemHandler
        }}
      >
        <Menu />
        <Header />
        <Meal />
      </ChangeColor.Provider>
    </>
  );
};

export default Content;
