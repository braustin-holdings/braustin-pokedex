import { useState, useEffect } from 'react'
import './App.css';
import PokemonDetails from './components/pokemonDetails';
import PokemonSearch from './components/pokemonSearch';

function App() {
  const [search, setSearch] = useState('ditto')
  const [pokemon, setPokemon] = useState(null)
  const [pokemonList, setPokemonList] = useState(null)

  useEffect(() => {
    setupState()
  }, [])
 
  const setupState = async () => {
    
    // Get full Pokemon list
    const pokemonListResult = await getPokemonList()
    setPokemonList(pokemonListResult)
    console.log('Pokemon Result List: ', pokemonListResult)

    // Set an initial Pokemon
    const pokemonResult = await getPokemon(pokemonListResult[0].name)
    console.log('Pokemon Result: ', pokemonResult)
    setPokemon(pokemonResult)
  }

  const getPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemonResult = await response.json()
    return pokemonResult
  }

  const getPokemonList = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const pokemonListResult = await response.json()
    return pokemonListResult.results
  }
  
  console.log('pokemon list (state): ', pokemonList)

  return (
    <div className="App">
      <header className="App-header">
        {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
        {/* <SearchFrom/> */}
        {pokemonList ? <PokemonSearch pokemonList={pokemonList}/> : 'Loading Pokemon List'}
        {pokemon ? <PokemonDetails
          data={pokemon}
        /> : 'no pokemon selected'}
      </header>
    </div>
  );
}

export default App;
