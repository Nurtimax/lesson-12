import React, { useContext, useState } from "react";
import cls from "./MealItem.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import MealItemForm from "../meal_item_form/MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ name, decription, price, id }) => {
  const newPrice = price.toFixed(2);

  const { addItem } = useContext(CartContext);

  const addToCcartHandler = (amount) => {
    addItem({
      id: id,
      amount: amount,
      price: price,
      name: name,
      decription: decription,
    });
  };

  const [count, setCount] = useState(1);
  const [dataPrice, setDataPrice] = useState(newPrice);

  const addCounterHandler = () => {
    setCount(count + 1);
    setDataPrice((prevState) => +prevState + price);
  };
  const removeCounterHandler = () => {
    if (count > 1) {
      setCount(count - 1);
      setDataPrice((prevState) => +prevState - price);
    }
  };

  return (
    <li className={cls.meal}>
      <div>
        <h3>{name}</h3>
        <p className={cls.decription}>{decription}</p>
        <p className={cls.price}>${newPrice}</p>
      </div>
      {/* <div>
        <div className={cls.count_item}>
          <button onClick={addCounterHandler}>
            <AiFillCaretUp />
          </button>
          <p>{count}</p>
          <button onClick={removeCounterHandler}>
            <AiFillCaretDown />
          </button>
        </div>
        <div className={cls.total}>
          <h1>Total: ${Number(dataPrice).toFixed(2)} </h1>
        </div>
      </div> */}
      <div>
        <MealItemForm id={id} onHandler={addToCcartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
