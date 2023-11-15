import React from 'react';
import ReactDOM from 'react-dom/client';
//Dependences
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "../src/Styles/Style.css"

//los tales
import {ElTal} from "./Routes/N1";
import {ElUseEffect} from "./Routes/N2";
import {App} from './Components/App';
import {ElUseMemo} from "./Routes/N5";
import {Lamemo} from "./Routes/Nnuevo";
import {ElUseRef} from "./Routes/N6";
import {Counter} from "./Routes/N4";
import {ListaTareas} from "./Routes/Reduce";



const router = createBrowserRouter([
    {
        path: "/",
        element: <ElTal/>,
    },
    {
        path: "/effect",
        element: <ElUseEffect/>,
    },
    {
        path: "/context",
        element: <App/>,
    },
    {
        path: "/reduce",
        element: <Counter/>,
    },
    {
        path: "/reducedos",
        element: <ListaTareas/>,
    },
    {
        path: "/memo",
        element: <ElUseMemo/>,
    },
    {
        path: "/memodos",
        element: <Lamemo/>
    },
    {
        path: "/ref",
        element: <ElUseRef/>,
    },
    /*
    {
        path: "/callback",
        element: <ElUseCallback/>,
    },*/
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)