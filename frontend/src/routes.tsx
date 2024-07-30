import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/pages/_layouts/AppLayout.tsx";
import { Dashboard } from "@/pages/dash/Dashboard.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
