import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const person = () => {
    
    const [Countries , setCountries]=useState([]);

        useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
      
    },[])
    return (
        <div>    
        {          
             Countries.map(country => <Country name={country.name.common}  population= {country.population}> </Country> 
                 
          )
        }         
        </div>
    );
};





export default person;