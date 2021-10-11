import React from 'react'

const PokemonDetails = ({data}) => {
  console.log('data', data)
  return (
    <div>
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}/>
      </div>
      <div>
        <h1>{data.name}</h1>
        <ul>
          {data.stats.map(statObj => (
            <li key={statObj.stat.name}>{statObj.stat.name}</li>

          ))}
        </ul>

      </div>
    </div>
  )

}

export default PokemonDetails