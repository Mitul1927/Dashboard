import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Chat from "../components/Chat"
import Liveclass from "../components/liveclass";
import Myaccount from "../components/myaccount";
import Mycourses from "../components/mycourses";
import Notify from "../components/notify";
import Schedule from "../components/schedule";
import Students from "../components/students";
import Dashboard from "../components/Dashboard";
const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/chat" element={<Chat />} />
      <Route path="/liveclass" element={<Liveclass />} />
      <Route path="/myaccount" element={<Myaccount />} />
      <Route path="/mycourses" element={<Mycourses />} />
      <Route path="/notify" element={<Notify />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/students" element={<Students />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
