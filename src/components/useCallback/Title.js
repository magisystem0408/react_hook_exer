import React from 'react';

function Title(props) {
    console.log('title component')
    return (
        <div>
            <h1>useCall backhookによる最適化</h1>
        </div>
    );
}

export default React.memo(Title);