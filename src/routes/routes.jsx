import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
// import Dashboard from "../Pages/Dashboard";
import ToyDetails from "../Pages/ToyDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import DashBoardLayout from "../layout/DashBoardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Alltoys from "../Pages/Alltoys";
import Addtoy from "../Pages/Addtoy";
import ToyDetailsDashboard from "../Pages/ToyDetailsDashboard";
import EditToy from "../Pages/EditToy";
import Shop from "../Pages/Shop";
import Cart from "../components/Dashboard/Cart/Cart";
import AllUsers from "../Pages/AllUsers";
import AdminRoute from "./PrivateRoute/AdminRoute";
import UserHome from "../Pages/UserHome";
import Payment from "../components/Dashboard/Payment/Payment";
import PaymentHistory from "../components/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../components/Dashboard/AdminHome/AdminHome";
import ManageOrders from "../components/Dashboard/ManageOrders/ManageOrders";
import AddReview from "../components/Dashboard/AddReview/AddReview";
import FullArticle from "../Pages/FullArticle";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader:()=>fetch("https://toy-shop-server-1bae.onrender.com/toys")
        },
        {
            path:"/toys/:id",
            element: <ToyDetails></ToyDetails>,
            loader:({params})=>fetch(`https://toy-shop-server-1bae.onrender.com/toys/${params.id}`)
        },
        {
            path:"/blog",
            element: <Blog></Blog>
        },
        {
          path:"/blog/:id",
          element: <FullArticle></FullArticle>
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
          path:"/shop",
          element: <Shop></Shop>,
          loader: () =>fetch("https://toy-shop-server-1bae.onrender.com/toysDatabase")
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
      element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
      children:[
        {
          path:"userHome",
          element:<UserHome></UserHome>
        },
        {
          path:"payment",
          element:<Payment></Payment>
        },
        {
          path:"paymentHistory",
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:"review",
          element:<AddReview></AddReview>
        },
        {
            path:"all-toys",
            element:<Alltoys></Alltoys> ,
         
          },
          {
            path:"all-toys/toydetails/:id",
            element: <ToyDetailsDashboard></ToyDetailsDashboard> ,
            loader:({params})=>fetch(`https://toy-shop-server-1bae.onrender.com/toysDatabase/${params.id}`)
        },
          {
            path:"add-toy",
            element:<AdminRoute><Addtoy></Addtoy></AdminRoute> 
          },
          {
            path:"adminHome",
            element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
          {
            path:"manageorders",
            element:<AdminRoute><ManageOrders></ManageOrders></AdminRoute>
          },
          {
            path:"cart",
            element:<Cart></Cart> 
          },
          {
            path:"all-toys/edit/:id",
            element: <EditToy></EditToy> ,
            loader:({params})=>fetch(`https://toy-shop-server-1bae.onrender.com/toysDatabase/${params.id}`)
        },
        //admin route
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute> 
        }
      ]
    }
  ]);