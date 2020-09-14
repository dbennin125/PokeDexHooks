/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const PokemonByID = ({ name, id, height, weight, experience, type, attack, defense, hp, speed, hidden_ability, image, }) => {
  return (
    <div id={id}>
      <h2>{name}</h2>
      <img src={image} alt={image}/>
      <h5>Height: {height} and weight: {weight}</h5>
      <p>{name} has a base experience of {experience} and starting HP of {hp}.
        {name} is a {type} type of Pokemon with attack of {attack}, a defense of {defense}, speed of {speed}.
        {name}&apos;s secret ability is {hidden_ability}. </p>
    </div>
  );
};

PokemonByID.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  type: PropTypes.string,
  experience: PropTypes.number, 
  attack: PropTypes.number,
  defense: PropTypes.number,
  hp: PropTypes.number,
  speed: PropTypes.number,
  hidden_ability: PropTypes.string,
  image: PropTypes.string
    
};

export default PokemonByID;
