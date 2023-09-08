
// Card Item add system @@@
const addToDb= id =>{
   const quantity= localStorage.getItem(id);
   if(quantity){
     console.log('Alredy exists')
     const newQuantity= parseInt(quantity) +1
     localStorage.setItem(id, newQuantity);
   }
   else{
     console.log('new items')
     localStorage.setItem(id,1);
   }
} 
export {addToDb}
