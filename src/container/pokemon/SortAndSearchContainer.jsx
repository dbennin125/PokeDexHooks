import React from 'react';
import PokemonSearchContainer from './PokemonSearchContainer';
import SelectorContainer from './SelectorContainer';
import styles from './SortAndSearchContainer.css';

const SortAndSearchContainer = () => {
  return (
    <div className={styles.MainContainer}>
      <p>Search by name or by type.</p>
      <PokemonSearchContainer className={styles.Search}/>
      <SelectorContainer className={styles.Sort} />
    </div>
  );
};

export default SortAndSearchContainer;
