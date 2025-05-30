import {useState} from 'react'
import "./Lotto.css"

function Lotto() {
    let [l1,setL1] = useState("___")
    let [l2,setL2] = useState("__")
    let [l3,setL3] = useState("__")
    let [l4,setL4] = useState("__")
    let [l5,setL5] = useState("__")
    let [l6,setL6] = useState("__")

    const myclick = () => {
        let arr45 = [
            1,2,3,4,5,	6,7,8,9,10,
            11,12,13,14,15,	16,17,18,19,20,
            21,22,23,24,25,	26,27,28,29,30,
            31,32,33,34,35,	36,37,38,39,40,
            41,42,43,44,45
        ];

        for(var i=0;i<1000;i++){
            let rnd = parseInt((Math.random()*45).toString());
            let temp = arr45[0];
            arr45[0]=arr45[rnd];
            arr45[rnd]=temp;
        }

        for(let i=0;i<6;i++){
            for(let j=0;j<6;j++){
                if(arr45[i]<arr45[j]){
                    let a = arr45[i];
                    let b = arr45[j]
                    arr45[i]= b;
                    arr45[j]= a;
                }
            }
        }
        setL1(arr45[0].toString())
        setL2(arr45[1].toString())
        setL3(arr45[2].toString())
        setL4(arr45[3].toString())
        setL5(arr45[4].toString())
        setL6(arr45[5].toString())


    }


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
                        <button onClick={myclick}>로또생성하기</button>
                    </td>
                </tr>

                </tbody>

            </table>
        </>
    )
}

export default Lotto
