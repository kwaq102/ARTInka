import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import phone from "../imgs/icons/phone-solid.svg";
import { navList } from "../data/data.js";

import logo from "../imgs/logo.png";

import "../styles/Navigation.css";

const Navigation = () => {
	// const scrollTop = { top: 0, left: 0, behavior: "smooth" };

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const menu = navList.map((el) => (
		<li
			key={el.navName}
			className={"nav-item"}
			onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}
		>
			<NavLink to={el.path} end={el}>
				{el.navName}
			</NavLink>
		</li>
	));

	return (
		<>
			<div className="nav-content">
				<div className="logo">
					<img src={logo} alt="logo artinka" />
					<div className="phone-in-nav">
						<a href="tel: +48722794057">
							<img src={phone} alt="telefon" />
							<strong>+48 722 795 057</strong>
						</a>
					</div>
				</div>
				<ul>{menu}</ul>
			</div>
		</>
	);
};

export default Navigation;
