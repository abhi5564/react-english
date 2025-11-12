
import { useState } from 'react';
import './App.css';

function App() {
  const[count, setcount]= useState(0);
  const addvalue=() => {
    setcount(prevcount => prevcount + 1);
    setcount(prevcount => prevcount + 1);
  };
  const subvalue=() => {
    setcount (count-1);
    setcount (count-1);
  }
  
 
  return (
  <>
  <h1> counter app </h1>
  <h2> {count} </h2>
  <button onClick={addvalue}> + </button>
  <button onClick={subvalue}> - </button>

    </>
  );
}

export default App;
