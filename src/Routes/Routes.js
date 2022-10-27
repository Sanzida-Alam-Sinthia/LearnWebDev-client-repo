import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/login/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/courses',
                element: <PrivateRoute> <Courses></Courses></PrivateRoute>,
                loader: () => fetch('https://learning-plateform-assignment-server-side.vercel.app/courses')

            },
            {
                path: '/login',
                element: <LogIn></LogIn>
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
                path: '/faqs',
                element: <FAQ></FAQ>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learning-plateform-assignment-server-side.vercel.app/courses/${params.id}`)

            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-plateform-assignment-server-side.vercel.app/courses/${params.id}`)

            },
            {
                path: '*',
                element: <Home></Home>
            }






        ]


    }
])