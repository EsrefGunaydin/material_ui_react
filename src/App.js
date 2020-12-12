import React,{useState, useEffect } from 'react';
import './App.css';

function App() {

  const[counter, setCounter ] = useState(0);


  return (
    <div className="App">

        <button onClick={()=> setCounter(counter + 1)}>+</button>
        <button onClick={()=> setCounter(counter - 1)}>-</button>
        <p>{counter}</p>
    </div>
  );
}

export default App;
