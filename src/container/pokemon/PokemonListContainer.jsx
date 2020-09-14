/* eslint-disable max-len */
import React from 'react';
import { useListPokemon } from '../../hooks/pokemon/PokemonListHook.jsx';
import PokemonListView from '../../components/pokemon/PokemonListView.jsx';

const PokemonListContainer = () => {

  const { pokemon, loading, currentPage, totalPages, handleClick } = useListPokemon();
  if(loading) return <h1>Loading....</h1>;
  return (
    <>
      {currentPage < totalPages && <button name="next" onClick={handleClick}>Next</button>}
      {currentPage} / {totalPages}
      {currentPage > 1 && <button name="previous" onClick={handleClick}>Previous</button>}
      <PokemonListView pokemon={pokemon}/>
    </>
  );
};

export default PokemonListContainer;
