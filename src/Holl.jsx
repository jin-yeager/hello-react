import React, { useState } from 'react';

function hollZzak() {
    const [mine, setMine] = useState('');
    const [com, setCom] = useState(0);
    const [result, setResult] = useState('');

    const myclick = () => {
        if (mine !== '홀' && mine !== '짝') {
            setResult('홀 또는 짝을 입력해주세요');
            setCom(0);
            return;
        }
        const num = Math.floor(Math.random() * 10) + 1;
        setCom(num);
        const parity = num % 2 === 0 ? '짝' : '홀';
        setResult(mine === parity ? '이겼습니다!' : '졌습니다!');
    };

    return (
        <table>
            <tbody>
            <tr>
                <td>내 선택</td>
                <td>
                    <input
                        type="text"
                        value={mine}
                        onChange={e => setMine(e.target.value)}
                        placeholder="홀 또는 짝"
                    />
                </td>
            </tr>
            <tr>
                <td>컴퓨터 숫자</td>
                <td>
                    <input
                        type="number"
                        value={com}
                        readOnly
                    />
                </td>
            </tr>
            <tr>
                <td>결과</td>
                <td>
                    <input
                        type="text"
                        value={result}
                        readOnly
                    />
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <button onClick={myclick}>
                        게임하기
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default hollZzak;
