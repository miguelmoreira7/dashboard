import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'
import { ContextProvider } from './contexts/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ContextProvider>
    <RouterProvider router = {router} />
  </ContextProvider>
)
