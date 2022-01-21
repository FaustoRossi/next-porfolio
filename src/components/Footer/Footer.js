import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle> Celular</LinkTitle>
					<LinkItem href="tel:3446-370455">3446-370455</LinkItem>
				</LinkColumn>

				<LinkColumn>
					<LinkTitle> Email</LinkTitle>
					<LinkItem href="faaustor@gmail.com">faaustor@gmail.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Aprendiendo algo nuevo todos los días</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/FaustoRossi">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/fausto-rossi/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons
						target="_blank"
						href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=faaustor@gmail.com"
					>
						<SiGmail size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
