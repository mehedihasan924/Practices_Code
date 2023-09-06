import React from 'react';

const Dial = (props) => {
    return (
        <div style={{margin:"20px", border:"2px solid blue", alignItems:'center' ,padding:'10px'}}>
            <h3> Your Stop count : {props.steps}</h3>
        </div>
    );
};

export default Dial;