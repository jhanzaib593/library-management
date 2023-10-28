import "./App.css";
import { ConfigProvider } from "antd";
import Layout from "./commpunter/layout";
import Signin from "./pages/signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Layout/>,
    children:[
      {
        path: "/",
        element:  <Home />,
      },{
        path: "/sign",
        element:  <Signin />,
      },

    ]

  },

]);

function App() {
  return (
    <div className="wappers">
      <ConfigProvider>
       
          <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
