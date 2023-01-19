import emailjs from '@emailjs/browser';
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import CoupleCat from "./temporary/assets/couple-cat.svg";
import { TempFooter } from "./temporary/components/TempFooter";

function ContactUs() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const form = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_f47jxjf", "template_f13te1y", form.current, "IS0vo1u-FpkbW3Q4z")
			.then(() => console.log("message sent"), (err) => console.log(err))
			.catch((err) => console.log(err))
			.finally(() => setIsSubmitted(true));
	};

	const ThankyouForMessage = () => {
		if (!isSubmitted) return null;
		return <Label style={{height: 250}}>Thanks for contacting us! We will be in touch with your shortly.</Label>;
	};

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
				{!isSubmitted && (
					<Form ref={form} style={{ width: 420 }} onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Control type="name" name="name" placeholder="Your name" required/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control type="email" name="email" placeholder="Email address" required/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Control as="textarea" rows={3} name="message" placeholder="Message" required />
						</Form.Group>
						<Button variant="dark" type="submit">
							Send
						</Button>
					</Form>
				)}
				<ThankyouForMessage />
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

const Label = styled.article`
	display: flex;
	color: var(--grey-200);
	font-size: 16px !important;
`;
