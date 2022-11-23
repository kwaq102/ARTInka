import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Pages from "./Pages";

import wave from "../imgs/wave.svg";

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div className="app">
					<nav id="nav">
						<Navigation />
					</nav>
					<div id="page">
						<Pages />
					</div>
					<footer id="footer">
						<Footer />
					</footer>
				</div>
			</Router>
		);
	}
}

export default App;
