import React,{useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import BasicTable from './components/Table';
import MediaCard from './components/MediaCard';
import { Router, Link }  from '@reach/router'

function App() {

  const[counter, setCounter ] = useState(0);


  return (
    <div className="App">
        <div>
        <Link to="/table">Table</Link>
        <Link to="/card">Card</Link>
        <hr/>
        </div>
        <Button onClick={()=> setCounter(counter + 1)} variant="contained" color="primary" m={5}>+</Button>
        <Button onClick={()=> setCounter(counter > 0 ? counter - 1 : 0)} variant="contained" color="secondary" m={5}>-</Button>
        <h1>{counter}</h1>
      <Router>
        <BasicTable path="/table"></BasicTable>
        <MediaCard path="/card"></MediaCard>
      </Router>
    </div>
  );
}

export default App;
