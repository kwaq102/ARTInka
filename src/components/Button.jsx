import React from "react";
import { Link } from "react-router-dom";

import "../styles/Button.css";

const Button = (props) => {
	return (
		<>
			<button className={`btn ${props.btnClass}`}>
				<Link to={props.path}>{props.text}</Link>
			</button>
		</>
	);
};

export default Button;
