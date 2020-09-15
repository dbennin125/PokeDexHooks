/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonListView from '../../components/pokemon/PokemonListView';
import { usePokemonNameHook } from '../../hooks/pokemon/PokemonNameHook';


const PokeContainer = () => {
  const  { name } = useParams();
  const { pokemonByName, currentPage, totalPages, handleClick } = usePokemonNameHook(name);
  return (
    <>
      {currentPage < totalPages && <button name="next" onClick={handleClick}>Next</button>}
      {currentPage} / {totalPages}
      {currentPage > 1 && <button name="previous" onClick={handleClick}>Previous</button>}
      <PokemonListView pokemon={pokemonByName} />
    </>
  );
};

export default PokeContainer;

