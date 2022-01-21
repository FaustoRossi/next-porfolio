import React from "react";
import { DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Tecologías </SectionTitle>
		<SectionText>
			He trabajado con varias tecnologías y librerías pertenecientes al Front
			End Development, asi como el manejo e integración de API's
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front End</ListTitle>
					<ListParagraph>
						Experiencia con
						<br />
						React.JS | JavaScript <br /> Sass | Tailwind
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<FiFigma size="3rem" />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experiencia con <br />
						Figma | Adobe Lightroom
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
