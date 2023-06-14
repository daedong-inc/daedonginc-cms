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

// pages
const Login = Loader(lazy(() => import("./pages/Login")));
const Product = Loader(lazy(() => import("./pages/Procducts")));
const CreateProduct = Loader(
  lazy(() => import("./pages/Procducts/CreateProduct"))
);
const Client = Loader(lazy(() => import("./pages/Client")));
const PopUp = Loader(lazy(() => import("./pages/PopUp")));

const routes: RouteObject[] = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "overview",
        element: <Navigate to="/" replace />,
      },
      // {
      //   path: 'status',
      //   children: [
      //     {
      //       path: '',
      //       element: <Navigate to="404" replace />
      //     },
      //     {
      //       path: '404',
      //       element: <Status404 />
      //     },
      //     {
      //       path: '500',
      //       element: <Status500 />
      //     },
      //   ]
      // },
      // {
      //   path: '*',
      //   element: <Status404 />
      // }
    ],
  },
  {
    path: "dashboards",
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
      { path: "products/create", element: <CreateProduct /> },
      {
        path: "clients",
        element: <Client />,
      },
      // {
      //   path: "news",
      //   element: <News />,
      // },
      {
        path: "popups",
        element: <PopUp />,
      },
    ],
  },
];

export default routes;
