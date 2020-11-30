import React from 'react';
import Container from './Components/Container'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route } from 'react-router-dom'


import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
