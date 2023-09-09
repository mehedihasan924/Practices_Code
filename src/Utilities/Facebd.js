// Card Item add system @@@

const addToDb= id =>{

    let shopingCart;
   
//Get the sopping cart from local stores
  const storedCart =localStorage.getItem('shopping-Cart')
        if(storedCart){
          shopingCart=JSON.parse(storedCart)
        }
       else{
          shopingCart={};
       }

    // add Cart Quantity @@@
   const quantity= shopingCart[id];
   if(quantity){
     const newQuantity= quantity +1;
     shopingCart[id]=newQuantity;
    //  localStorage.setItem(id, newQuantity);
   }
   else{
    shopingCart[id]=1;
    //  console.log('new items')
    //  localStorage.setItem(id,1);
   }
   localStorage.setItem('shopping-Cart', JSON.stringify(shopingCart) )
} 
const removeFromDb = id=>{
    const storedCart=localStorage.getItem('shopping-Cart');
    if(storedCart){
      const shopingCart=JSON.parse(storedCart);
      if(id in shopingCart){
         delete shopingCart[id];
        localStorage.setItem('shopping-Cart', JSON.stringify(shopingCart) )

      }
    }

}
export {addToDb ,removeFromDb }
