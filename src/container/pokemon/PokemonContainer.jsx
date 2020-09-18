import React from 'react';
import { useParams } from 'react-router-dom';
import DetailedPokemon from '../../components/pokemon/DetailedPokemon';
import {  usePokemonHook } from '../../hooks/pokemon/PokemonHook';


const PokemonContainer = () => {
  const { id } = useParams();
  const { pokemon } = usePokemonHook(id);
  return (
    <>
      <DetailedPokemon { ...pokemon} />
    </>
  );
};
export default PokemonContainer;
