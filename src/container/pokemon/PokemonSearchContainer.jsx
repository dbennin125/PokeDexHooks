/* eslint-disable max-len */
import React, { useState } from 'react';
import PokemonListView from '../../components/pokemon/PokemonListView';
import { usePokemonNameHook } from '../../hooks/pokemon/PokemonNameHook';

const PokemonSearchContainer = () => {
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const { pokemonByName, currentPage, totalPages, handleClick } = usePokemonNameHook(searchedPokemon);

  const oneOrMorePokemon = searchedPokemon.length > 0;

  return (
    <>
      <input type="text" placeholder="Search Pokemon by Name" value={searchedPokemon} name="searchedPokemon" onChange={({ target }) => setSearchedPokemon(target.value)} />
      {oneOrMorePokemon && currentPage < totalPages && <button name="next" onClick={handleClick}>Next</button>}
      {oneOrMorePokemon && currentPage} {oneOrMorePokemon && <> / </>}  {oneOrMorePokemon && totalPages}
      {oneOrMorePokemon && currentPage > 1 && <button name="previous" onClick={handleClick}>Previous</button>}
      {searchedPokemon && <PokemonListView pokemon={pokemonByName}/>}
    </>
  );
};

export default PokemonSearchContainer;
