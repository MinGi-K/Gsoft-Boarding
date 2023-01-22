import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Feedback from "./pages/Feedback";
import Resource from "./pages/Resource";
import Status from "./pages/Status";
import Tutorial from "./pages/Tutorial";
import Community from "./pages/Community";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/Community" element={<Community/>}/>
      <Route path="/Feedback" element={<Feedback/>}/>
      <Route path="/Resource" element={<Resource/>}/>
      <Route path="/Status" element={<Status/>}/>
      <Route path="/Tutorial" element={<Tutorial/>}/>
    </BaseRoutes>
  );
}
