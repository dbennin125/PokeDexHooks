/* eslint-disable max-len */
import React from 'react';
import { useTypeHook } from '../../hooks/pokemon/TypeHook.jsx';

const SelectorContainer = () => {
  
  const { pokeType } = useTypeHook();
  console.log(pokeType);
    
  return (
    <h2>yo</h2>
    // <select>
    //   <option value={pokeType.filter(item => item.type)}>{pokeType.filter(item => item.type)}</option>
    // </select>
  );
};

export default SelectorContainer;
