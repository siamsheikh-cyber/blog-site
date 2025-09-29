import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from 'react-router'
import { router } from './router/router'
import { ThemeProvider } from './components/darkmode/theme-provider'
import SmokeyCursor from './animation/smokey-cursor'




createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <SmokeyCursor />
    </ThemeProvider>

  </StrictMode>,

)
