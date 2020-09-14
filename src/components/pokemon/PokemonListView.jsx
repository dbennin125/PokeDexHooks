import React from 'react';
import PropTypes from 'prop-types';
import PokemonView from './PokemonView';

// eslint-disable-next-line react/prop-types
const PokemonListView = ({ pokemon }) => {
  const pokemonElements = pokemon.map(poke => (
    <li key={poke.id}>
      <PokemonView { ...poke} />
    </li>
  ));
  return (
    <ul>
      {pokemonElements}     
    </ul>
  );
};

PokemonListView.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    attack: PropTypes.number,
    defense: PropTypes.number,
    speed: PropTypes.number,
    HP: PropTypes.number
  }))
};

export default PokemonListView;
