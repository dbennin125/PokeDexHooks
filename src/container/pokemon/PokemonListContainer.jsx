/* eslint-disable max-len */
import React from 'react';
import { useListPokemon } from '../../hooks/pokemon/PokemonListHook.jsx';
import PokemonListView from '../../components/pokemon/PokemonListView.jsx';


const PokemonListContainer = () => {

  const { pokemon, loading, currentPage, totalPages, handleClick } = useListPokemon();
  if(loading) return <h1>Loading....</h1>;
  
  return (
    <div>
      <section>
        <button disabled={currentPage === 1} name="previous" onClick={handleClick}>&lt;</button>
        {currentPage} / {totalPages}
        <button disabled={currentPage === totalPages} name="next" onClick={handleClick}>&gt;</button>
      </section>
      <PokemonListView pokemon={pokemon}/>
    </div>
  );
};

export default PokemonListContainer;
