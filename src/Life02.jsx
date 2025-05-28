import { useEffect } from 'react';

function Life02() {
    const msg = "LIFE02";

    useEffect(() => {
        console.log("LIFE02 Mounted");

        return () => {
            console.log("LIFE02 Unmounted");
        };
    }, []); // 빈 배열: 마운트/언마운트에만 실행

    return <div>{msg}</div>;
}

export default Life02;