import React, {useState} from 'react'
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

const Input = styled.input`
    background: ${colors.darkBlue};
    color: white;
    width: 100%;
    padding: 10px;
`

const PokemonSearch = ({pokemonList, setupPokemon}) => {

    const [searchString, setSearchString] = useState('')

    function handleSearch(e) {
        setSearchString(e.target.value)
    }

    return (

        <nav>
        <h2> Search: </h2>
        <Input type="search" value={searchString} onChange={handleSearch} />
        {pokemonList.filter(pokemon => pokemon.name.includes(searchString)).map(pokemon =>
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