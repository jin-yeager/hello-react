import {useState} from 'react'
import "./Holl.css"


export default function Holl() {
    let [mine, setMine] = useState(".")
    let [com, setCom] = useState("..")
    let [result, setResult] = useState("...")

    let myclick = () => {
        let rnd = Math.random()
        let _com = ""
        if (rnd > 0.5) {
            _com = "홀"
        } else {
            _com = "짝"
        }

        let _result = ""
        if (mine == _com) {
            _result ="이김"
        } else {
            _result ="짐"
        }
        setCom(_com)
        setResult(_result)

    }


    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td> 나</td>
                    <td>
                        <input type="text" value={mine} onChange={(e) => {
                            setMine(e.target.value)
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td> 컴</td>
                    <td>
                        <input type="text" value={com} readOnly/>
                    </td>
                </tr>
                <tr>
                    <td> 결과</td>
                    <td>
                        <input type="text" value={result} readOnly/>
                    </td>
                </tr>
                <tr>

                    <td colSpan="2">
                        <input type="button" value="게임하기" onClick={myclick}/>
                    </td>
                </tr>

                </tbody>

            </table>

        </>
    )
}

