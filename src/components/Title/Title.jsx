import React from 'react'
import './Title.css'

const Title = ({title='Пока нет категории'}) => {
  return (
   <>
   <h2 className='title'>{title}</h2>
   </>
  )
}

export default Title