import React from "react";

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => {
	return (
		<Section id="about">
			<SectionDivider />
			<br />
			<SectionTitle>About me</SectionTitle>
			<SectionText>
				I find myself wanting to learn more and more on this ever growing field.
				<br /> My goal is to keep on perfecting what I know, while taking in new
				things.
				<br /> Currently I'm looking for my first job experience, eager and
				willing to learn what it takes to grow both professionally and as a
				person.
			</SectionText>
		</Section>
	);
};

export default About;
