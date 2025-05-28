import { useState } from 'react';
import './Lotto.css';

function Lotto() {

    // 개별 로또 번호 상태
    let [l1, setL1] = useState('__');
    let [l2, setL2] = useState('__');
    let [l3, setL3] = useState('__');
    let [l4, setL4] = useState('__');
    let [l5, setL5] = useState('__');
    let [l6, setL6] = useState('__');

    const generateLotto = () => {
        // 복사본 생성

        const arr45 = [
            1,2,3,4,5, 6,7,8,9,10,
            11,12,13,14,15, 16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45
        ];

        // 1000번 셔플
        for (let i = 0; i < 1000; i++) {
            const rnd = Math.floor(Math.random() * 45);
            const temp = arr45[0];
            arr45[0] = arr45[rnd];
            arr45[rnd] = temp;
        }

        // inline 버블 정렬: numbers의 처음 6개만 정렬
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5 - i; j++) {
                if (arr45[j] > arr45[j + 1]) {
                    const temp2 = arr45[j];
                    arr45[j] = arr45[j + 1];
                    arr45[j + 1] = temp2;
                }
            }
        }

        // 정렬된 상위 6개를 개별 상태에 설정
        setL1(arr45[0]);
        setL2(arr45[1]);
        setL3(arr45[2]);
        setL4(arr45[3]);
        setL5(arr45[4]);
        setL6(arr45[5]);
    };

    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td><span>{l1}</span></td>
                    <td><span>{l2}</span></td>
                    <td><span>{l3}</span></td>
                    <td><span>{l4}</span></td>
                    <td><span>{l5}</span></td>
                    <td><span>{l6}</span></td>
                </tr>
                <tr>
                    <td colSpan="6">
                        <button onClick={generateLotto}>로또 생성하기</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

export default Lotto;
