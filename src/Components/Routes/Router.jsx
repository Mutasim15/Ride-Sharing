import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../LayOuts/Main/Main";
import HomeContainer from "../Pages/Home/HomeContainer";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<HomeContainer></HomeContainer>
        }
      ]
    }
  ])
  export default router;
