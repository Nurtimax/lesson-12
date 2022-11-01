import React from "react";
import cls from './MealItem.module.css'

const MealItem = ({ name, decription, price }) => {

    const newPrice = price.toFixed(2)

  return (
    <li className={cls.meal}>
      <div>
        <h3>{name}</h3>
        <p className={cls.decription}>{decription}</p>
        <p className={cls.price}>{newPrice}</p>
      </div>
    </li>
  );
};

export default MealItem;
