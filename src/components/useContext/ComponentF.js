import React, {useContext} from 'react';
import {UserContext,LanguageContext} from "../../App";

const ComponentF = () => {

    // useContextを使用することでよりシンプルに見せることができるようになる

    const user =useContext(UserContext)
    const language =useContext(LanguageContext)

    return (
        <div>
            <div>{user.name}:{language}</div>
            {/*ユーザーデータがステート管理によって*/}
            {/*ComponentFにおいて参照されるようになる*/}
            {/*<UserContext.Consumer>*/}
            {/*    {*/}
            {/*        user =>{*/}
            {/*            return (*/}
            {/*                <LanguageContext.Consumer>*/}
            {/*                    {*/}
            {/*                        language =>{*/}
            {/*                            return <div>{user.name}:{language}</div>*/}
            {/*                        }*/}
            {/*                    }*/}
            {/*                </LanguageContext.Consumer>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    }*/}
            {/*</UserContext.Consumer>*/}

        </div>
    );
};

export default ComponentF;