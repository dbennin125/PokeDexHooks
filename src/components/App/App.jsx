import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import PokemonContainer from '../../container/pokemon/PokemonContainer';
import PokemonListContainer from '../../container/pokemon/PokemonListContainer';


export default function App() {
  return <Router>
    <Switch>
      <Route exact path="/" component={PokemonListContainer}/>
      <Route path="/:id" component={PokemonContainer} />
    </Switch>
  </Router>;
}
