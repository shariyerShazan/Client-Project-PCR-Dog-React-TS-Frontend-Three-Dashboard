import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Router } from './router/Router'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider  router={Router}/>
        <ToastContainer />
  </StrictMode>,
)
