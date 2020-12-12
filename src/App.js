import React,{useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {

  const[counter, setCounter ] = useState(0);


  return (
    <div className="App">

        <Button onClick={()=> setCounter(counter + 1)} variant="contained" color="primary">+</Button>
        <Button onClick={()=> setCounter(counter - 1)} variant="contained" color="secondary">-</Button>
        <h2>{counter}</h2>
    </div>
  );
}

export default App;
