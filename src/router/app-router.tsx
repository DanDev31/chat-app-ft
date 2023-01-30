import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/auth/login.component";
import { Register } from "../components/auth/register.component";
import { Main } from "../components/main/main.component";
import { AuthPage } from "../pages/auth.page";
import { DashboardPage } from "../pages/dashboard.page";
import ErrorPage from "../pages/error.page";


export const router = createBrowserRouter([

  {
    path:"/",
    element: <AuthPage />,
    children: [
      {
        index:true,
        element: <Login />,
      },
      {
        path:"register",
        element: <Register />,
      },
    ],
  },
  {
    path:"chat",
    element:<DashboardPage/>,
    children:[
      {
        index:true,
        element:<Main />
      }
    ]
  },
  {
    errorElement:<ErrorPage />
  }
  
])
