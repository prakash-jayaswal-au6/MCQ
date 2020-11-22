import React from 'react'
import './App.css'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import LoginRegister from "./LoginRegister";
import Ques from './Ques';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/loginregister">
          <Header />
            <LoginRegister />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          
          <Route path="/question">
            <Header />
            <Ques />
          </Route>
          
       </Switch>
      </div>
    </Router>

  )
}

export default App
