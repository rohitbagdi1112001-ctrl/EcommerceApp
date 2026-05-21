import { useCart } from "../context/CartContext";
import type { Cart } from "../types/cart";

function CartS() {

  const cartContext = useCart();

  if (!cartContext) {
    return null;
  }

  const {
    cart,
    removeFromCart,
    totalItems,
    totalPrice,
  } = cartContext;

  return (

    <main
      style={{
        padding: 20,
        maxWidth: 1200,
        margin: "auto",
      }}
    >

      <h1 style={{ textAlign: "center" }}>
        Cart
      </h1>

      <h3
        style={{
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        Total Items: {totalItems}
      </h3>

      {/* Cart Items */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20,
        }}
      >

        {cart.map((item: Cart) => (

          <article
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 15,
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >

            <img
              src={item.images?.[0]}
              alt={item.title}
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />

            <h2>
              {item.title
                .split(" ")
                .slice(0, 2)
                .join(" ")}
            </h2>

            <p>Price: ₹{item.price}</p>

            <p>
              Quantity: {item.quantity}
            </p>

            <p>
              Subtotal: ₹
              {item.price * item.quantity}
            </p>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
              style={{
                width: "100%",
                padding: 12,
                border: "none",
                borderRadius: 8,
                background: "#111827",
                color: "white",
                cursor: "pointer",
              }}
            >
              Remove
            </button>

          </article>
        ))}

      </section>

      {/* Total */}

      <h2
        style={{
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Total Price: ₹{totalPrice}
      </h2>

    </main>
  );
}

export default CartS;