//usememoは関数の値を保持するという意味

import React,{useState,useMemo} from 'react';

function Check(props) {
    const [countOne,setCountOne] =useState(0)
    const [countTwo,setCountTwo] =useState(0)

    const incrementOne =()=>{
        setCountOne(countOne+1)
    }

    const incrementTwo =()=>{
        setCountTwo(countTwo+2)
    }

    const isEven = useMemo(()=>{
        return countOne %2 ===0
    },[countOne])

    return (
        <div>
            <h1>カウント1:{isEven ?'偶数':'奇数'}</h1>
            <button onClick={incrementOne}>カウント-{countOne}</button>
            <button onClick={incrementTwo}>カウント-{countTwo}</button>
        </div>
    );
}

export default Check;


