/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import PokemonContainer from '../../container/pokemon/PokemonContainer.jsx';
import PokemonListContainer from '../../container/pokemon/PokemonListContainer.jsx';


export default function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={PokemonListContainer}/>
      <Route path="/:id" component={PokemonContainer} />
    </Switch>
  </Router>;
}
