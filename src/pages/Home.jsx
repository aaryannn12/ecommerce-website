import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import products from "../data/products";

function Home() {
  return (
    <>
      <Hero />

      <section className="categories">
  <h2>Shop By Categories</h2>

  <div className="category-grid">

    <CategoryCard
      title="Fashion"
      image="https://images.unsplash.com/photo-1445205170230-053b83016050"
    />

    <CategoryCard
      title="Shoes"
      image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    />

    <CategoryCard
      title="Electronics"
      image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    />

    <CategoryCard
      title="Accessories"
      image="https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
    />

  </div>
</section>

      <section className="products">

        <h2>Featured Products</h2>

        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>
    </>
  );
}

export default Home;