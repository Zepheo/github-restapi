import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Feed from './components/Feed';
import User from './components/User';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/feed'>
            <Feed />
          </Route>
          <Route path='/user'>
            <User />
          </Route>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
