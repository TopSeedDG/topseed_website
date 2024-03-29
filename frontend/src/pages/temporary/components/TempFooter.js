import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import TSLogoHor from "../assets/TSlogo-hor.svg";
import twitter from "../assets/twitter.svg";

export const TempFooter = () => {
	return (
		<Footer>
			<Flex>
				<About>
					<Link to={`/`}>
						<img src={TSLogoHor} alt="" />
					</Link>
					<p>We are a group friends with diverse backgrouds from business to technology to design, bounded together by our shared love for pets.</p>
					<span>
					<Link to={`/`}>
							<p style={{ display: "inline-block" }}>
								<strong>Home</strong>
							</p>
						</Link>
						<p style={{ display: "inline-block", marginLeft: 18, marginRight: 18 }}>|</p>
						<Link to={`/about-us`}>
							<p style={{ display: "inline-block" }}>
								<strong>About Us</strong>
							</p>
						</Link>
						<p style={{ display: "inline-block", marginLeft: 18, marginRight: 18 }}>|</p>
						<Link to={`/contact-us`}>
							<p style={{ display: "inline-block" }}>
								<strong>Contact Us</strong>
							</p>
						</Link>
					</span>
				</About>
				<Contact>
					<SocialIcons>
						<img src={instagram} alt="" />
						<img src={facebook} alt="" />
						<img src={twitter} alt="" />
					</SocialIcons>
					<p>
						info@topseed.co <br />
						213-999-3485 <br />
						355 S. Grand Ave. Suite 2450 <br />
						Los Angeles, CA 90017 <br />
					</p>
				</Contact>
			</Flex>
		</Footer>
	);
};

const Footer = styled.footer`
	display: flex;
	place-content: center;
	padding: 15vh 0;
	width: 100%;
	background-image: linear-gradient(to right, #263554, #5d455e);
`;

const Flex = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;

	& > div {
		width: 25em;
		color: var(--grey-400);
	}
`;

const About = styled.div`
	img {
		height: 4em;
	}

	p {
		font-weight: 300;
		font-size: 1em;
		margin-top: 1em;
		color: var(--grey-200);
	}
`;
const Contact = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 1em;
	width: 25em;
	color: var(--grey-400);

	p {
		text-align: right;
		font-weight: 300;
		font-size: 0.9em;
		line-height: 1.6;
	}
`;
const SocialIcons = styled.div`
	display: flex;
	height: 4em;
	gap: 0.8em;
	img {
		height: 80%;
	}
`;
