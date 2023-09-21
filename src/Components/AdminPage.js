import React, { useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    price: "",
    selectedSize: "Size",
  });

  const [productList, setProductList] = useState([]);
  const [sizeCounts, setSizeCounts] = useState({ L: 0, M: 0, S: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const existingProductIndex = productList.findIndex(
      (product) => product.productName === productData.productName
    );

    if (existingProductIndex !== -1) {
      const updatedProductList = [...productList];
      updatedProductList[existingProductIndex].selectedSize =
        productData.selectedSize;
      setProductList(updatedProductList);
    } else {
      setProductList([...productList, productData]);
    }

    // Update the size counts
    const newSizeCounts = { ...sizeCounts };
    newSizeCounts[productData.selectedSize]++;
    setSizeCounts(newSizeCounts);

    setProductData({
      productName: "",
      description: "",
      price: "",
      selectedSize: "Size",
    });
  };

  return (
    <div className="container">
      <h1>ADMIN PAGE</h1>
      <form className="form" onSubmit={handleAddProduct}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={productData.productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={productData.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleInputChange}
        />
        <select
          name="selectedSize"
          value={productData.selectedSize}
          onChange={handleInputChange}
        >
          <option value="Size">Size</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="S">S</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
      <div>
        <h2>Product List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th colSpan="3">Quantity Available <tr className="sizes">
              <th className="sz">L</th>
              <th className="sz">M</th>
              <th className="sz">S</th>
            </tr></th>
            </tr>
            
          </thead>
          <tbody>
            {productList.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{sizeCounts["L"]}</td>
                <td>{sizeCounts["M"]}</td>
                <td>{sizeCounts["S"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
