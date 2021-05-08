import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "./Blogs.scss";

const Blogs = () => {
	return (
		<section className="blogs container">
			<div className="left-wrapper">
				<h4 className="subheading">blog</h4>
				<h2 className="heading">My blog and news.</h2>
				<button>
					<label>Seel All</label>
					<HiArrowRight />
				</button>
			</div>
			<div className="right-wrapper">
				<div className="blog-card">
					<div className="title-container">
						<h4>Feb 12 - Blog</h4>
						<h3>Let this be a lesson to you</h3>
					</div>
					<HiArrowRight className="blog-arrow" />
				</div>
				<hr />
				<div className="blog-card">
					<div className="title-container">
						<h4>Feb 12 - Blog</h4>
						<h3>Let this be a lesson to you</h3>
					</div>
					<HiArrowRight className="blog-arrow" />
				</div>
				<hr />
				<div className="blog-card">
					<div className="title-container">
						<h4>Feb 12 - Blog</h4>
						<h3>Let this be a lesson to you</h3>
					</div>
					<HiArrowRight className="blog-arrow" />
				</div>
			</div>
		</section>
	);
};

export default Blogs;
