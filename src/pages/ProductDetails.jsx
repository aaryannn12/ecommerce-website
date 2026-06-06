import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const addToCart = () => {
    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Product Added To Cart");
  };

  return (
    <div className="details">

      <div className="details-card">

        <img
          src={product.image}
          alt={product.name}
        />

        <div className="details-info">

          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <p>
            Premium quality product with
            modern design and excellent
            performance.
          </p>

          <button onClick={addToCart}>
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;