import {useState, useEffect} from 'react'
import './App.css'

function Updn() {
    const ran = useRef(0);
    const [guess, setGuess] = useState('');
    const [lines, setLines] = useState([]);

    useEffect(() => {
        ran.current = Math.floor(Math.random() * 99) + 1;
    }, []);


    const onGuess = () => {
        const num = parseInt(guess, 10);
        if (isNaN(num)) {
            alert('숫자를 입력하세요.');
            return;
        }

        let text;
        if (num === ran) {
            text = '정답!';
            alert('정답!');
        } else if (num < ran) {
            text = '더 큰 수를 입력하세요.';
        } else {
            text = '더 작은 수를 입력하세요.';
        }

        setLines(prevLines =>
            prevLines.concat({guess: num, msg: text})
        );
        setGuess('');

    }

    return (
        <table>
            <tbody>
            <tr>
                <td>맞출 수</td>
                <td>
                    <input
                        type="number"
                        value={guess}
                        onChange={e => setGuess(e.target.value)}
                        placeholder="1~99 사이 숫자"
                    />
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <button onClick={onGuess}>맞춰보기</button>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    {lines.map((result) => (
                        <div>
                            {result.guess} : {result.msg}
                        </div>
                    ))}
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default Updn;
