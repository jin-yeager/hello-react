import {useState} from 'react'


function MyInside(props) {


    return (
        <>
            MYINSIDE START <br/>
            {props.children} <br/>
            MYINSIDE END <br/>
        </>
    )
}

export default MyInside
