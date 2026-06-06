function CategoryCard({ title, image }) {
  return (
    <div
      className="category-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="category-overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;