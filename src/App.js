import { Link, useRoutes } from "react-router-dom";


import Home from "./pages/Home/Home";
import Tutorial from "./pages/Tutorial";
import Feedback from "./pages/Feedback";
import Status from "./pages/Status";
import Community from "./pages/Community";
import Resource from "./pages/Resource";
import mainRoutes from "./routes/index";
import Routes from "./Routes";

function App() {
  const routeResults = useRoutes(mainRoutes)
  return (
    <>
      <Routes>
        <Home />
      </Routes>
    </>
  );
}
export default App;