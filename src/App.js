import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'



class App extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signUp' component={SignUp} />
        </Switch>
      </div>
    )
  }
}

export default App;
