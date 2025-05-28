import { useEffect } from 'react';

function Life01() {
    const msg = "LIFE01";

    useEffect(() => {
        console.log("LIFE01 Mounted");

        return () => {
            console.log("LIFE01 Unmounted");
        };
    }, []); // 빈 배열: 마운트/언마운트에만 실행

    return <div>{msg}</div>;
}

export default Life01;