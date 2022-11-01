import React from 'react'
import Input from '../../UI/input/Input'
import cls from './MealItemForm.module.css'

const MealItemForm = ({id}) => {

    const inputProps = {
        id: `amount-${id}`,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }

  return (
    <form className={cls.form}>
        <Input label="Amount" input={inputProps}/>
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm