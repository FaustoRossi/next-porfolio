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
				I'm a Front-End Developer who enjoys what he does. I to sleep trying to
				solve a coding problem, and wake up with various solutions to try, and
				if they were to fail, learn from my mistakes
			</SectionText>
			<Link href="#projects">
				<Button>More</Button>
			</Link>
		</LeftSection>
	</Section>
);

export default Hero;
