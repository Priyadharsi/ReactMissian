import { useState } from 'react'
import React from 'react'
import Products from '../Products/Products'

const Category = () => {
    const [name,setName]=useState(productdetails);

    const newobj=()=>{const newdata=[...name].sort((a,b)=>a.Price-b.Price);setName(newdata)}
    const newobj1=()=>{const newdata1=[...name].sort((a,b)=>a.Price-b.Price);setName(newdata1.reverse())}
    const newobj2=()=>{const newdata2=name.filter((el,i)=>el.isPurchased === true);setName(newdata2)}
    const newobj3=()=>{const newdata3=[...name].sort((a,b)=>{
         if (a.name < b.name){
           return -1;
         }
         if (a.name > b.name){
           return 1;
         }
         return 0;
         
       })
       setName(newdata3);
     };
     const newobj4=()=>{const newdata4=[...name].sort((a,b)=>{
       if (a.name > b.name){
         return -1;
       }
       if (a.name < b.name){
         return 1;
       }
       return 0;
       
     })
     setName(newdata4);
   };
  return (
    <div>
        {name.map(
      (n,i)=><div  key={i}><h2>{n.name}</h2><h3>{n.price}</h3></div>)}

    {/* <button onClick={setName}>Click</button> */}
    <button onClick={newobj}>LTH</button>
    <button onClick={newobj1}>HTL</button>
    <button onClick={newobj3}>sortbyASC</button>
    <button onClick={newobj4}>sortbyDSC</button>
    <button onClick={newobj2}>filter</button>
    </div> 
    
  )
}

export default Category