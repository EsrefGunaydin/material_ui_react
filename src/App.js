import React,{useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import BasicTable from './components/Table';

function App() {

  const[counter, setCounter ] = useState(0);


  return (
    <div className="App">

        <Button onClick={()=> setCounter(counter + 1)} variant="contained" color="primary" m={5}>+</Button>
        <Button onClick={()=> setCounter(counter - 1)} variant="contained" color="secondary" m={5}>-</Button>
        <h1>{counter}</h1>
        <hr/>
        <BasicTable></BasicTable>
    </div>
  );
}

export default App;
