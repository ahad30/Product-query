import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../components/common/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AllArtCraftItem from "../Pages/AllArtCraftItem/AllArtCraftItem";
// import AddArtCarftItem from "../Pages/AddArtCarftItem/AddArtCarftItem";
import ArtCraftDetails from "../Pages/Home/ArtCraftDetails/ArtCraftDetails";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import ArtCraftCategoryDetails from "../Pages/Home/ArtCraftCategoryDetails/ArtCraftCategoryDetails";
import AddQuery from "../Pages/AddQuery/AddQuery";
import MyQueryList from "../Pages/MyQueryList/MyQueryList";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () =>
         fetch('https://b9a10-server-side-ahad30.vercel.app/artCraft')
      },

      {
        path: "/allArt&Craft",
        element:  <AllArtCraftItem/>,
        loader: () => 
        fetch('https://b9a10-server-side-ahad30.vercel.app/artCraft')
      },

      {
        path: "/artCraftDetails/:id",
        element: 
       <PrivateRoute>
        <ArtCraftDetails/>
       </PrivateRoute>,
        loader: ({ params }) =>
         fetch(`https://b9a10-server-side-ahad30.vercel.app/artCraft/${params.id}`)
      },
      {

        path: "/artCraftSubcategoryDetails/:id",
        element: 
       <PrivateRoute>
        <ArtCraftCategoryDetails/>
       </PrivateRoute>,
        loader: ({ params }) =>
         fetch(`https://b9a10-server-side-ahad30.vercel.app/artCraftSubcategory/${params.id}`)
      },



      {
        path: "/addQuery",
        element: 
       <PrivateRoute>
         <AddQuery/>
       </PrivateRoute>
      },
      {
        path: "/myQueryList",
        element: 
       <PrivateRoute>
         <MyQueryList/>
       </PrivateRoute>
      },

      {
        path: "/updateItem/:id",
        element: 
       <PrivateRoute>
         <UpdateItem/>
       </PrivateRoute>,
        loader: ({ params }) =>
         fetch(`https://b9a10-server-side-ahad30.vercel.app/artCraft/${params.id}`)
      },

     

      {
        path: "/login",
        element: <Login/>,
      },

      {
        path: "/register",
        element: <Register/>,
      },

      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/admin",
        element: <div>Admin</div>,
      },
    ],
  },
]);
