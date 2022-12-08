import React, { useState } from "react";
import "../styles/Burger.css";

import burger from "../imgs/icons/burger.svg";
import arrow from "../imgs/icons/arrow-left.svg";

const Burger = (props) => {
	// const [showIconBurger, setShowIconBurger] = useState(true);

	// const setIcon = () => {
	// 	setShowIconBurger(!showIconBurger);
	// };

	return (
		<div
			className="menu-burger"
			onClick={() => props.setShowIconBurger(!props.showIconBurger)}
		>
			<img
				src={burger}
				alt="ikona menu burger"
				className={`burger ${props.showIconBurger ? "show-icon" : ""}`}
			/>
			<img
				src={arrow}
				alt="strzałka w lewo zamykająca menu boczne"
				className={`arrow ${!props.showIconBurger ? "show-icon" : ""}`}
			/>
		</div>
	);
};

export default Burger;
