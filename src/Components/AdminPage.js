// AdminPage.js
import React, { useState } from "react";
import './AdminPage.css'

const AdminPage = ({ addProduct}) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [sizeQuantities, setSizeQuantities] = useState({
    S: 0,
    M: 0,
    L: 0
  });

  const handleSizeQuantityChange = (size, quantity) => {
    // Debugging: Check if the event handler is being called
    console.log(`Size: ${size}, Quantity: ${quantity}`);
    
    setSizeQuantities({
      ...sizeQuantities,
      [size]: parseInt(quantity)
    });
  };

  const handleSubmit = () => {
    // Create a new product object with sizes and quantities
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      sizes: sizeQuantities,
    };

    // Debugging: Check the new product object before adding it
    console.log("New Product:", newProduct);

    // Call the addProduct function to add the new product
    addProduct(newProduct);

    // Clear input fields and reset size quantities
    setProductName("");
    setProductPrice("");
    setSizeQuantities({
      S: 0,
      M: 0,
      L: 0
    });
  };

  return (
    <div className="Container">
      <h2>Admin Page - Add Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Size S Quantity:</label>
        <input
          type="text"
          value={sizeQuantities.S}
          onChange={(e) => handleSizeQuantityChange('S', e.target.value)}
        />
      </div>
      <div>
        <label>Size M Quantity:</label>
        <input
          type="text"
          value={sizeQuantities.M}
          onChange={(e) => handleSizeQuantityChange('M', e.target.value)}
        />
      </div>
      <div>
        <label>Size L Quantity:</label>
        <input
          type="text"
          value={sizeQuantities.L}
          onChange={(e) => handleSizeQuantityChange('L', e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default AdminPage;
