import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gugu from "./Gugu.jsx";
import Holl from "./Holl.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Holl />
  </StrictMode>,
)
