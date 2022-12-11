import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
               
            }
        ]
    }
])

export default router;