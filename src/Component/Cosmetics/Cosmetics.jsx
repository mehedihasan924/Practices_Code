import React from 'react';
import {add, multiply} from '../../Utilities/Calculate';
const Cosmetics = () => {

    const First= 100;
    const second=500;
    const Total =add(First,second)
    const Gun =multiply(First,second)
    return (
        <div>

            <h1> Project File {Total}</h1>
            <h1> Project File {Gun}</h1>
        </div>
    );
};

export default Cosmetics;