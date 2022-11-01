import React, { useContext } from "react";
import ChangeColor from "../../../store/ChangeColor";
import { MealStyle } from "../../menu_color/style/Style";
import AvaiLableMeals from "../avail-able-meal/AvaiLabelMeals";
import MealSummery from "../meals-summery/MealSummery";

const Meal = () => {

  const {color, fontColor} = useContext(ChangeColor)

  return (
    <MealStyle isColor={color} isFontColor={fontColor}>
      <MealSummery />
      <AvaiLableMeals/>
    </MealStyle>
  );
};

export default Meal;
