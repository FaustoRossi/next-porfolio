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
			<SectionTitle>Sobre Mi</SectionTitle>
			<SectionText>
				Soy un programador entusiasta, con muchísimas ganas de aprender y
				dispuesto a que me ayuden a enfocarme en la dirección adecuada.
				<br /> Mi meta es seguir aprendiendo lo necesario
				para pulir mis habilidades lo mas que pueda.
				<br /> En este momento me encuentro en búsqueda de mi primer experiencia
				laboral, determinado y capaz de aprender los requeremientos que sean
				necesarios para crecer personal y profesionalmente.
			</SectionText>
		</Section>
	);
};

export default About;
