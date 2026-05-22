import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../types/product";
import type { Cart } from "../types/cart";

type CartContextType = {
  cart: Cart[];    
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalItems: number;  
  totalPrice: number; 
};

type CartProviderProps = { 
  children: ReactNode;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {

  // Load Cart From localStorage
  const [cart, setCart] = useState<Cart[]>(() => {

    const storedCart = localStorage.getItem("cart");

    return storedCart
      ? JSON.parse(storedCart)
      : [];
  });

  // Save Cart To localStorage
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // Add To Cart
  const addToCart = (product: Product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    // If product already exists
    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCart(updatedCart);

    } else {

      // Add New Product
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // Remove From Cart
  const removeFromCart = (id: number) => {

    const existingProduct = cart.find(
      (item) => item.id === id
    );

    if (!existingProduct) return;

    // Decrease Quantity
    if (existingProduct.quantity > 1) {

      const updatedCart = cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );

      setCart(updatedCart);

    } else {

      // Remove Completely
      const filteredCart = cart.filter(
        (item) => item.id !== id
      );

      setCart(filteredCart);
    }
  };

  // Total Items
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Total Price
  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
};