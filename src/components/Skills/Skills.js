import React from "react";
import { HiColorSwatch } from "react-icons/hi";
import { BsFillLayersFill } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { HiMap } from "react-icons/hi";

import "./Skills.scss";

const Skills = () => {
	return (
		<section className="skills container">
			<h4 className="skills-subheading">my skills</h4>
			<h2 className="skills-heading">My Expertise</h2>
			<div className="card-wrapper">
				<div className="card">
					<div className="card-head">
						<HiColorSwatch className="skill-icon ui-ux" />
						<h3 className="card-title">UI/UX Design</h3>
					</div>
					<div className="card-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
						ullam! Voluptate vitae assumenda itaque saepe, quo iste odit ea?
						Magni beatae ratione pariatur ipsam, ipsa id velit similique.
					</div>
					<p className="card-link">creative all</p>
				</div>

				<div className="card">
					<div className="card-head">
						<BsFillLayersFill className="skill-icon brand" />
						<h3 className="card-title">Branding</h3>
					</div>
					<div className="card-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
						ullam! Voluptate vitae assumenda itaque saepe, quo iste odit ea?
						Magni beatae ratione pariatur ipsam, ipsa id velit similique.
					</div>
					<p className="card-link">creative all</p>
				</div>

				<div className="card">
					<div className="card-head">
						<HiMap className="skill-icon motion" />
						<h3 className="card-title">Motion & Animation</h3>
					</div>
					<div className="card-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
						ullam! Voluptate vitae assumenda itaque saepe, quo iste odit ea?
						Magni beatae ratione pariatur ipsam, ipsa id velit similique.
					</div>
					<p className="card-link">creative all</p>
				</div>

				<div className="card">
					<div className="card-head">
						<HiCode className="skill-icon code" />
						<h3 className="card-title">Development</h3>
					</div>
					<div className="card-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
						ullam! Voluptate vitae assumenda itaque saepe, quo iste odit ea?
						Magni beatae ratione pariatur ipsam, ipsa id velit similique.
					</div>
					<p className="card-link">creative all</p>
				</div>
			</div>
		</section>
	);
};

export default Skills;
