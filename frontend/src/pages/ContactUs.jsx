import React, { useState } from "react";
import styled from "styled-components";

import { Button, Form } from "react-bootstrap";
import CoupleCat from "./temporary/assets/couple-cat.svg";
import { TempFooter } from "./temporary/components/TempFooter";

function ContactUs() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true)
	}

	const ContactUsForm = () => {
		if (isSubmitted) return null;
		return (
			<Form style={{ width: 420 }} onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Control type="name" placeholder="Your name" />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control type="email" placeholder="Email address" />
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Control as="textarea" rows={3} placeholder="Message" />
				</Form.Group>
				<Button variant="dark" type="submit">
					Send
				</Button>
			</Form>
		);
	};

	const ThankyouForMessage = () => {
		if (!isSubmitted) return null
		return (
			<Label>Thanks for contacting us! We will be in touch with your shortly.</Label>
		)
	}

	return (
		<Container>
			<div style={{ height: 96 }} />
			<Row>
				<img style={{ height: "12em" }} src={CoupleCat} alt="" />
			</Row>
			<div style={{ height: 36 }} />
			<Row>
				<Title>Contact Us</Title>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<ContactUsForm/>
				<ThankyouForMessage/>
			</Row>
			<TempFooter></TempFooter>
		</Container>
	);
}

export default ContactUs;

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

const Text = styled.article`
	text-indent: 36px;
	display: flex;
	color: var(--grey-200);
	font-size: 18px !important;
`;

const Label = styled.article`
	display: flex;
	color: var(--grey-200);
	font-size: 16px !important;
`;
