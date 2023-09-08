import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shose.css'
const Shose = () => {
    //aki file teke data load system@@@
   const products=[
    {
         id:1, name:'Shose', price:'650', desc:'hg87 swuyw aiuq qabuqsx'
    },
    {
        id:2, name:'Shart', price:'650' ,desc:'hg87 swuyw aiuq qabuqsx'
    },
    {
        id:3, name:'Pant', price:'650' ,desc:'hg87 swuyw aiuq qabuqsx'
    },
    {
        id:4, name:'Gengi', price:'650', desc:'hg87 swuyw aiuq qabuqsx'
    }
   ]
return (
    < >
        <h1> All Product </h1>
        <div  className='product_div'>        
            {
              products.map(product => <Product 
                     key={product.id}
                     product={product}
                     ></Product>                             
                    ) 
                 }             
        </div>         
  </>

// json file data loade @@@
        // const [Cosmetics, setCosmetics]=useState([])
        // useEffect(()=>{
        //     fetch('/public/data.json')
        //     .then(res=>res.json())
        //     .then( data => setCosmetics(data))

        // }, [])



//     return (
//     < >
//         <h1> All Product </h1>
//         <div  className='product_div'>
//                 {
//                  Cosmetics.map(product => <Product 
//                      key={product._id}
//                      product={product}
//                      ></Product>                             
//                     ) 
//                  }
//         </div>
      
           
//   </>
    
    );
};

export default Shose;