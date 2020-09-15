import React from 'react';
import PropTypes from 'prop-types';
import PokemonView from './PokemonView';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const PokemonListView = ({ pokemon }) => {
  const pokemonElements = pokemon.map(poke => (
    <Link key={poke.id} to={`/${poke.id}`}>
      <li key={poke.id}>
        <PokemonView { ...poke} />
      </li>
    </Link>
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
    HP: PropTypes.number,
    type1: PropTypes.string
  }))
};

export default PokemonListView;
