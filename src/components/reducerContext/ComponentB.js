import React ,{useContext}from 'react';
import {CountContext} from "../../App";

const ComponentB = () => {
    const countContext =useContext(CountContext)
    return (
        <div>
            <button onClick={()=>countContext.countDispatch({type:'increment1',value:1})}>増やす</button>
            <button onClick={()=>countContext.countDispatch({type:'decrement1',value:1})}>減らす</button>
            <button onClick={()=>countContext.countDispatch({type:'reset'})}>リセットする</button>

        </div>
    );
};

export default ComponentB;