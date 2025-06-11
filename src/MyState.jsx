// MyState.jsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { up, dw, yh, cs } from './store'

function MyState() {
    const { cnt, nm } = useSelector((state) => state.vo)
    const dispatch = useDispatch()

    return (
        <div>
            {cnt}, {nm}
            <br />
            <button onClick={() => dispatch(up())}>UP</button>
            <button onClick={() => dispatch(dw())}>DW</button>
            <button onClick={() => dispatch(yh())}>YH</button>
            <button onClick={() => dispatch(cs())}>CS</button>
        </div>
    )
}

export default MyState
