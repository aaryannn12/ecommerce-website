import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <section className="products">

      <h1>All Products</h1>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Products;