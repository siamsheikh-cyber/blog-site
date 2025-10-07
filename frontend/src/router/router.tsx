import MainLayout from "@/components/layout/mainLayout";
import About from "@/pages/about/about";
import Evolewtion from "@/pages/auth/evoleushon";

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
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "evolewtion",
                Component: Evolewtion
            }
        ]
    },


])


export { router }