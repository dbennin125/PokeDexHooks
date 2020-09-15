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

// export const fetchTypeOf = type => {
//   return get(`?sort=${type}&direction=asc&perPage=50`);
// };
