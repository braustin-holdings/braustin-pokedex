import React from 'react'

const PokemonSearch = ({pokemonList}) => {
    return (
        <ul>
        {pokemonList.map(pokemon =>
            (
            <li>
                {pokemon.name}
            </li>
            )
        )}
        </ul>
        )
}

export default PokemonSearch