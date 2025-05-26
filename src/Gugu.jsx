import './Gugu.css'
import {useState} from "react";

function Gugu() {

    const [ dan , setDan] = useState('');
    const [ outText, setOutText ] = useState('');


    function gugu(d){
        let text = '';
        for(let i = 1; i <= 9; i++){
            text += `${d} * ${i} = ${d*i}\n`
        }
        return text;
    }

    const printGugu = () => {
        const num = +dan;
        setOutText(gugu(num));
    }

    return (
        <>
    <table className="gugu-table">
      <tbody>
        <tr>
          <td>출력단수</td>
          <td>
            {/* 양방향 바인딩: value + onChange */}
            <input
              type="number"
              value={dan}
              onChange={e => setDan(e.target.value)}
              placeholder="단수 입력"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            {/* 클릭 핸들링 */}
            <input
              type="button"
              value="출력하기"
              onClick={printGugu}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            {/* 결과 출력 */}
            <textarea
              rows="13"
              cols="17"
              readOnly
              value={outText}
            />
          </td>
        </tr>
      </tbody>
    </table>

</>
)
}

export default Gugu
