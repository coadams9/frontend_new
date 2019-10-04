import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Favorites from './components/Favorites';
import AddCar from './components/AddCar'




class App extends Component {
  render() {

    return (
      <div>
        <Switch>
          <Route path='/signUp' component={SignUp} />
          <Route path='/home' component={Home} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/addcar' component={AddCar} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App;
