import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban,
    Area, Bar, Pie, Financial, Line, ColorPicker, ColorMapping, Editor } from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/ecommerce',
                element: <Ecommerce/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
            {
                path: '/employees',
                element: <Employees/>
            },
            {
                path: '/customers',
                element: <Customers/>
            },
            {
                path: '/kanban',
                element: <Kanban/>
            },
            {
                path: '/editor',
                element: <Editor/>
            },
            {
                path: '/calendar',
                element: <Calendar/>
            },
            {
                path: '/color-picker',
                element: <ColorPicker/>
            },
            {
                path: '/line',
                element: <Line/>
            },
            {
                path: '/area',
                element: <Area/>
            },
            {
                path: '/bar',
                element: <Bar/>
            },
            {
                path: '/pie',
                element: <Pie/>
            },
            {
                path: '/financial',
                element: <Financial/>
            },
            {
                path: '/color-mapping',
                element: <ColorMapping/>
            },
            {
                path: '/pyramid',
                element: <Pyramid/>
            },
            {
                path: '/stacked',
                element: <Stacked/>
            },
        ]
    }
])
