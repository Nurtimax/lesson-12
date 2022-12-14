import React, { useRef, useState } from "react";
import Input from "../../UI/input/Input";
import cls from "./MealItemForm.module.css";

const MealItemForm = ({ id, onHandler }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountRef = useRef();

  const inputProps = {
    id: `amount-${id}`,
    type: "number",
    step: "1",
    defaultValue: "1",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 5) {
      amountRef.current.value = "1";
      return setAmountIsValid(false);
    }
    amountRef.current.value = "1";
    onHandler(enteredAmount);
    setAmountIsValid(true);
  };

  return (
    <form onSubmit={submitHandler} className={cls.form}>
      <Input ref={amountRef} label="Amount" input={inputProps} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please entered after 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
