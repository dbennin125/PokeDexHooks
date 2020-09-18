import React from 'react';
import PokemonSearchContainer from './PokemonSearchContainer';
import SelectorContainer from './SelectorContainer';


const SortAndSearchContainer = () => {
  return (
    <>
      <SelectorContainer />
      <p>or search by name:</p>
      <PokemonSearchContainer />
    </>
  );
};


export default SortAndSearchContainer;
