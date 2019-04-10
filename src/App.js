import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'



class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App;
