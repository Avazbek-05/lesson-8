import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import SignIn from "../pages/sign-in/signIn";
import SingUp from "../pages/sign-up/singUp";
import VerifyPassword from "../pages/verify-password/verify-password";
import PrivetRoute from "../components/privete-route/priveteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivetRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  { 
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SingUp />,
  },
  {
    path: "/verify-password",
    element: <VerifyPassword />,
  },
]);
