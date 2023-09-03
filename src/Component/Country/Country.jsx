import React from 'react';
import './Country.css'
const Country = (props) => {
    return (

        <div className="count-main-div">
              <div className=' count-div'>
                    <h1>{ props.name}</h1>
                    <img src={props.flags} alt="" />
                    <p>{props.population}</p>
                    <p> {props.region}</p> 
              </div>
        </div>      
    );
};

export default Country;

// import React from 'react';
// import './Country.css'
// // Person Page teke props kora hoise @@@@
// const Country = (props) => {
    
//     return (
//         <div className='main-div-country'>
//             <div className='country-div'>
//                 <h1>{props.name} </h1>             
//               <p>{props.population}</p>
//               <p> {props.region}</p> 
//               <p> {}</p>               
//            </div>
//         </div>
       
//     )
// };

// export default Country;