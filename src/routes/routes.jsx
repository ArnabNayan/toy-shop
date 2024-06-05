import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import ToyDetails from "../Pages/ToyDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import DashBoardLayout from "../layout/DashBoardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Alltoys from "../Pages/Alltoys";
import Addtoy from "../Pages/Addtoy";
import ToyDetailsDashboard from "../Pages/ToyDetailsDashboard";
import EditToy from "../Pages/EditToy";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader:()=>fetch("http://localhost:5000/toys")
        },
        {
            path:"/toys/:id",
            element: <ToyDetails></ToyDetails>,
            loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
            path:"/blog",
            element: <Blog></Blog>
        },
        {
           path:"/about",
           element: <About></About>
        },
        {
            path:"/contact",
            element: <Contact></Contact>
        },
        
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/registration",
            element: <Registration></Registration>
        },
    ]
    },
    {
        path: "dashboard",
      element: <DashBoardLayout></DashBoardLayout>,
      children:[
        {
          path:"",
          element:<PrivateRoute><Dashboard></Dashboard> </PrivateRoute>
        },
        {
            path:"all-toys",
            element:<PrivateRoute><Alltoys></Alltoys> </PrivateRoute>,
         
          },
          {
            path:"all-toys/toydetails/:id",
            element: <PrivateRoute><ToyDetailsDashboard></ToyDetailsDashboard></PrivateRoute> ,
            loader:({params})=>fetch(`http://localhost:5000/toysDatabase/${params.id}`)
        },
          {
            path:"add-toy",
            element:<PrivateRoute><Addtoy></Addtoy> </PrivateRoute>
          },
          {
            path:"all-toys/edit/:id",
            element: <PrivateRoute><EditToy></EditToy></PrivateRoute> ,
            loader:({params})=>fetch(`http://localhost:5000/toysDatabase/${params.id}`)
        },
      ]
    }
  ]);