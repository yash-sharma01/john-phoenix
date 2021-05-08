import React from "react";
import { HiArrowRight } from "react-icons/hi";
import img1 from "./../../assets/one.webp";
import img2 from "./../../assets/two.webp";
import img3 from "./../../assets/three.webp";
import img4 from "./../../assets/four.webp";
import img5 from "./../../assets/five.webp";
import img6 from "./../../assets/six.webp";
import "./Portfolio.scss";

const Portfolio = () => {
	return (
		<section className="portfolio container">
			<div className="portfolio-header">
				<div className="portfolio-header-left">
					<h4 className="subheading">portfolio</h4>
					<h2 className="heading">All Creative Works</h2>
				</div>

				<div className="portfolio-header-right">
					<div className="link-container">
						<h3 className="link">
							Discover all projects on&nbsp;<span>Dribbble</span>
						</h3>
						<HiArrowRight className="link-icon" />
					</div>
				</div>
			</div>
			<div className="img-wrapper">
				<img src={img1} className="img" alt="img 1" />
				<img src={img2} className="img" alt="img 2" />
				<img src={img3} className="img" alt="img 3" />
				<img src={img4} className="img" alt="img 4" />
				<img src={img5} className="img" alt="img 5" />
				<img src={img6} className="img" alt="img 6" />
			</div>
		</section>
	);
};

export default Portfolio;
