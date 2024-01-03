

import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Product from './Product'
import Cart from './Cart';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    console.log(item);
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 1000);
      return;
    }

    setCart([...cart, item])

  }
  const handleQuantity = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    
    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }


  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />

      {
        show ? <Product handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleQuantity={handleQuantity} />
      }

      {
        warning && <div className='text-danger mt-5'><h3>Item is already in cart</h3></div>
      }




    </>
  )
}

export default App
