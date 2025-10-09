import MainLayout from "@/components/layout/mainLayout";
import About from "@/pages/about/about";
import Evoleushon from "@/pages/auth/evoleushon";
import Page from "@/pages/auth/page";
import Contact from "@/pages/contact/contact";
import Home from "@/pages/home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "/page",
                element: <Page />,
                children: [
                    {
                        path: "evoleushon",
                        element: <Evoleushon />,
                    },
                ],
            },
        ],
    },
]);

export { router };
