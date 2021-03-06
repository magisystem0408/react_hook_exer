import React,{useState,useEffect} from 'react';

const MouseEventEffect = () => {

    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const getMousePosition =e =>{
        setX(e.clientX)
        setY(e.clientY)
    }

    // 初回のみレンダリングしたいときは、第二引数に[]を渡す
    useEffect(()=>{
        console.log('useeffectが呼ばれました')
        window.addEventListener('mousemove',getMousePosition)

        // イベントが外される
        return ()=>{
            window.removeEventListener('mousemove',getMousePosition)
        }
    },[])

    return (
        <div>
            <ul>
                <li>x座標:{x}</li>
                <li>y座標：{y}</li>
            </ul>

        </div>
    );
};

export default MouseEventEffect;