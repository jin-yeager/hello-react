import { useState } from 'react'
import './App.css'
import Life01 from './Life01.jsx'
import Life02 from './Life02.jsx'

function App() {
    const [flag, setFlag] = useState(true)
    const toggle = () => setFlag(prev => !prev)

    return (
        <div className="App">
            {flag ? <Life01 /> : <Life02 />}
            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default App
