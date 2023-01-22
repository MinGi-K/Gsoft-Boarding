import Home from "../components/Home";
import Product from "../components/Product";
import Products from "../components/Products";

const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ":productId",
        element: <Product />,
      },
    ],
  },
];

export default mainRoutes;
