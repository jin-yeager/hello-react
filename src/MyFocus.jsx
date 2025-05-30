import {useRef, useState} from 'react'


function MyFocus() {
    let myobj = useRef(null)

    const myclick = () => {
        myobj.current.focus()
    }

    return (
        <>
            <input type="text"  ref={myobj} />
            <button onClick={myclick}>focus</button>

        </>
    )
}

export default MyFocus
