import React from 'react'
import "./App.css"
export default function Navbar({size,setShow}) {
  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand flipkart" onClick={()=>setShow(true)}>Flipkart</a>


          <span onClick={()=>setShow(false)}><i className="fa-solid fa-cart-shopping fa-lg logo"><sup>{size}</sup></i></span>

        </div>
      </nav>
    </div>
  )
}
