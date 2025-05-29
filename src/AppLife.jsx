import { useState } from 'react'
import './App.css'
import Life01 from './Life01.jsx'
import Life02 from './Life02.jsx'

function App() {
    const [flag, setFlag] = useState(true)
    const myclick = () => {
        setFlag(!flag)
    }

    return (
        <div className="App">
            {flag ? <Life01/> : <Life02/>}
            <button onClick={myclick}>toggle</button>
        </div>
    )
}

export default App
