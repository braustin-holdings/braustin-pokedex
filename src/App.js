import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [search, setSearch] = useState('ditto')
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    getPokemon()
  }, [])
  
  const getPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    const json = await response.json()
    setPokemon(json)
  }

  return (
    <div className="App">
      <header className="App-header">
        <pre>{JSON.stringify(pokemon, null, 2)}</pre>
        {/* <SearchFrom/>
        <PokemonDetails/> */}
      </header>
    </div>
  );
}

export default App;
