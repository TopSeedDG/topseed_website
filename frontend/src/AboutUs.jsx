import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CoupleCat from './pages/temporary/assets/couple-cat.svg';
import TSLogoHor from "./pages/temporary/assets/TSlogo-hor.svg";

function AboutUs() {
	return (
		<Container>
			<div style={{ height: 96 }} />
			<Row>
				<Link to="/">
					<img style={{ height: "3em" }} src={TSLogoHor} alt="" />
				</Link>
			</Row>
			<div style={{ height: 36 }} />
			<Row>
				<img style={{ height: "12em" }} src={CoupleCat} alt="" />
			</Row>
			<div style={{ height: 36 }} />
			<Row>
				<Articile>
					<Text>We are a group friends with diverse backgrouds from business to technology to design, bounded together by our shared love for pets.</Text>
					<div style={{ height: 18 }} />
					<Text>
						The TopSeed platform was designed by a group of cat enthusiasts for cat lovers everywhere. It's free to download and use, and it allows you to browse breeders and join a safe, functional community. With TopSeed, you can quickly
						access the pet services you need and be verified by a trusted cat association. The platform aims to improve the quality and affordability of breeders' services, while also making it easier for the community to access resources like
						medical assistance and pet transportation.
					</Text>
					<br/>
					<Info>info@topseed.com</Info>
					<Info>213-999-3485</Info>
					<Info>770 S Grand Ave</Info>
					<Info>Los Angeles, CA 90017</Info>
				</Articile>
			</Row>
		</Container>
	);
}

export default AboutUs;

const Container = styled.div`
	height: 100vh;
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

const Text = styled.article`
	// text-indent: 36px;
	display: flex;
	color: var(--grey-200);
	font-size: 18px !important;
`;

const Info = styled.p`
	color: var(--grey-200);
	font-size: 16px !important;
	text-align: right;
`;