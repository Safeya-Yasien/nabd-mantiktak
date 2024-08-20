import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Home, LastNews } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "last-news",
        element: <LastNews />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
