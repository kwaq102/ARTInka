import React from "react";
import { NavLink } from "react-router-dom";
import { navList } from "../data/data.js";

import phone from "../imgs/icons/phone-solid-white.svg";
import fb from "../imgs/icons/facebook.png";
import logo from "../imgs/logo.png";

import "../styles/Footer.css";

const Footer = () => {
	const menu = navList.map(el => (
		<li key={el.navName} className={"footer-nav-item"}>
			<NavLink to={el.path} end={el}>
				{el.navName}
			</NavLink>
		</li>
	));
	return (
		<>
			<div className="footer">
				<div className="footer-logo">
					<img src={logo} alt="logo artinka" />
					<div className="phone-in-footer">
						<a href="tel: +48722794057">
							{/* <img src={phone} alt="telefon" /> */}
							<strong>+48 722 795 057</strong>
						</a>
					</div>
				</div>

				<div className="footer-content">
					<div className="socials">
						<a
							href="https://www.facebook.com/profile.php?id=100085567025007"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={fb} alt="" />
						</a>
					</div>
					<div className="footer-nav">{menu}</div>
				</div>
			</div>
			<div className="policy">
				<div className="wrapper-policy">
					<p>ARTinka © 2023.</p>
					<p>
						Projekt i wykonanie{" "}
						<a href="https://gajewwwski.pl">gajewwwski.pl</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
