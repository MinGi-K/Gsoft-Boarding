import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} />
      </Route>
    </BaseRoutes>
  );
}
