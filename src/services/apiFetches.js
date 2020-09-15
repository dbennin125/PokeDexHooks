/* eslint-disable max-len */
import { get } from './request';

export const fetchSearchedPokemon = (search = '') => {
  return get(`?pokemon=${search}`);
};

export const getAllPokemon = (page) => {
  return get(`?page=${page}&perPage=50`);
};

export const fetchOnePokemon = id => {
  return get(`/${id}`);
};

export const fetchAllTypes = () => {
  return get('/types');
};

export const fetchByName = (name, page) => {
  return get(`?pokemon=${name}&page=${page}&perPage=50`);
};
