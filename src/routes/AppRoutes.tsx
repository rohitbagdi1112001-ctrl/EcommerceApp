import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/common/Loader";

// Lazy Loaded Pages
const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(
  () => import("../pages/ProductDetail")
);
const CartS = lazy(() => import("../pages/Cart"));

function AppRoutes() {
  return (
    <Suspense fallback={<Loader color="crimson" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<CartS />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;