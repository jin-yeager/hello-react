// App.jsx
import React, { useState, useEffect,useRef } from 'react';
import './Strike.css';

function Strike() {
    const comRef = useRef([]);
    const [guess, setGuess] = useState('');
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const arr = [];
        while (arr.length < 3) {
            const ran = Math.floor(Math.random() * 9) + 1;
            if (!arr.includes(ran)) arr.push(ran);
        }
        comRef.current = arr;
        console.log('정답:', comRef.current);
    }, []);

    const myclick = () => {
        if (guess.length !== 3) return;
        const inputArr = guess.split('').map(n => parseInt(n, 10));
        let strike = 0, ball = 0;

        for (let i = 0; i < com.length; i++) {
            if (inputArr[i] === com[i]) strike++;
            else if (com.includes(inputArr[i])) ball++;
        }

        setLogs(prev => [...prev, `${guess} - ${strike}S ${ball}B`]);
        setGuess('');
        if (strike === 3) alert(`${guess} 축하합니다.`);
    };

    return (
        <table border="1">
            <tbody>
            <tr>
                <td>맞출 수</td>
                <td>
                    <input
                        type="text"
                        id="it"
                        value={guess}
                        onChange={e => setGuess(e.target.value)}
                    />
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <input type="button" value="맞춰보기" onClick={myclick} />
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <div id="mydiv">
                        {logs.map((log, i) => (
                            <span key={i}>
                  {log}
                                <br />
                </span>
                        ))}
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default Strike;