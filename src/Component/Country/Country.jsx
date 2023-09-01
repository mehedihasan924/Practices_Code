import React from 'react';

// Person Page teke props kora hoise @@@@
const Country = (props) => {
    return (
        <div>
            <h1> Bangladsh {props.name} </h1>
            <p> {props.population}</p>
        </div>
    );
};

export default Country;