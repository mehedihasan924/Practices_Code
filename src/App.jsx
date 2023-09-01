import { useEffect, useState}from 'react';
import './App.css'
import Preson from './Component/preson/person'
import  Country from './Component/Country/Country'


export default function Accordion(){
    return (
  <Preson> </Preson>
      
//  <Hasan> </Hasan> 
    // {/* //  < Count> </Count>
    // // // <Product> </Product>
    // //  <ExternalUser> </ExternalUser> */}
    // {/* // <Hasan Name={user.name}></Hasan> */}
      
   
    )
}

// function Hasan (){
//   const [countries , setCountries]=useState([]);
//    useEffect( ()=>{
//       fetch('https://restcountries.com/v3.1/all')
//       .then(res=>res.json())
//       .then(data => setCountries(data))

//    }, [])
//   return(
//     <div>
//       <h1>
//         All Countrier API Data load system
//       </h1>
//       <h3> Counntry Number  {countries.length}</h3>
//       {
//         countries.map( country => 
//           <Hasan_hussain  name={country.name.common} population={country.population} area={country.area}> </Hasan_hussain>
          
//           // <> 
//           //     <div>
//           //         <h3> Name: {data.name.common}</h3>      
//           //     </div>         
//           // </>     
//          )
//       }
//     </div>
//   )
// }

// function Hasan_hussain(props){
//   return(
//    <div>
//      <h1>Name: {props.name}</h1>
//     <p> popu: {props.population}</p>
//     <p> Area no : {props.area}</p>
   
//    </div>
 
//   )
// }



// useEffect ar maddome data fetch@@@@
// function ExternalUser(){
//    const [ users, setUser]=useState([])
//    useEffect(()=>{

//      fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res=>res.json())
//       .then(data=> setUser(data))
//    },[]);
//    return(
//     <div>
//           <h1>External User  </h1>    
//         {
//           users.map(user => 
//           // <Hasan Name={user.name}></Hasan>
     
//               <> <li> {user.id } <br />
//                   {user.name} <br />
//                     {user.email} <br />
//                     {}
//                   </li> 
//             </>
//           )
//         }
//     </div>
//    )

// }
// function Hasan(props){
//   return(
//     <div>
//     <h1> Name: {props.name} </h1>
//    </div>
//   )

// }



//   // count state code shortcut Eventhendeler@@@@ 
// function Count(){
//   const [count, setCount]= useState(0);

//       const incriensCount=()=> setCount(count+2); 
//       const decrisCount=()=>setCount(count-1)
//   // count state code@@@@ 
//     // const [count, setCount]= useState(0);
//     // const incriensCount=()=>{
//     //    const newCount=count+1;
//     // setCount(newCount); 
//     // }
//   return(
//     <div>
//           <h1> Counter:{count} </h1>
//           <button  onClick={incriensCount} > Click Me </button>
//           <button  onClick={decrisCount}  > Click Me </button>
//     </div>
//   )
// }


// export default function Accordion(){
//   const products=[
//     { name:'Potatu', price:"450" ,desc: "h8usdc zxci sujsaspo suigsn sixs" },
//     { name:'Banana', price:"450",desc: "h8usdc zxci sujsaspo suigsn sixs"},
//     { name:'Mengo', price:"450kg", desc: "h8usdc zxci sujsaspo suigsn sixs"},
//     { name:'Orenge', price:"300kg", desc: "h8usdc zxci sujsaspo suigsn sixs"},
//   ]

//   return(
//     <div className='show_product'>

//       {/*  ্ডাইনামিক props করার নিয়ম  */}

//     {

//       products.map(ppp=> <Product name={ppp.name} price={ppp.price} desc={ppp.desc} > </Product>)
//     }

// {/* সরাসরি props করার নিয়ম  */}

//         {/* <Product name="T-Shart" imge={Image} parice="$150" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, tempora quaerat praesentium vel voluptate,"></Product>
//         <Product name="T-Shart" imge={Image} parice="$150" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, tempora quaerat praesentium vel voluptate,"></Product>
//         <Product name="T-Shart" imge={Image} parice="$150" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, tempora quaerat praesentium vel voluptate,"></Product>
//         <Product name="T-Shart" imge={Image} parice="$150" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, tempora quaerat praesentium vel voluptate,"></Product> */}
//     </div>
//   )
// }

// function Product( props)
// {
//   return(
//     <div className='product_div'>
//        <img src={props.imge} alt="" />
//        <h2> Name:{props.name} </h2>
//        <h4> Price: {props.price}</h4>
//        <p>  Desc:{props.desc} </p>
//     </div>
//   )
// }




















// const Student={name: "Mehedi  Hasan", age: "25", Calss: "Diploma"}

// export default function Accordion() {
//   const data=[ 'shahadat' ,' sagor', 'Sakib']
//   return (
//     <>
//     <h1> Name:  { Student.name} </h1>
//     <h1> Age:  { Student.age} </h1>
//     <h1> Class:  { Student.Calss} </h1>


// <div className="show_div  main_div">
// {  data.map( hasan=> <Hasan Name={hasan.name}> </Hasan>     )      }

// </div>

//       <h2>Almaty, Kazakhstan</h2>
//       <div className="main_div flex">
//           <Hasan Age_Hasan={"25"} imge= {Image } full_name={data[0]}> </Hasan>
//           <Hasan Age_Hasan={"24"} imge= {Image } full_name={data[2]}> </Hasan>
//           <Hasan Age_Hasan={"12"} imge= {Image } full_name={"Salman "}> </Hasan>
//           <Hasan Age_Hasan={"13"} imge= {Image } full_name={"Marjan  "}> </Hasan> 
//       </div>
//     </>
//   );
// }


// function Hasan(props){

//   return(
//     <>   
//       <div className='card'> 
//           <h1>{props.full_name}</h1>
//           <h3>Age: {props.Age_Hasan}</h3>
//           <p> he is a Network Student</p>
//           <img src={props.imge} alt="" />
//         </div>

   
//     </>
//   )
// }



