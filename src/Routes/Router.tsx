import { createBrowserRouter } from "react-router-dom";

import Layout from "../Components/Blocks/Layout"
import Landing from "../Pages/Landing";

export const MainRouter =createBrowserRouter([{
    path:"/" ,
    element:<Layout/>,
    children:[
        {
    index:true,
    element: <Landing />,
    }
],
}])