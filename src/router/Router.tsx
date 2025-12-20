import Login from "@/(auth)/login/Login";
import Register from "@/(auth)/register/Register";
import HomePage from "@/(user)/pages/home/HomePage";
import NotFoundPage from "@/components/common/error/NotFoundPage";
import AdminLayout from "@/Layout/AdminLayout";
import MainLayout from "@/Layout/MainLayout";
import OwnerLayout from "@/Layout/OwnerLayout";
import { createBrowserRouter } from "react-router";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            }
        ]
    },
      {
        path: "/dashboard",
        element: <AdminLayout />
    },
    {
        path: "/owner" ,
        element: <OwnerLayout />
    },
    {
        path: "/login" ,
        element: <Login />
    },
    {
        path: "/register" ,
        element: <Register />
    }
])