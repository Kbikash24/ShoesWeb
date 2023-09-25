// ProductListingPage.js
import React from "react";
import './AdminPage.css'

const ProductListingPage = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product Listing Page</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
         
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
             <td>
                <table className="size-table">
                  <tbody>
                    <tr>
                    <td>L: {product.sizes && (product.sizes.L || 0)}</td><button onClick={()=>addToCart(product)}>buy</button>
                      <td>M: {product.sizes && (product.sizes.M || 0)}</td ><button  onClick={()=>addToCart(product)}>buy</button>
                      <td>S: {product.sizes &&( product.sizes.S || 0)}</td><button  onClick={()=>addToCart(product)}>buy</button>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListingPage;
