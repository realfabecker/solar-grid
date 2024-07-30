import "./styles/global.css";

import { RouterProvider } from "react-router-dom";
import { router } from "@/routes.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | solar.grid" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
