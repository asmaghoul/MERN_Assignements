import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((pokemons) => {
        return pokemons.data;
      })
      .then((pokemons) => {
        console.log(pokemons);
        setPokemons(pokemons.results);
        console.log(pokemons);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {pokemons.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
