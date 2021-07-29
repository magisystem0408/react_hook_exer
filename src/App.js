import React, {useReducer, createContext, useState, useEffect} from "react";

import Counter from "./components/Counter";
import './App.css';
import CounterHook from "./components/CounterHook";
import FormHook from "./components/FormHook";
import ItemHook from "./components/itemHook";
import EffectHook from "./components/EffectHook";
import MouseEventEffect from "./components/MouseEventEffect";
import DataFetch from "./components/DataFetch";
import DataFetchByid from "./components/DadaFetchByid";
import ComponentC from "./components/useContext/ComponentC";
import CounterReducer from "./components/CounterReducer";
import ComponentA from "./components/reducerContext/ComponentA";
import ComponentB from "./components/reducerContext/ComponentB";
import ComponentT from "./components/reducerContext/ComponentT";
import axios from "axios";
import WrapComponent from "./components/useCallback/WrapComponent";
import Check from "./components/useMemo/Check";


export const UserContext = createContext()
export const LanguageContext = createContext()
export const CountContext = createContext()

const initalState = {
    // firstCounter: 0
    loading: true,
    error: '',
    post: {}
}

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'FETCH_SUCCESS':
//             return {
//                 loading: false,
//                 post: action.payload,
//                 error: ''
//             }
//         case 'FETCH_ERROR':
//             return {
//                 loading: false,
//                 post: {},
//                 error: 'データの取得に失敗しました'
//             }
//         default:
//             return state
//     }
// }


// const reducer =(state,action)=>{
//     switch (action.type){
//         case 'increment1':
//             return {...state,firstCounter: state.firstCounter +action.value}
//         case 'decrement1':
//             return  {...state,firstCounter: state.firstCounter - action.value}
//         case 'reset':
//             return initalState
//         default:
//             return state
//     }
// }

function App() {
    // const [user,setUser] =useState({name: 'yamada',age:'32'})
    // const [language,setLanguage]=useState('日本語')

    // const [count,dispatch] =useReducer(reducer,initalState)

    // const [state, dispatch] = useReducer(reducer, initalState)
    //
    // useEffect(() => {
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts/1')
    //         .then(res => {
    //             dispatch({type: 'FETCH_SUCCESS', payload: res.data})
    //         })
    //         .catch(err => {
    //             dispatch({type: 'FETCH_ERROOR'})
    //         })
    // })

    return (
        <div className="App">

            {/*<h1>カウント{count.firstCounter}</h1>*/}
            {/*<Counter />*/}
            {/*  <CounterHook></CounterHook>*/}
            {/*  <FormHook></FormHook>*/}
            {/*  <ItemHook></ItemHook>*/}
            {/*  <EffectHook></EffectHook>*/}
            {/*  <MouseEventEffect></MouseEventEffect>*/}
            {/*  <DataFetch></DataFetch>*/}
            {/*  <DataFetchByid />*/}

            {/*ネストして管理することも可能*/}

            {/*<UserContext.Provider value={user}>*/}
            {/*    <LanguageContext.Provider value={language}>*/}
            {/*        <ComponentC />*/}
            {/*    </LanguageContext.Provider>*/}
            {/*</UserContext.Provider>*/}

            {/*<CounterReducer />*/}

            {/*<CountContext.Provider*/}
            {/*value={{countState: count,countDispatch:dispatch}}>*/}
            {/*    <ComponentA />*/}
            {/*    <ComponentB />*/}
            {/*    <ComponentT />*/}
            {/*</CountContext.Provider>*/}
            {/*<h1>{state.loading ? 'ロード中' : state.post.title}</h1>*/}
            {/*<h2>{state.error ? state.error : null}</h2>*/}
            {/*<WrapComponent />*/}
            <Check />
        </div>
    );
}

export default App;
