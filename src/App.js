import { useState } from 'react';
import './App.css'

function App(props) {
  const[name,setName] =useState("Oy ");

  const m = <h1> {props.menu}</h1>
  const click=()=>{
    setName("Moni You just clicked ")
  }
  
  return (
    <>
    <h1>{name}</h1>
    <button onClick={click}>click</button>
    
      
      
    
    
    </>
      );


}

export default App;
