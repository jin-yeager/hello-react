import {useState} from 'react'


function Count() {
    const [count, setCount] = useState("100")

    const myclick = () => {
        let c = parseInt(count)
        c++
        setCount(c.toString())
    }



    return (
        <>
            {count}
            <button onClick={myclick} >
                INCREASE
            </button>

        </>
    )
}

export default Count
