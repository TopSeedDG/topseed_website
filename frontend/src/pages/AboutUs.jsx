import React from "react";
import styled from "styled-components";
import CoupleCat from "./temporary/assets/couple-cat.svg";
import UserImage from "./temporary/assets/user.jpg";
import { TempFooter } from "./temporary/components/TempFooter";

function AboutUs() {
	return (
		<Container>
			<div style={{ height: 96 }} />
			{/* <Row>
				<Link to="/">
					<img style={{ height: "3em" }} src={TSLogoHor} alt="" />
				</Link>
			</Row>
			<div style={{ height: 36 }} /> */}
			<Row>
				<img style={{ height: "12em" }} src={CoupleCat} alt="" />
			</Row>
			<div style={{ height: 36 }} />
			<Row>
				<Title>About Us</Title>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<Articile>
					{/* <Text>We are a group friends with diverse backgrouds from business to technology to design, bounded together by our shared love for pets.</Text>
					<div style={{ height: 18 }} /> */}
					<Text>
						The TopSeed platform was designed by a group of cat enthusiasts for cat lovers everywhere. It's free to download and use, and it allows you to browse breeders and join a safe, functional community. With TopSeed, you can quickly
						access the pet services you need and be verified by a trusted cat association. The platform aims to improve the quality and affordability of breeders' services, while also making it easier for the community to access resources like
						medical assistance and pet transportation.
					</Text>
					<br />
					{/* <Info>info@topseed.com</Info>
					<Info>213-999-3485</Info>
					<Info>770 S Grand Ave</Info>
					<Info>Los Angeles, CA 90017</Info> */}
				</Articile>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<MemberContainer>
					<MemberImage style={{ margin: "auto" }} src={UserImage} alt="" />
					<Info>
					<strong>Weixian</strong>
						<p>Founder - CEO</p>
						Weixian Liu is a Results-driven professional with several years of experience in media communication, business development, and performance management across various industries. Highly skilled in identifying opportunities to enhance
						engagement by leveraging technology, relationships, and social media. Adept at collaborating with diverse team members and solving organizational problems.
					</Info>
				</MemberContainer>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<MemberContainer>
					<MemberImage style={{ margin: "auto" }} src={UserImage} alt="" />
					<Info>
					<strong>Emma</strong>
						<p>Director</p>
						5+ years of experience compliance specialist  5+ years of internal auditor 3+ years of experience in SOP.
					</Info>
				</MemberContainer>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<MemberContainer>
					<MemberImage style={{ margin: "auto" }} src={UserImage} alt="" />
					<Info>
					<strong>Shawn</strong>
						<p>UX Design Lead</p>
						Master's degree in human-computer interaction and 1+ year of experience shipping websites for startups.
					</Info>
				</MemberContainer>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<MemberContainer>
					<MemberImage style={{ margin: "auto" }} src={UserImage} alt="" />
					<Info>
					<strong>Xiaolin</strong>
						<p>Software Engineer Lead</p>
						5+ years of software development experience. Expert in web applications development with Python, and Oracle database administration and database migration.
					</Info>
				</MemberContainer>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<MemberContainer>
					<MemberImage style={{ margin: "auto" }} src={UserImage} alt="" />
					<Info>
					<strong>Jacky</strong>
						<p>Senior Software Engineer</p>
						5+ years of software development experience. Expert in web applications development with Python, and Oracle database administration and database migration.
					</Info>
				</MemberContainer>
			</Row>
			<TempFooter></TempFooter>
		</Container>
	);
}

export default AboutUs;

const Title = styled.h3`
	color: var(--grey-200);
`;

const MemberImage = styled.img`
	width: 90px;
	height: 90px;
	border-radius: 50%;
`;

const Container = styled.div`
	// height: 100vh;
	background-image: linear-gradient(to right, #263554, #5d455e);
`;

const Row = styled.section`
	display: flex;
	flex-direction: row;
`;

const Articile = styled.article`
	display: flex;
	width: 480px;
	flex-direction: column;
	justify-content: center;
`;

const MemberContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Text = styled.article`
	text-indent: 36px;
	display: flex;
	color: var(--grey-200);
	font-size: 18px !important;
`;

const Info = styled.p`
	width: 480px;
	// text-indent: 36px;
	color: var(--grey-200);
	font-size: 16px !important;
`;
