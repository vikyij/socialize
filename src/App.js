import React, { useContext } from 'react';
import Container from './Components/Container'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route } from 'react-router-dom'
import { firebaseAuth } from './provider/AuthProvider'


import './App.css';

function App() {
  const { handleSignup } = useContext(firebaseAuth)
  console.log(handleSignup)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
