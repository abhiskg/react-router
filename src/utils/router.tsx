import { createBrowserRouter } from "react-router-dom";
import Root from "../screens/Root";
import Error from "../screens/Error";
import Home from "../screens/Home";
import About from "../screens/About";
import Users from "../screens/Users";
import UserDetails from "../screens/UserDetails";

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
        path: "users",
        element: <Users />,
        loader: async () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "user/:id",
        element: <UserDetails />,
        loader: async ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
    ],
  },
]);

export default router;
