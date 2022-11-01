import React from 'react'
import cls from './Card.module.css'

const Card = ({children}) => {
  return (
    <div className={cls.card}>
      {children}
    </div>
  )
}

export default Card
