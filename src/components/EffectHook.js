import React,{useState,useEffect} from 'react';

const EffectHook = () => {
    const [count,setCount] =useState(0)

    const [name,setName] =useState('')

    // ページの再レンダリングができる
    //第二引数で発火のタイミングを指定できる

    //countが変更された時にuseEffectが実行されるようになる
    useEffect(()=>{
        document.title =`クリック数：${count}回`
    },[count])

    return (
        <div>
            <p>クリック数: {count}回</p>
            <p>名前：{name}</p>
            <input type="text" value={name}
                   onChange={(e =>setName(e.target.value))}/>
            <button onClick={() =>setCount((count+1))}>カウント＋</button>
        </div>
    );
};

export default EffectHook;