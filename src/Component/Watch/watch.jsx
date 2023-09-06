import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';
import Kata from '../Kata/Kata';
const watch = () => {
    const [steps , setSteps]=useState(0);
    const incrieaseStep=()=>{
         const nextStep=steps+1;
         setSteps(nextStep)
    }

    useEffect(
        ()=>{
            console.log(steps)
        }
        ,[steps])
    return (
        <div style={{ border:'2px solid red', margin:'10px', width:'20%', padding:"20px"}}>
            <h1> Watching TV</h1>
            <p> Steps {steps}</p>
            <button onClick={incrieaseStep}> Click Me </button>
            <Dial steps={steps}></Dial>
            <Kata steps={steps}> </Kata>

        </div>
    );
};

export default watch;