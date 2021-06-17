/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { fetchByTypeList } from '../../services/apiFetches';

export const useGetPokemonTypeHook = (type) => {
  const [prevType, setPrevType] = useState('');
  const [sortedPokemon, setSortedPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const typeOfPokemon = type.filter.toString();
  
  useEffect(() => {
    fetchByTypeList(typeOfPokemon)
      .then(({ search, count, perPage, results, page }) =>
        results.map(result => ({
          search,
          page,
          count,
          perPage,
          id: result._id,
          name: result.pokemon.charAt(0).toUpperCase() + result.pokemon.slice(1),
          HP: result.hp,
          image: result.url_image,
          attack: result.attack,
          defense: result.defense,
          speed: result.speed,
          type1: result.type_1
        })))
      .then(result => {
        setSortedPokemon(result);
        const totalPages = Math.ceil(result[0]?.count / result[0]?.perPage);
        setTotalPages(totalPages);
        setPrevType(result[0]?.search?.type);
        setCurrentPage(1);
      });
  }, [type]);

  if(prevType !== type)
    useEffect(() => {
      fetchByTypeList(typeOfPokemon, currentPage)
        .then(({ search, count, perPage, results, page }) =>
          results.map(result => ({
            search,
            page,
            count,
            perPage,
            id: result._id,
            name: result.pokemon.charAt(0).toUpperCase() + result.pokemon.slice(1),
            HP: result.hp,
            image: result.url_image,
            attack: result.attack,
            defense: result.defense,
            speed: result.speed,
            type1: result.type_1
          })))
        .then(result => {
          setSortedPokemon(result);
          const totalPages = Math.ceil(result[0]?.count / result[0]?.perPage);
          setTotalPages(totalPages);
          setPrevType(result[0]?.search?.type);
        });
    }, [currentPage]);

  const handleClick = ({ target }) => {
    if(target.name === 'next') setCurrentPage(currentPage => currentPage + 1);
    if(target.name === 'previous') setCurrentPage(currentPage => currentPage - 1);
  };
    
  return {
    sortedPokemon, 
    currentPage,
    totalPages,
    handleClick,
    prevType
  };
      
};

