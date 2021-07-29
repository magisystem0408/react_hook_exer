import React ,{useState}from 'react';

const FormHook = () => {
    const [name,setName]=useState({firstName:'',lastName:''})
    return (
        <div>
            <div>
                <p>firstname: -{name.firstName}</p>
                <p>lastname: - {name.lastName}</p>
            </div>

            <form action="">
                <input type="text"
                value={name.firstName}
                       // ...のスプレッド構文でオブジェクトを展開したうえで値を入れる
                       onChange={e =>setName({...name,firstName:e.target.value})}
                />

                <input type="text"
                value={name.lastName}
                       onChange={e =>setName({...name,lastName:e.target.value})}
                />

            </form>

        </div>
    );
};

export default FormHook;