import { useState, useEffect } from 'react';

function SideEffect() {
    const [count, setCount] = useState(0);

    const myclick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log(`count가 ${count}로 변경되었습니다.`);
        document.title = `Count is ${count}`;
    }, [count]);

    return (
        <>
            SIDE EFFECT<br />
            {count}
            <button onClick={myclick}>
                CLICK
            </button>
        </>
    );
}

export default SideEffect;
