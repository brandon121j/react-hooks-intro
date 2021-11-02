import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(async () => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
      {pokemonList.map((item) => {
        return (
          <div key={item.name}>{item.name}</div>
        )
      })}
    </div>
  );
}

export default App;

/*

  useEffect is ComponentDidMount + ComponentDidUpdate + ComponentWillUnmount

*/