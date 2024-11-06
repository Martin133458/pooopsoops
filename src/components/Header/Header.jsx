import React from 'react'
import './Header.css'
import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
   
    <>
    <Title title='Транспорт'/>
    
    <div className="wrap">
    <Card name='Велосипед'img='https://cdn.stroylandiya.ru/upload/iblock/2bf/8qtng52ch0ocnqox12u2jsyk66lo4ejy.jpg'/>
   <Card name='Мотоцикл' img='https://unicar.kz/wp-content/uploads/2023/05/Kawasaki-Ninja-H2R.jpg'/>
    <Card/>
    <Card/>
    </div>
    
    <Title title='Oдужда'/>

    <div className="wrap">
    <Card name='Велосипед'img='https://cdn.stroylandiya.ru/upload/iblock/2bf/8qtng52ch0ocnqox12u2jsyk66lo4ejy.jpg'/>
   <Card name='Мотоцикл' img='https://unicar.kz/wp-content/uploads/2023/05/Kawasaki-Ninja-H2R.jpg'/>
    <Card/>
    <Card/>
    </div>

    <Title>{Title}</Title>
    </>
    

  )
}

export default Header