import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Card } from './Card';
import { BlackJack } from './BlackJack';
import { NavBar } from './NavBar';
import { Home } from './Home';
import { Rules } from './Rules';

class App extends Component {
  render(){
    let bodyStyle = {
      marginTop: "5rem"
    }
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div style={bodyStyle}>
            <Route path="/home" component={Home} />
            <Route path="/play" component={BlackJack} />
            <Route path="/rules" component={Rules} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
