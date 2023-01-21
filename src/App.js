import { Link, useRoutes } from "react-router-dom";

import routes from "./routes/index";
import Routes from "./Routes";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      <header>
        <strong>React Router v6</strong>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
