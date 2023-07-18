import React from "react";
import styled from "styled-components";
import CoupleCat from "../temporary/assets/couple-cat.svg";
import { TempFooter } from "../temporary/components/TempFooter";

function BreederInformationSubmitted() {
	return (
		<Container>
			<div style={{ height: 96 }} />
			<Row>
				<img style={{ height: "12em" }} src={CoupleCat} alt="" />
			</Row>
			<div style={{ height: 36 }} />
			<Row>
				<Title>Submitted</Title>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<Label>Thanks for your information! </Label>
			</Row>
			<div style={{ height: 24 }} />
			<TempFooter></TempFooter>
		</Container>
	);
}

export default BreederInformationSubmitted;

const Title = styled.h3`
	color: var(--grey-200);
`;

const Container = styled.div`
	// height: 100vh;
	background-image: linear-gradient(to right, #263554, #5d455e);
`;

const Row = styled.section`
	display: flex;
	flex-direction: row;
`;

const Label = styled.article`
	display: flex;
	color: var(--grey-200);
	font-size: 16px !important;
`;
