import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import phone from "../imgs/icons/phone-solid.svg";
import { navList } from "../data/data.js";

import logo from "../imgs/logo.png";

import "../styles/Navigation.css";
import Burger from "../components/Burger";

const Navigation = ({ showIconBurger, setShowIconBurger }) => {
	const moveMenu = showIconBurger ? "navigation-list hide" : "navigation-list";

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const menu = navList.map((el) => (
		<li
			key={el.navName}
			className={"nav-item"}
			onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}
		>
			<NavLink to={el.path} end={el} className="nav-item-link">
				{el.navName}
			</NavLink>
		</li>
	));

	return (
		<>
			<div className="nav-content">
				<Burger
					showIconBurger={showIconBurger}
					setShowIconBurger={setShowIconBurger}
				/>
				<div className="logo">
					<img src={logo} alt="logo artinka" />
					<div className="phone-in-nav">
						<a href="tel: +48722794057">
							<img src={phone} alt="telefon" />
							<strong>+48 722 795 057</strong>
						</a>
					</div>
				</div>
				<ul className={moveMenu}>{menu}</ul>
			</div>
		</>
	);
};

export default Navigation;
