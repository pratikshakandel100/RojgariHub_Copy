import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserView from './pages/Employee/UserView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserView />
  </StrictMode>,
)
