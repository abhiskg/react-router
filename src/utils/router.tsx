import { createBrowserRouter } from "react-router-dom";
import Root from "../screens/Root";
import Error from "../screens/Error";
import Home from "../screens/Home";
import About from "../screens/About";
import Work from "../screens/Work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "work",
        element: <Work />,
        loader: async () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
    ],
  },
]);

export default router;
