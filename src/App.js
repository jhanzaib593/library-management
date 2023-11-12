import "./App.css";
import { ConfigProvider } from "antd";
import Layout from "./commpunter/layout";
import Signin from "./pages/signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import Home from "./pages/home";
import Books from "./pages/home/Books";
import Shelves from "./pages/shelves";
import Authors from "./pages/author";
import { Provider } from "react-redux";
import store from "./store/index";
import ShowBooks from "./pages/home/Books/Showbook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign",
        element: <Signin />,
      },
      {
        path: "/",
        element: <Books />,
      },
      {
        path: "/",
        element: <ShowBooks />,
      },
      {
        path: "/shelves",
        element: <Shelves />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="wappers">
      <ConfigProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
