import {
  Link,
  useLocation,
} from "react-router-dom";

import type { Product } from "../../types/product";

function ProductCard({ product }: { product: Product }) {

  const location = useLocation();

  return (

    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
      }}
    >

      <img
        src={product.images[0]}
        width="100%"
        height="250"
        style={{
          objectFit: "cover",
        }}
      />

      <h3>
        {product.title
          .split(" ")
          .slice(0, 2)
          .join(" ")}
      </h3>

      {/* <h4>{product.category.name}</h4> */}

      <p>₹ {product.price}</p>

      {/* Preserve URL Params */}
      <Link
        to={`/product/${product.id}${location.search}`}
        style={{
          display: "inline-block",
          marginTop: "12px",
          padding: "10px 18px",
          background: "#111827",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: 600,
          transition: "0.3s",
          textAlign: "center",
        }}

        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "#2563eb";

          e.currentTarget.style.transform =
            "scale(1.05)";
        }}

        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "#111827";

          e.currentTarget.style.transform =
            "scale(1)";
        }}
      >
        View Details →
      </Link>

    </div>
  );
}

export default ProductCard;