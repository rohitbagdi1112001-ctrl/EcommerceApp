import {
  Link,
  useLocation,
} from "react-router-dom";

import { useCart } from "../../context/CartContext";

function Navbar() {

  const { totalItems } = useCart();

  const { search } = useLocation();

  const navStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: 500,
  };

  return (

    <nav
      style={{
        background: "#111827",
        padding: "16px 24px",
        position: "sticky",
        top: 0,
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >

        {/* Logo */}

        <Link
          to={`/${search}`}
          style={{
            ...navStyle,
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          ShopKart
        </Link>

        {/* Links */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >

          <Link
            to={`/${search}`}
            style={navStyle}
          >
            Home
          </Link>

          <Link
            to={`/cart${search}`}
            style={{
              ...navStyle,
              background: "white",
              color: "#111827",
              padding: "8px 14px",
              borderRadius: "8px",
            }}
          >
            🛒 Cart ({totalItems})
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;