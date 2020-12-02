import React, { useContext } from 'react';
import Container from './Components/Container'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Switch, Route } from 'react-router-dom'
import { firebaseAuth } from './provider/AuthProvider'


import './App.css';

function App() {
  const { token } = useContext(firebaseAuth)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={rProps => token === null ? <Login />: <Container/>}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
