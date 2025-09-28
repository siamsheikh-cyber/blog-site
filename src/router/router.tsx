import MainLayout from "@/components/layout/mainLayout";
import Banner from "@/pages/home/banner";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
    },
    {
        path: "/banner",
        Component: Banner
    },

])


export { router }