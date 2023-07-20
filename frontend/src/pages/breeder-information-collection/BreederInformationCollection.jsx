import axios from 'axios';
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CoupleCat from "../temporary/assets/couple-cat.svg";
import { TempFooter } from "../temporary/components/TempFooter";


function BreederInformationCollection() {
	let navigate = useNavigate();

	const [data, setData] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
		axios.post("https://topseed-django-development.up.railway.app/api/breeder-info-collection/", data)
		.then(res => {
			console.log(res.data);
			navigate("/breeder-information-collection-submitted")
		}).catch(e => {
			console.log(e)
			console.log(e.response.data)
		})
	};
	
	const handleOnChange = (e) => {
		setData(values => {
			values[e.target.name] = e.target.value
			return values;
		})
	}

	const handleUploadCatteryRegistration = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios.post('https://breeder-nextjs-development.up.railway.app/api/s3/file-upload', formData, {
			headers: {
			  'Content-Type': 'multipart/form-data'
			}
		}).then(res => {
			console.log(res.data)
			setData(values => {
				values["catteryRegistrationFileUri"] = res.data
				return values;
			})
		}).catch(e => console.log(e)) 
	}

	const handleUploadSiresAndDamsRegistration = (e) => {
		e.preventDefault();
		const fileUploads = Object.values(e.target.files).map(file => {
			let formData = new FormData();
			formData.append("file", file);
			return axios.post('https://breeder-nextjs-development.up.railway.app/api/s3/file-upload', formData, {
				headers: {
				  'Content-Type': 'multipart/form-data'
				}
			}).then(res => res.data).catch(e => console.log(e)) 
		})
		Promise.all(fileUploads).then(fileUris => {
			console.log(fileUris)
			setData(values => {
				values["siresAndDamsRegistrationFileUris"] = fileUris
				return values;
			})
		}).catch(e => console.log(e))
	}

	return (
		<Container>
			<div style={{ height: 96 }} />
			<Row>
				<Title>Breeder Information Collection Form</Title>
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<img style={{ height: "12em" }} src={CoupleCat} alt="" />
			</Row>
			<div style={{ height: 24 }} />
			<Row>
				<Form style={{ width: 420, display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
					<div style={{ width: 420 }}><SectionTitle>Cattery information</SectionTitle></div>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Cattery name</Label>
						</Form.Label>
						<Form.Control name="catteryName" placeholder="Cattery name" required={false} value={data["catteryName"]} onChange={handleOnChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Cattery owner's name</Label>
						</Form.Label>
						<Form.Control style={{ marginBottom: 12 }} name="catteryOwnerName1" placeholder="Owner's name 1" required={false} onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryOwnerName2" placeholder="Owner's name 2 (Optional)" onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryOwnerName3" placeholder="Owner's name 3 (Optional)" onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Cattery address</Label>
						</Form.Label>
						<Form.Control style={{ marginBottom: 12 }} name="catteryAddress1" placeholder="Cattery's address 1" required={false} onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryAddress2" placeholder="Cattery's address 2 (Optional)" onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryAddress3" placeholder="Cattery's address 3 (Optional)" onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Breed</Label>
						</Form.Label>
						<Form.Control style={{ marginBottom: 12 }} name="catteryBreed1" placeholder="Breed 1" required={false} onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryBreed2" placeholder="Breed 2 (Optional)" onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryBreed3" placeholder="Breed 3 (Optional)" onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Created since (MM-DD-YYYY)</Label>
						</Form.Label>
						<Form.Control style={{ marginBottom: 12 }} name="catteryCreatedSince" placeholder="MM-DD-YYYY" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Upload cattery registration</Label>
						</Form.Label>
						<Form.Control type="file" size="sm" onChange={handleUploadCatteryRegistration} />
					</Form.Group>

					<hr />
					<div style={{ width: 420 }}><SectionTitle>Breeder basic information</SectionTitle></div>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Breeder's name</Label>
						</Form.Label>
						<Form.Control name="breederName" placeholder="Breeder's name" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Breeder's email</Label>
						</Form.Label>
						<Form.Control name="breederEmail" placeholder="Breeder's email" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Breeder's phone number (555-555-5555)</Label>
						</Form.Label>
						<Form.Control name="breederPhone" placeholder="555-555-5555" required={false} onChange={handleOnChange}/>
					</Form.Group>

					<hr />
					<div style={{ width: 420 }}><SectionTitle>Sires and Dams</SectionTitle></div>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many Sires do you have?</Label>
						</Form.Label>
						<Form.Control name="siresCnt" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many Dams do you have?</Label>
						</Form.Label>
						<Form.Control name="damsCnt" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How frequently do you accquire new Sires/Dams</Label>
						</Form.Label>
						<Form.Control name="frequentlyAccquireNewSiresDams" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label><Label>Upload Sires and Dams regisation (multiple files)</Label></Form.Label>
						<Form.Control type="file" multiple size="sm" onChange={handleUploadSiresAndDamsRegistration}/>
					</Form.Group>

					<hr />
					<div style={{ width: 420 }}><SectionTitle>Cattery Management</SectionTitle></div>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many litters of kittens do you breed each year?</Label>
						</Form.Label>
						<Form.Control name="littersOfKittensBreedEachYear" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What is the typical price range of kittens?</Label>
						</Form.Label>
						<Form.Control name="typicalPriceRangeOfKittens" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How long have you been involved in breeding?</Label>
						</Form.Label>
						<Form.Control name="howLongBeenInvolvedInBreeding" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many kittens have you successfully placed in new homes? (per year?)</Label>
						</Form.Label>
						<Form.Control name="kittensSuccessfullyPlacedInNewHomesPerYear" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Have you ever been Scammed? And what kind of scam?</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="haveEverBeenScammed" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Have you ever engaged in a dispute with a purchaser regarding the well-being of a kitten?</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="haveEverEngagedInADispute" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What has been the most challenging experience you have faced to manage the cattery?</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="mostChallengingExperienceToManageTheCattery" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What is the most important data you would like to collect from your customers?</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="mostImportantDataWouldLiketCollectFromCustomer" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What is the most important thing you would like your customers to know?</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="mostImportantThingWouldLIkeCustomersToKnow" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What type of data would assist you in improving the management of the cattery?</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="typeOfDataWouldImprovingTheManagementOfTheCattery" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>List all the websites/apps you used to post your kittens (separate by comma)</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="websitesAppsUsedToPostKittens" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Have any of your breeding cats or their offspring received titles or awards? If yes, please provide details.</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="haveCatsReceivedTitlesOrAwards" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What health testing do you conduct on your breeding cats? Please specify the tests performed and any certifications obtained.</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="healthTestingConductOnCats" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Do you have a contract or agreement for buyers? If yes, please provide a brief description of the terms and conditions.</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="contactOrAgreementForBuyers" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Do you offer any support or assistance to kitten buyers after they take their kittens home? If yes, please provide details.</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="anySuportOrAssistanceToBuyer" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many breeding cats do you currently own?</Label>
						</Form.Label>
						<Form.Control name="breedingCatsCurrentlyOwn" placeholder="" required={false} onChange={handleOnChange}/>
					</Form.Group>

					<hr/>
					<Button variant="dark" type="submit">
						Submit
					</Button>
				</Form>
			</Row>
			<TempFooter></TempFooter>
		</Container>
	);
}

export default BreederInformationCollection;

const Title = styled.h3`
	color: var(--grey-200);
	text-align: left;
`;

const SectionTitle = styled.h5`
	color: var(--grey-200);
	text-align: left;
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
