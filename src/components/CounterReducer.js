import React,{useReducer}from 'react';

const initalState ={
    firstCounter:0,
    secondCounter:10
}

// 複数のステートを管理するときはスプレット構文を使用する

const reducer =(state,action)=>{
    switch (action.type){
        case 'increment1':
            return {...state,firstCounter: state.firstCounter +action.value}
        case 'decrement1':
            return  {...state,firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state,secondCounter: state.secondCounter +action.value}
        case 'decrement2':
            return {...state,secondCounter: state.secondCounter -action.value}
        case 'reset':
            return initalState
        default:
            return state
    }
}

function CounterReducer(props) {
    const [count,dispatch] =useReducer(reducer,initalState)

    return (
        <div>
            <h1>カウント{count.firstCounter}</h1>
            <h1>カウント{count.secondCounter}</h1>
            <button onClick={()=>dispatch({type:'increment1',value:1})}>増やす</button>
            <button onClick={()=>dispatch({type:'decrement1',value:1})}>減らす</button>
            <button onClick={()=>dispatch({type:'increment2',value:10})}>減らす10</button>
            <button onClick={()=>dispatch({type:'decrement2',value:10})}>減らす10</button>
            <button onClick={()=>dispatch({type:'reset'})}>リセットする</button>
        </div>
    );
}

export default CounterReducer;