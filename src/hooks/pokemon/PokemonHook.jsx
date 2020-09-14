/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { fetchOnePokemon } from '../../services/apiFetches';

export const usePokemonHook = id => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchOnePokemon(id)
      .then(({ _id, attack, hp, defense, speed, base_experience, pokemon, height, weight, type_1, url_image, ability_hidden }) => ({
        id: _id,
        name: pokemon.charAt(0).toUpperCase() + pokemon.slice(1),
        image: url_image,
        attack,
        defense,
        hp,
        speed,
        height,
        weight,
        experience: base_experience,
        hidden_ability: ability_hidden, 
        type: type_1
      }))
      .then(setPokemon)
      .finally(() => setLoading(false));
  }, [id]);

  return {
    pokemon,
    loading
  };
};



