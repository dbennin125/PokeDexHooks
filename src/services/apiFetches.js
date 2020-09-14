/* eslint-disable max-len */
import { get } from './request';

export const fetchSearchedPokemon = (search = '') => {
  return get(`?pokemon=${search}`);
};

export const getAllPokemon = (page) => {
  return get(`?page=${page}&perPage=50`);
};

export const fetchPokemonByID = (id) => {
  return get(`/${id}`);
};
