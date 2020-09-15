/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PokemonView = ({ id, name, image, attack, defense, speed, HP, type1 }) => (
  <figure id={id}>
    <img src={image} alt={image}/>
    <figcaption id={type1}>
            Pokemon: {name}, 
            HP:  {HP},   
            Attack:  {attack}, 
            Defense:  {defense}, 
            Speed:  {speed} 
    </figcaption>
  </figure>
);

PokemonView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  attack: PropTypes.number,
  defense: PropTypes.number,
  speed: PropTypes.number,
  HP: PropTypes.number,
  type1: PropTypes.string
};

export default PokemonView;
