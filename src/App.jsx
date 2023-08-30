import {createFactory, useState}from 'react';
import './App.css'
import Image from '../public/vite.svg'


export default function Accordion(){
    return (
   < Count> </Count>
    )
}


function Count(){
 const [count, setCount]= useState(0);


  // count state code shortcut@@@@ 
    const incriensCount=()=> setCount(count+2); 
    const decrisCount=()=>setCount(count-1)


  // count state code@@@@ 
    // const [count, setCount]= useState(0);
    // const incriensCount=()=>{
    //    const newCount=count+1;
    // setCount(newCount); 
    // }
  return(
    <div>
          <h1> Counter:{count} </h1>
          <button  onClick={incriensCount} > Click Me </button>
          <button  onClick={decrisCount} > Click Me </button>
    </div>
  )
}

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



