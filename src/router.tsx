import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SidebarLayout from "./layouts/SidebarLayout";
import BaseLayout from "./layouts/BaseLayout";

import SuspenseLoader from "./components/SuspenseLoader";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Applications

const Product = Loader(lazy(() => import("./applications/Procducts")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <SidebarLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="products" replace />,
      },
      // {
      //   path: "history",
      //   element: <History />,
      // },
      {
        path: "products",
        element: <Product />,
      },
      // {
      //   path: "client",
      //   element: <Client />,
      // },
      // {
      //   path: "news",
      //   element: <News />,
      // },
      // {
      //   path: "popup",
      //   element: <PopUp />,
      // },
    ],
  },
];

export default routes;
