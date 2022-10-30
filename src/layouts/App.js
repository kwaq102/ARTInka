import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Header from "./Header";
import Pages from "./Pages";

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div className="app">
					<nav id="nav">
						<Navigation />
					</nav>
					<header id="header">
						<Header />
					</header>
					<main id="page">
						<Pages />
					</main>
					<footer id="footer">
						<Footer />
					</footer>
				</div>
			</Router>
		);
	}
}

export default App;
