import {useState} from 'react'
import "./Gugu.css"


function Gugu() {

    let [dan,setDan] = useState(".")
    let [txt,setTxt] = useState("..")

    const myclick = () => {
        let idan = parseInt(dan)
        let _txt = ""

        for (let i = 1; i <= 9; i++) {
            _txt += idan + "*" + i + "=" + (idan * i) + "\n"

        }
        setTxt(_txt)
    }


    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>출력단수</td>
                    <td>
                        <input type="text" value={dan} onChange={(e)=>setDan(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" onClick={myclick} value="출력하기"/>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <textarea rows="13" cols="17" readOnly value={txt} ></textarea>
                    </td>
                </tr>
                </tbody>
            </table>

        </>
    )
}

export default Gugu
