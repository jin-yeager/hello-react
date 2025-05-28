import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gugu from "./Gugu.jsx";
import Holl from "./Holl.jsx";
import Lotto from "./Lotto.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lotto/>
  </StrictMode>,
)
