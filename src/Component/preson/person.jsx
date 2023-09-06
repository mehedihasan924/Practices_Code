import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './preson.css'



const person = (props) => {    
    const [Countries , setCountries]=useState([]);
        useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))     
    },[])
    return (
        <div  >   
     <h1> {props.Name}  Bangladesh     </h1>
           {/* <div  className='main-div-country'>
           {          
                    Countries.map(country =>
                     <Country                  
                        name={country.name.common} 
                        flags={country.flag.png}
                        population={country.population}
                        region={country.region} 
                        key={country.cca3}
                        >                           
                        </Country>                     
                ) } 
                </div>      */}
        </div>  
    );
};

export default person;



// import React, { useEffect, useState } from 'react';
// import Country from '../Country/Country';
// import './preson.css'

// const person = () => {    
//     const [Countries , setCountries]=useState([]);
//         useEffect(()=>{
//         fetch('https://restcountries.com/v3.1/all')
//         .then(res=>res.json())
//         .then(data=> setCountries(data))     
//     },[])
//     return (
//         <div className='main-div-country' >    
//           <div>
//           {          
//                 Countries.map(country => <Country 
                
//                     name={country.name.common} 
//                     population={country.population}
//                     region={country.region} 
//                     > </Country>                     
//             ) } 
//           </div>
           
         


//         </div>
//     );
// };

// export default person;