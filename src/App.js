import React, {useState} from 'react';
import './App.css';
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

  const addToCart = (product) => {
    console.log('we are in add cart');
    setCart([...cart, { ...product}]);
  }

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  return (
    <div className="App">
      <header>
        <Button onClick={() => navigateTo(PAGE_CART)} >Go To Cart ({cart.length})</Button>
        <Button  onClick={() => navigateTo(PAGE_PRODUCTS)} >View Products </Button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart}/>}
    </div>
  );
}

export default App;
