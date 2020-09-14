import React from 'react';
import PropTypes from 'prop-types';

const PokemonView = ({ id, name, image, attack, defense, speed, HP }) => 
  (
    <figure id={id}>
      <img src={image} alt={image}/>
      <figcaption>
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
  HP: PropTypes.number
};

export default PokemonView;
