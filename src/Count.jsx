import { useState } from 'react'
import './App.css'

function Morning() {
  const [count, setCount] = useState(+ "100")

  const myclick = () => {
    setCount(count + 1);
  }

  return (
    <>
        {count}
        <button onClick={myclick}>
            Increase
        </button>

    </>
  )
}

export default Morning
