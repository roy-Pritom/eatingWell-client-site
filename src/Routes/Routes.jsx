import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Recipe from "../Pages/RecipePage/RecipePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/data/')
        },
        {
          path:'/recipes/:id',
          element:<Recipe></Recipe>,
          loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
        }
       
      ]
    },
  ]);

  export default router;