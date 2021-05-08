import React from "react";
import "./Testimonials.scss";
import image from "./../../assets/clients.webp";

const Testimonials = () => {
	return (
		<section className="testimonial container">
			<div className="card-container">
				<img src={image} alt="profile" />
			</div>
			<div className="head">
				<h4 className="subheading">Customer</h4>
				<h2 className="heading">Client's Say</h2>
			</div>
		</section>
	);
};

export default Testimonials;
