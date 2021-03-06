import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background-color: black;
  background-image: url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${({ pokemonId }) => pokemonId}.png);
  text-align: center;
  padding: 60px 15px;
  & h1 {
    margin: 0;
    font-size: 72px;
  }
`
const Body = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
`

const PokemonDetails = ({ data }) => {
  console.log(data)
  return (
    <>
      <Header pokemonId={data.id}>
        <h1>{data.name}</h1>
      </Header>
      <Body>
        <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${data.name.toLowerCase()}.gif`} width="200"/>
        <ul>
          {data.stats.map(statObj => (
            <li key={statObj.stat.name}>{`${statObj.stat.name}: ${statObj.base_stat}`}</li>

          ))}
        </ul>

      </Body>
    </>
  )

}

export default PokemonDetails