import MainLayout from "@/components/layout/mainLayout";
import About from "@/pages/about/about";
import Blog from "@/pages/blog/blog";
import Contact from "@/pages/contact/contact";
import Home from "@/pages/home";


import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/blog",
                Component: Blog
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
        ]
    },


])


export { router }