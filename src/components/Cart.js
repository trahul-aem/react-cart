import React from 'react'

function Cart({cart, removeFromCart}) {
    return (
    <>
        <h1>Cart</h1>
        <div className='products'>
          {cart.map((product, idx) => (
            <div className='product' key={idx}>
                <h3>{product.name}</h3>
                <h4>{product.cost}</h4>
                <img src={product.image} alt={product.name} />
                <button onClick={() => removeFromCart(product)} >Remove Product </button>
            </div>
          ))}
        </div>
      </>   
    )
}

export default Cart
