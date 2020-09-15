/* eslint-disable max-len */
import { useEffect, useState } from 'react';

import React from 'react';
import { fetchAllTypes, fetchTypeOf } from '../../services/apiFetches';
import { useListPokemon } from './PokemonListHook';


export const useTypeHook = filter => {
  const [pokeType, setType] = useState([]);
  const [change, setChange] = useState(true);
  const [TypeOfPokemon, setTypeOfPokemon] = useState([]);
 
 
  useEffect(() => {
    fetchAllTypes()
      .then(response => response.map(item => item.type))
      .then(setType);
  }, [change]);
  
  return {
    pokeType
  };
};




