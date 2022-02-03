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
		<SectionTitle>Technologies </SectionTitle>
		<SectionText>
			I'm familiar with several technologies and libraries regarding Front End
			Development, as well as Api integration, and I find myself wanting to
			learn more.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front End</ListTitle>
					<ListParagraph>
						Experienced on
						<br />
						React.Js | Next.Js <br /> Sass | Tailwind
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<FiFigma size="3rem" />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experienced on <br />
						Figma | Adobe Lightroom
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
