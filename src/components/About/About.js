import React from "react";
import "./About.scss";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import john from "./../../assets/john.jfif";

const About = () => {
	return (
		<section className="about container">
			<div className="social-media">
				<FaFacebook className="icon" />
				<RiInstagramFill className="icon" />
				<FaTwitter className="icon" />
				<FaDribbble className="icon" />
				<FaMedium className="icon" />
			</div>
			<div className="greeting">
				<h2>
					Hello, <br />
					I'm John.
				</h2>
				<h4>Nice to meet you.</h4>
			</div>
			<div className="desc">
				<h4>
					Hi, my name is John and I'm a freelance web designer from San
					Francisco. I have over 10 years experience in leading teams and
					shipping complex digital products.
				</h4>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
					mollitia minus sed laboriosam ipsa officiis soluta quidem atque libero
					rerum deleniti nam excepturi vero iusto, ullam obcaecati sunt amet
					suscipit quibusdam corporis in facere? Debitis tempora quidem eos
					cumque excepturi.
				</p>
				<div className="profile">
					<img src={john} alt="John" />
					<div className="info">
						<h4>John Doe</h4>
						<h5>Art Director at Figma</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
