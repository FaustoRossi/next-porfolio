import React from "react";
import Link from "next/link";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Fausto Rossi
			</SectionTitle>
			<SectionText>
				I'm a Front-End Developer who enjoys what he does. I'm a team player,
				resourceful and equipped with a variety of soft skills.
			</SectionText>
			<Link href="#projects">
				<Button>More</Button>
			</Link>
		</LeftSection>
	</Section>
);

export default Hero;
