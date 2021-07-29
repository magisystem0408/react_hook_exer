import React,{useState} from 'react';

// 関数コンポーネント

const CounterHook = () => {

    // countがステート値になり
    // setcountが更新するステートになる

    const [count,setCount]=useState(0)

    const incrementCount=()=>{
        setCount(prevCount =>prevCount+1)
    }

    const incrementCountTen =()=>{
        for (let i=0; i<10; i++){

            // 現在のカウントを受け取って新しいカウントに投げる
            setCount(prevCount =>prevCount+1)

        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>カウント</button>
            <button onClick={incrementCountTen}>10カウントする</button>
        </div>
    );
};

export default CounterHook;