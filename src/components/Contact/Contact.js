import React from "react";
import { IoMdMailOpen } from "react-icons/io";
import "./Contact.scss";

const Contact = () => {
	return (
		<section className="contact container">
			<div className="content-wrapper">
				<div className="head">
					<h4 className="subheading">Contact me</h4>
					<h2 className="heading">Got a Project? Let's Talk!</h2>
				</div>
				<div className="mail">
					<IoMdMailOpen className="mail-icon" />
					<h3>hi@johndesign.com</h3>
				</div>
			</div>
		</section>
	);
};

export default Contact;
