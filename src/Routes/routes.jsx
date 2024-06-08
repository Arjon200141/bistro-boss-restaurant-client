import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Dashboard/Cart/Cart";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path: "menu" , 
          element: <Menu></Menu>,
        },
        {
          path: "shop/:category",
          element: <Shop></Shop>,
        },
        {
          path:"shop",
          element:<Shop></Shop>,
        },
        {
          path:"contact",
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/register",
          element:<Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>,
          loader: () => fetch('http://localhost:5000/carts')
        }
      ]
    }
  ]);