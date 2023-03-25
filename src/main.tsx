import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Restaurant from "./components/Restaurant/Restaurant";
import {RestaurantsPage} from "./components/RestaurantsPage/RestaurantsPage";
import './translate'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "restaurants",
                element: <RestaurantsPage />,
            },
            {
                path: "restaurants/:id",
                element: <Restaurant />,
            },
            {
                path: "admin",
                element: <div>Admin</div>,
            }
        ],

    },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)
