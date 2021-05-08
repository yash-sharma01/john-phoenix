import React from "react";
import "./Footer.scss";
import { BsCircleSquare } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="footer container">
			<BsCircleSquare />
			<ul className="links">
				<li>About</li>
				<li>Works</li>
				<li>Services</li>
				<li>Blog</li>
			</ul>

			<div className="icons">
				<FaFacebook className="icon" />
				<RiInstagramFill className="icon" />
				<FaTwitter className="icon" />
				<FaDribbble className="icon" />
				<FaMedium className="icon" />
			</div>
		</footer>
	);
};

export default Footer;
