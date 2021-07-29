import React, {useEffect,useRef} from "react";

// useRef ミュータブルにアクションを起こせるようにする

function FocusInput(props) {

    const inputRef =useRef(null)

    useEffect(()=>{
        inputRef.current.focus()

    },[])

    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    );
}

export default FocusInput;