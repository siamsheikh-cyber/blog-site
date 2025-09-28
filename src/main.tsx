import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/layout/mainLayout.tsx'
import { createBrowserRouter, RouterProvider, } from 'react-router'
import Banner from './pages/home/banner.tsx'



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




















createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
