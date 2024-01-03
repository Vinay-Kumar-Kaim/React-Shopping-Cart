import React, { useEffect, useState } from 'react'
import "./Cart.css"
export default function Cart({ cart, setCart,handleQuantity }) {
  const [price, setPrice] = useState(0);
  const handlePrice=()=>{
    let total=0;
    cart.map((item)=>{
      total+=item.price*item.amount
    })
    setPrice(total)
  }

  useEffect(()=>{
    handlePrice();
  })

  const deleteItem=(id)=>{
    const arr=cart.filter((item)=>item.id!==id);
     setCart(arr)
  }

  return (

    <>
      <h3 className='mt-5 text-success'>Item in your cart are:-</h3>
      {

        cart.map((item) => (
          <div className='Cart mx-5' key={item.id}>
            <div className="cartImg">
              <img src={item.img} alt="" />
            </div>
            <div className="detail">
              <p>{item.title}</p>&nbsp;&nbsp;&nbsp;&nbsp;
              <div><p><b>Rs {item.price}-/</b></p></div>
            </div>
            <div className='buttons'>
              <button onClick={()=>handleQuantity(item,-1)} className="btn btn-outline-success">-1</button>
              &nbsp;
              <button className='btn btn-outline-muted'>Qt. {item.amount}</button>
              &nbsp;
              <button onClick={()=>handleQuantity(item,+1)} className="btn btn-outline-success">+1</button>&nbsp;&nbsp;
              <button className="btn btn-outline-danger" onClick={()=>deleteItem(item.id)}> <i className="fa-solid fa-trash fa-2xl"></i></button>


            </div>


          </div>
        
        
        ))
        
      }
<hr/>
<h6 className='text-warning text-center font-weight-bold'>Total Price {price}</h6>
    </>
  )
}
