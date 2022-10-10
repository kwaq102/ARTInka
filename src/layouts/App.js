import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav id='nav'>
            <Navigation />
          </nav>
          <header id='header'>Nagłówek góra strony</header>
          <div id="page">
            Tutaj będą różne zmieniające się strony, moze w sekcjach
          </div>
          <footer id='footer'>STOPKA</footer>
        </div>
      </Router>
    );
  }
}

export default App;
