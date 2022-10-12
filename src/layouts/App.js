import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.css';
import Footer from './Footer';
import Navigation from './Navigation';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav id='nav'>
            <Navigation />
          </nav>
          <header id='header'>
            <Header />
          </header>
          <div id="page">
            Tutaj będą różne zmieniające się strony, moze w sekcjach
          </div>
          <footer id='footer'>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
