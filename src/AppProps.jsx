import MyProp from "./MyProp.jsx";
import MyInside from "./MyInside.jsx";
import {useRef, useState} from "react";
import MyInput from "./MyInput.jsx";


function App() {
    let obj = useRef(null)
    let [value,setValue] = useState("hello")

    const myclick = () => {
        obj.current.value = "bye"
        setValue("bye")
    }

    return (
        <>
            <input type={"text"} ref={obj} defaultValue="hello" /><br/>
            <MyInput value={value} /><br/>
            <button onClick={myclick} >CHANGE TEXT</button>
        </>
    )
}

export default App
