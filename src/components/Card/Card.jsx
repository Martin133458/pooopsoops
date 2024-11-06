import React from 'react'
import './Card.css'

const Card = ({name='Пока нет в продаже', img='https://rb.ru/media/upload_tmp/2018/d1.gif'}) => {
  return (
   <>
   
   <div className="card">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>52 отзыва</p>
      <button>Купить</button>
   </div>
   </>
  )
}

export default Card