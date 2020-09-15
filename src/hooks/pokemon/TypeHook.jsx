/* eslint-disable max-len */
import { useEffect, useState } from 'react';

import React from 'react';
import { fetchAllTypes } from '../../services/apiFetches';
import { useListPokemon } from './PokemonListHook';


export const useTypeHook = () => {
  const [pokeType, setType] = useState([]);
  const [change, setChange] = useState(true);
  const { pokemon } = useListPokemon();
 
  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = (
  //       fetchAllTypes()
  //         .then(results => results.map(result => setType(result.type)))
  //     );
  //     const sortProperty = types[type];
  //     const sorted = [...pokemon].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setChange(sorted);
  //   };
  //   sortArray(change);
  // }, [id]);
  
  return {
    pokeType
  };
};




