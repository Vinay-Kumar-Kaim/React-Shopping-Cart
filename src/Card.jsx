import React from 'react'

import "./Card.css"

export default function Card({item,handleClick}) {
    let {title,author,price,img}=item;
  return (
    <div className='Card'>
      <div className='card-img'>
        <img src={img} alt="image" />
      </div>
      <div className="content">
        <p>{title}</p>
        <p>{author}</p>
        <p><b>Rs {price}-/</b></p>
      
        
       

       
        <button className=" btn btn-dark" onClick={()=>handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  )
}
