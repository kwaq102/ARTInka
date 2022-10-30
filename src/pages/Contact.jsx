import React from "react";

import phone from "../imgs/icons/phone-call.svg";
import mail from "../imgs/icons/mail.svg";
import social from "../imgs/icons/social.svg";
import fb from "../imgs/icons/facebook.png";
import kidsContact from "../imgs/kidsContact.jpg";

import "../styles/Contact.css";

const Contact = () => {
	return (
		<div className="page-contact">
			<section className="contact">
				<h2 className="heading">Kontakt</h2>
				<p>
					Zapraszam do kontaktu telefonicznego, mailowego jak rónież za
					pośrednictwem mediów społecznościowych.
				</p>
				<div className="contact-methods">
					<div className="method-box">
						<img src={phone} alt="" />
						<div className="method-box-content">
							<h4 className="method-name">Telefon</h4>
							<p className="method-text">+48 722 795 057</p>
						</div>
					</div>
					<div className="method-box">
						<img src={mail} alt="" />
						<div className="method-box-content">
							<h4 className="method-name">E-mail</h4>
							<p className="method-text">artinka.elblag@gmail.com</p>
						</div>
					</div>

					<div className="method-box">
						<img src={social} alt="" />
						<div className="method-box-content">
							<h4 className="method-name">Portale społecznciowe</h4>
							<a
								href="https://www.facebook.com/profile.php?id=100085567025007"
								className="contact-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={fb} alt="" />
							</a>
						</div>
					</div>
				</div>

				<div className="contact-content">
					<div className="contact-photo">
						<img src={kidsContact} alt="" />
					</div>
					<div className="contact-form">
						<h3 className="heading">Formularz kontaktowy</h3>
						<form action="">FORMULARZ JUŻ W KRÓTCE</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
