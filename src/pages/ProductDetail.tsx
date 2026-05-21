import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";
import Button from "../components/common/Button";
import Loader from "../components/common/Loader";
import type { Product } from "../types/product";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const cartContext = useCart();
  if (!cartContext) return null;
  const { addToCart } = cartContext;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <h2>{/* Custom Color */}
<Loader color="crimson" /></h2>;

  return (
    <div>
      <img src={product.images[0]} width="300" />
          <h1>
              {product.title
                .split(" ")
                .slice(0, 2)
                .join(" ")}
            </h1>
      <p>{product.description}</p>
      <h2>₹{product.price}</h2>

      <Button margin= "10px 0 0 0"  onClick={() => addToCart(product)}>
        Add To Cart
      </Button>
      <Button bgColor="crimson" 
        onClick={() =>
          navigate(`/${location.search}`)
        }
      >
        Back To Home
      </Button> 
    </div>
  );
}

export default ProductDetail;