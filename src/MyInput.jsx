import {useState} from 'react'


function MyInput({value}) {
    console.log("myinput render")

    return (
        <>
            <input type={"text"} value={value}/>
        </>
    )
}

export default MyInput
