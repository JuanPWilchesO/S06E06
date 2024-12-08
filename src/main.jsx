import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import AppRouter from './routes/AppRouter.jsx'
import './index.css'
import 'react-toastify/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
)
