import React from 'react';
import PokemonSearchContainer from './PokemonSearchContainer';
import SelectorContainer from './SelectorContainer';

const SortAndSearchContainer = () => {
  return (
    <div>
      <p>Search by name or by type.</p>
      <PokemonSearchContainer />
      <SelectorContainer />
    </div>
  );
};

export default SortAndSearchContainer;
