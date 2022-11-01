import React from "react";
import cls from "./Input.module.css";

const Input = ({label, input}) => {
  return (
    <div className={cls.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
