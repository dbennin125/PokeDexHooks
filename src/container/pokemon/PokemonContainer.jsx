import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonByID from '../../components/pokemon/PokemonByID';
import {  usePokemonHook } from '../../hooks/pokemon/PokemonHook';


const PokemonContainer = () => {
  const { id } = useParams();
  const { pokemon } = usePokemonHook(id);

    
  return (
    <>
      <PokemonByID { ...pokemon} />
    </>
  );
};
export default PokemonContainer;
