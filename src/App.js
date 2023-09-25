import React, { useState } from "react";
import "./App.css";
import AdminPage from "./Components/AdminPage";
import ProductListingPage from './Components/ProductPage';
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";

function App() {
  const[showCart,setShowCart]=useState(false)
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const handleCart=()=>{
    setShowCart(!showCart)
  }

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const addToCart = (products) => {
    setCartItems([...cartItems, products]);
  };

  return (
    <div className="App">
  
      <NavBar toggleCart={handleCart}/>
      <AdminPage addProduct={addProduct} />
      <ProductListingPage products={products} addToCart={addToCart} />
      {showCart && <Cart cartItems={cartItems} toggleCart={handleCart} />}
    </div>
  );
}

export default App;
