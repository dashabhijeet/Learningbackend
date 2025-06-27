import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes,setJokes] = useState([]);

  useEffect(()=> {
    axios.get("/api/jokes")// Standard way to make a request
    // axios.get("http://localhost:3000/api/jokes") // If you are not using proxy in package.json
    // axios.get("https://abhidoom.github.io/backend/api/jokes") // If you are using a hosted backend
    // axios.get("https://abhidoom.github.io/backend/jokes") // If you are using a hosted backend without api prefix
    // axios.get("https://abhidoom.github.io/backend/jokes.json") // If you have a static JSON file hosted
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>
    console.log(error))
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>shuru karo</h1>
        <p>Jokes: {jokes.length}</p>
        {
          jokes.map((joke,index)=>(
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <h4>{joke.content}</h4>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
