import React from 'react'
import styled from 'styled-components'
import {colors} from '../utils/constants'

const Link = styled.a`
    display: block;
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 5px 0;
    &:hover {
        background: ${colors.darkBlue};
        color: ${colors.yellow};
    }
`

const PokemonSearch = ({pokemonList, setupPokemon}) => {
    return (
        <nav>
        {pokemonList.map(pokemon =>
            (
            <Link onClick={() => setupPokemon(pokemon.name)}>
                {pokemon.name}
            </Link>
            )
        )}
        </nav>
        )
}

export default PokemonSearch