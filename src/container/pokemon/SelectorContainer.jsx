/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useTypeHook } from '../../hooks/pokemon/TypeHook.jsx';

const SelectorContainer = () => {
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [filter, setFilter] = useState([]);
  const { pokeType } = useTypeHook();
  
  const handleChange = (e) => {
    setFilter({ filter: e.target.value });
  };
 
  return (
    <>
      <select onChange={handleChange}>
        <option value="">Sort by...</option>
        {
          pokeType.map(
            types => <option key={types} value={types}>{types}</option>
          )
        }
      </select>
      {
        pokemon
          .filter(pokemon => {
            if(!filter) return true;
            return pokemon.type1 === filter;
          })
      }
  
    </>
  );
};

export default SelectorContainer;
