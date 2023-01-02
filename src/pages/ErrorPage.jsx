import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/ErrorPage.css";

const ErrorPage = () => {
	return (
		<div className="error-page">
			<p>Ups...</p>
			<p>Coś poszło nie tak :((</p>
			<NavLink to="/">Powrót do strony głównej</NavLink>
		</div>
	);
};

export default ErrorPage;
