import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Layout />,
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
