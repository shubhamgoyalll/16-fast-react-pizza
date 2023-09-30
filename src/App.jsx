import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

import { loader as menuLoader } from "./features/menu/Menu";
import { loader as orderLoader } from "./features/order/SearchOrder";
import { action as createOrderAction } from "./features/order/CreateOrder";

import Error from "./ui/Error";

//New way of using React Router
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        //Added errorElement here as if Menu api doesn't work it will show Error with other comp.
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        //To connect the action to the route
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
