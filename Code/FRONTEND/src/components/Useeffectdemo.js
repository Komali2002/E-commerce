import {useEffect,useState} from 'react';

function Useeffectdemo()
{
    let[counter1,setCounter1]=useState(0)
    let[counter2,setCounter2]=useState(0)
    useEffect(()=>{
        console.log('use effect executed')
    },[counter1])
    const changeState1=()=>{
        setCounter1(counter1+1)
    }
    const changeState2=()=>{
        setCounter2(counter2+1)
    }
    return(
        <div>
            <h1>Use effect demo</h1>
            <p className="display-1">Counter1:{counter1}</p>
            <p className="display-1">Counter2:{counter2}</p>
          <button className="btn btn-info" onClick={changeState1}>Change1</button>
          <button className="btn btn-secondary" onClick={changeState2}>Change2</button>

        </div>
    )
}
export default Useeffectdemo;