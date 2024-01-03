import React from 'react'
import list from "./data"
import Card from './Card.jsx'
import "./Product.css"
export default function Product({handleClick}) {
  return (
    <div className='Product'>
      {
        list.map((item)=>(
            <Card item={item} key={item.id} handleClick={handleClick}/>
        ))
      }
    </div>
  )
}
