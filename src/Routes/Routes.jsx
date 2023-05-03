import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Recipe from "../Pages/RecipePage/RecipePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import TermsCondition from "../Pages/TermsCondition/TermsCondition";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-site-roy-pritom.vercel.app/data/')
      },
      {
        path: '/recipes/:id',
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-site-roy-pritom.vercel.app/data/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: '/terms',
        element: <TermsCondition></TermsCondition>
      }

    ]
  },
]);

export default router;