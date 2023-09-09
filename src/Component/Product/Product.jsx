import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/Facebd';
const Product = ( props) => {
    // json file data loade @@@
   const {guid, index,isActive,id}= props.product
    //aki file teke data load system@@@
//    const {name, price,id, desc}= props.product



// cart a item add korar system @@@
const addToCard=(id)=>{
//   console.log("item added", id )
//    localStorage.setItem(id, 1);
     addToDb(id)
}
const item_hendeler=()=> addToCard(id);

  const  removefromCart=id=>{
        removeFromDb (id);
  }

    return (
        <div>
            <div> 
                <h2> Buy Product :{guid}</h2>
                <h3> ID: {id}</h3>
                <h4> Desc: {isActive} </h4> 
                <h4> Price:{index} </h4>

         {/* Card a Item add kora */}
                <button onClick={item_hendeler }> Add to card</button>
                <button onClick={()=>removefromCart(id) } > Remove Item </button>
                {/* <button onClick={()=>addToCard(id)}> Short-cat</button> */}

            </div>
                {/* Nam dore dore call kora hoyese @@@@  */}
                    {/* <h2> Buy Product :{props.Name}</h2>
                    <h4> Price:{props. Price} </h4>
                    <h4> Price:{props.Desc} </h4> */}
        </div>
    );
};

export default Product;