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
			<SectionText>Front-End Developer</SectionText>
			<Link href="#projects">
				{/* <Button onClick={() => (window.location = "https://google.com")}> */}
				<Button>Más +</Button>
			</Link>
		</LeftSection>
	</Section>
);

export default Hero;
