import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Pages from "./Pages";

const App = () => {
	const [showIconBurger, setShowIconBurger] = useState(true);

	const hiddenNavigation = e => {
		console.log(window);
		if (!showIconBurger) {
			if (
				!(
					e.target.className === "navigation-list" ||
					e.target.className === "nav-item-link" ||
					e.target.className === "nav-item-link active"
				)
			) {
				console.log("działą");
				setShowIconBurger(true);
			}
		}
	};

	return (
		<Router>
			<div className="app" onClick={hiddenNavigation}>
				<nav id="nav">
					<Navigation
						showIconBurger={showIconBurger}
						setShowIconBurger={setShowIconBurger}
					/>
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
};

export default App;
