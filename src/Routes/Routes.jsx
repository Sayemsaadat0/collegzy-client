import {createBrowserRouter} from "react-router-dom"; 
import Main from "../Component/Layout/Main";
import Home from "../Component/Page/Home/Home";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element: <Home></Home>
        }
      ]
    },
  ]);


  export default router