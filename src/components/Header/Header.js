import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { SiGmail } from "react-icons/si";

import {
	Container,
	Span,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
						marginBottom: "20px",
					}}
				>
					<DiCssdeck size="3rem" /> <Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
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
		</Div3>
	</Container>
);

export default Header;
