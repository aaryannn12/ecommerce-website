import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">ShopHub</h2>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <button
        className="menu-btn"
        onClick={() => setMenu(!menu)}
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;