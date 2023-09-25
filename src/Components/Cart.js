import './Cart.css'; // Import your CSS file

const Cart = ({ cartItems, toggleCart }) => {
  return (
    <div>
      <div className="cart-overlay">
        <div className="cart-content">
          <span onClick={toggleCart} className="close-button">
            &times;
          </span>
          <h2>Your Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <ul>
                  {/* Map over the sizes and quantities within the item */}
                  {Object.entries(item.sizes).map(([size, quantity]) => (
                    <li key={size}>
                      Size {size}: {quantity}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
