/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PokemonListView from '../../components/pokemon/PokemonListView.jsx';
import { useGetPokemonTypeHook } from '../../hooks/pokemon/getByTypeHook.jsx';
import { useTypeHook } from '../../hooks/pokemon/TypeHook.jsx';

const SelectorContainer = () => {
  const [typeOfPokemon, setTypeOfPokemon] = useState([]);
  const { allPokeTypes } = useTypeHook();
  const {  sortedPokemon, currentPage, totalPages, handleClick } = useGetPokemonTypeHook(typeOfPokemon);
  
  const handleChange = (e) => {
    setTypeOfPokemon({ filter: e.target.value });
  };

  const noPokemon = sortedPokemon.length > 0;
  
  return (
    <>
      <select onChange={handleChange}>
        <option value="">Sort by...</option>
        {
          allPokeTypes
            .map(
              eachTypeOfPokemon => 
                <option key={eachTypeOfPokemon} value={eachTypeOfPokemon}>{eachTypeOfPokemon.charAt(0).toUpperCase() + eachTypeOfPokemon.slice(1)}</option>
            )
        }
      </select>
      {noPokemon && currentPage < totalPages && <button name="next" onClick={handleClick}>Next</button>}
      {noPokemon && currentPage } {noPokemon && <> / </>} {noPokemon && totalPages}
      {noPokemon && currentPage > 1 && <button name="previous" onClick={handleClick}>Previous</button>}
      {sortedPokemon &&  <PokemonListView pokemon={sortedPokemon}/> }
    </>
  );
};

export default SelectorContainer;
