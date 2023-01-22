import { Link, useRoutes } from "react-router-dom";

import routes from "./routes/index";
import Routes from "./Routes";
import Home from "./pages/Home/Home";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
