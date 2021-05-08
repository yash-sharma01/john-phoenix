import React from "react";
import { IoSend } from "react-icons/io5";
import HeroImg from "../../assets/hero-img.png";
import "./HeroSection.scss";

const HeroSection = () => {
	return (
		<section className="hero container">
			<div className="hero-text">
				<h1>
					Hello,
					<br />
					I'm John
				</h1>
				<h3>Art Director at Figma</h3>
				<p>
					Hi, my name is John and I'm a freelance web designer from San
					Francisco. I have over 10 years experience in leading teams and
					shipping complex digital products.
				</p>
				<button className="msg">
					<span>Message</span>
					<IoSend className="msg-icon" />
				</button>
			</div>
			<div className="hero-img">
				<img src={HeroImg} className="img" alt="Hero" />
			</div>
		</section>
	);
};

export default HeroSection;
