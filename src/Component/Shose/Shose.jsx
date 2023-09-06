import React from 'react';
import { multiply } from '../../Utilities/Calculate';
const Shose = () => {

    const First=10;
    const second=20;
    const total=multiply(First,second)
    return (
        <div>
             <h2> This is shose Section  {total}</h2>
        </div>
    );
};

export default Shose;