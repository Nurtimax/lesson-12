import React from "react";
import AvaiLableMeals from "../avail-able-meal/AvaiLabelMeals";
import MealSummery from "../meals-summery/MealSummery";

const Meal = () => {
  return (
    <div>
      <MealSummery />
      <AvaiLableMeals/>
    </div>
  );
};

export default Meal;
