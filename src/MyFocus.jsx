import React, { useRef } from 'react';

export default function MyFocus() {
    const inputFocus = useRef(null);

    const myclick = () => {
        inputFocus.current?.focus();
    };

    return (
        <>
            <input ref={inputFocus} type="text" />
            <button onClick={myclick}>FOCUS</button>
        </>
    );
}

