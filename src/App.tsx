import { RouterProvider } from "react-router-dom";
import router from "./utils/router";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
