import {useState} from 'react'


import Life01 from "./Life01.jsx";
import Life02 from "./Life02.jsx";


function App() {
    let [flag_life,setFlagLife] = useState(true)

    const myclick = () => {
        setFlagLife(!flag_life)
    }

    return (
        <>
            {flag_life ? <Life01/> : <Life02/>}
            <button onClick={myclick}>toggle</button>

        </>
    )
}

export default App
