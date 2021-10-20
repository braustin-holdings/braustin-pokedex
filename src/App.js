import { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import Grid from './components/grid';
import Sidebar from './components/sidebar';
import Main from './components/main';
import PokemonDetails from './components/pokemonDetails';
import PokemonSearch from './components/pokemonSearch';
import { colors } from './utils/constants' 

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${colors.darkBlue};
    color: white;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Alegreya Sans SC', sans-serif;
  }
`

function App() {
  const [search, setSearch] = useState('ditto')
  const [pokemon, setPokemon] = useState(null)
  const [pokemonList, setPokemonList] = useState(null)

  useEffect(() => {
    if (!pokemonList) {
      setupState()
    } else {
      setupPokemon(pokemonList[0].name)
    }
  }, [pokemonList])
 
  const setupState = async () => {
    
    // Get full Pokemon list
    const pokemonListResult = await getPokemonList()
    setPokemonList(pokemonListResult)
    console.log('Pokemon Result List: ', pokemonListResult)
  }

  const setupPokemon = async (name) => {
    // Set an initial Pokemon
    const pokemonResult = await getPokemon(name)
    console.log('Pokemon Result: ', pokemonResult)
    setPokemon(pokemonResult)    
  }

  const getPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemonResult = await response.json()
    return pokemonResult
  }

  const getPokemonList = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5000`)
    const pokemonListResult = await response.json()
    return pokemonListResult.results
  }
  
  console.log('pokemon list (state): ', pokemonList)

  return (
    <>
      <GlobalStyles />
      <Grid cols="1fr 5fr">
        <Sidebar>
          {pokemonList 
            ? <PokemonSearch pokemonList={pokemonList} setupPokemon={setupPokemon}/> 
            : 'Loading Pokemon List' }
        </Sidebar>
        <Main>
          {pokemon ? (
            <PokemonDetails
              data={pokemon}
            />
          ) : 'no pokemon selected'}
        </Main>
      </Grid>
    </>
  );
}

export default App;
