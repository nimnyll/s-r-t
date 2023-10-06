import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [data, setdata] = useState ("")
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=10') 
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    return(
      <div><p></p></div>
    )
}

export default App;
