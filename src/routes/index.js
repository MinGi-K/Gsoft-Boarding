import Home from "../pages/Home/Home";
import Community from "../pages/Community";
import Status from "../pages/Status";
import Feedback from "../pages/Feedback";

const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Community",
    element: <Community />,
  },
  {
    path: "/Status",
    element: <Status />,
  },
  {
    path: "Feedback",
    element: <Feedback />,
  },
];

export default mainRoutes;
