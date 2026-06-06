import { useEffect, useState } from "react";

function Cart() {

  const [cartItems, setCartItems] =
    useState([]);

  useEffect(() => {
    const cart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    setCartItems(cart);
  }, []);

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>No Products Added</h2>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="cart-item"
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

          </div>
        ))
      )}

    </div>
  );
}

<button
onClick={()=>{
const updated =
cartItems.filter(
(_,i)=>i!==index
);

setCartItems(updated);

localStorage.setItem(
"cart",
JSON.stringify(updated)
);
}}
>
Remove
</button>

export default Cart;