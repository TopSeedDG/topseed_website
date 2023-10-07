import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CoupleCat from "../temporary/assets/couple-cat.svg";
import { TempFooter } from "../temporary/components/TempFooter";

function BreederInformationCollection() {
	let navigate = useNavigate();

	const [data, setData] = useState({});

	const [littersOfKittensBreedEachYear, setLittersOfKittensBreedEachYear] = useState("");
	const [typicalPriceRangeOfKittens, setTypicalPriceRangeOfKittens] = useState("");
	const [howLongBeenInvolvedInBreeding, setHowLongBeenInvolvedInBreeding] = useState("");
	const [kittensSuccessfullyPlacedInNewHomesPerYear, setKittensSuccessfullyPlacedInNewHomesPerYear] = useState("");

	const [mostImportantDataWouldLiketCollectFromCustomer, setMostImportantDataWouldLiketCollectFromCustomer] = useState({
		personalAndHouseholdInformation: false,
		adoptionMotivation: false,
		financialConsideration: false,
		expectationsAndPreferences: false,
		livingEnviroment: false,
		others: false,
	});

	const [mostImportantThingWouldLIkeCustomersToKnow, setMostImportantThingWouldLIkeCustomersToKnow] = useState({
		feedingAndCareInstructions: false,
		documentation: false,
		vaccinatioinRecord: false,
		microchipInformation: false,
		healthCertification: false,
		booldTestRecord: false,
		fiveGenerationPedigreeCertificate: false,
		others: false
	})

	const [websitesAppsUsedToPostKittens, setWebsitesAppsUsedToPostKittens] = useState({
		instagram: false,
		facebook: false,
		tiktok: false,
		catteryWebsite: false,
		others: false
	})

	const [haveCatsReceivedTitlesOrAwards, setHaveCatsReceivedTitlesOrAwards] = useState(false)

	const [healthTestingConductOnCats, setHealthTestingConductOnCats] = useState({
		bloodTest: false,
		geneticTest: false,
		felvfivfip:false,
		heartWormTest: false,
		hipDysplasiaScreening: false,
		hypertrophicCardiomyopathyScreening: false,
		polycysticKidneyDiseaseTest: false,
		others: false
	})

	const [anySuportOrAssistanceToBuyer, setAnySuportOrAssistanceToBuyer] = useState({
		postAdoptionSupport: false,
		guidanceAndInformation: false,
		welcomeKit: false,
		healthcare: false,
		others: false
	})


	const handleSubmit = (e) => {
		e.preventDefault();

		data['littersOfKittensBreedEachYear'] = littersOfKittensBreedEachYear;
		data['typicalPriceRangeOfKittens'] = typicalPriceRangeOfKittens;
		data['howLongBeenInvolvedInBreeding'] = howLongBeenInvolvedInBreeding;
		data['kittensSuccessfullyPlacedInNewHomesPerYear'] = kittensSuccessfullyPlacedInNewHomesPerYear;

		let mostImportantDataWouldLiketCollectFromCustomerData = "";
		for (const prop in mostImportantDataWouldLiketCollectFromCustomer) {
			if (prop === "others") continue;
			if (mostImportantDataWouldLiketCollectFromCustomer[prop]) {
				mostImportantDataWouldLiketCollectFromCustomerData += prop;
				mostImportantDataWouldLiketCollectFromCustomerData += ","
			}
		}
		if (mostImportantDataWouldLiketCollectFromCustomer["others"]) {
			mostImportantDataWouldLiketCollectFromCustomerData += data['mostImportantDataWouldLiketCollectFromCustomer']
			data['mostImportantDataWouldLiketCollectFromCustomer'] = mostImportantDataWouldLiketCollectFromCustomerData;
		}

		let mostImportantThingWouldLIkeCustomersToKnowData = "";
		for (const prop in mostImportantThingWouldLIkeCustomersToKnow) {
			if (prop === "others") continue;
			if (mostImportantThingWouldLIkeCustomersToKnow[prop]) {
				mostImportantThingWouldLIkeCustomersToKnowData += prop;
				mostImportantThingWouldLIkeCustomersToKnowData += ","
			}
		}
		if (mostImportantThingWouldLIkeCustomersToKnow["others"]) {
			mostImportantThingWouldLIkeCustomersToKnowData += data['mostImportantThingWouldLIkeCustomersToKnow']
			data['mostImportantThingWouldLIkeCustomersToKnow'] = mostImportantThingWouldLIkeCustomersToKnowData;
		}

		let websitesAppsUsedToPostKittensData = "";
		for (const prop in websitesAppsUsedToPostKittens) {
			if (prop === "others") continue;
			if (websitesAppsUsedToPostKittens[prop]) {
				websitesAppsUsedToPostKittensData += prop;
				websitesAppsUsedToPostKittensData += ","
			}
		}
		if (websitesAppsUsedToPostKittens["others"]) {
			websitesAppsUsedToPostKittensData += data['websitesAppsUsedToPostKittens']
			data['websitesAppsUsedToPostKittens'] = websitesAppsUsedToPostKittensData;
		}
	
		data['haveCatsReceivedTitlesOrAwards'] = haveCatsReceivedTitlesOrAwards;
	
		let healthTestingConductOnCatsData = "";
		for (const prop in healthTestingConductOnCats) {
			if (prop === "others") continue;
			if (healthTestingConductOnCats[prop]) {
				healthTestingConductOnCatsData += prop;
				healthTestingConductOnCatsData += ","
			}
		}
		if (healthTestingConductOnCats["others"]) {
			healthTestingConductOnCatsData += data['healthTestingConductOnCats']
			data['healthTestingConductOnCats'] = healthTestingConductOnCatsData;
		}

		let anySuportOrAssistanceToBuyerData = "";
		for (const prop in anySuportOrAssistanceToBuyer) {
			if (prop === "others") continue;
			if (anySuportOrAssistanceToBuyer[prop]) {
				anySuportOrAssistanceToBuyerData += prop;
				anySuportOrAssistanceToBuyerData += ","
			}
		}
		if (anySuportOrAssistanceToBuyer["others"]) {
			anySuportOrAssistanceToBuyerData += data['anySuportOrAssistanceToBuyer']
			data['anySuportOrAssistanceToBuyer'] = anySuportOrAssistanceToBuyerData;
		}

		if (data['contactOrAgreementForBuyers']) {
			data['contactOrAgreementForBuyers'] = data['contactOrAgreementForBuyers'].join(",")
		}
		console.log(data)

		axios
			.post("https://topseed-django-development.up.railway.app/api/breeder-info-collection/", data)
			.then((res) => {
				console.log(res.data);
				navigate("/breeder-information-collection-submitted");
			})
			.catch((e) => {
				console.log(e);
				console.log(e.response.data);
			});
	};

	const handleOnChange = (e) => {
		setData((values) => {
			values[e.target.name] = e.target.value;
			return values;
		});
	};

	const handleUploadCatteryRegistration = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("file", e.target.files[0]);
		axios
			.post("https://breeder-nextjs-development.up.railway.app/api/s3/file-upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res.data);
				setData((values) => {
					values["catteryRegistrationFileUri"] = res.data;
					return values;
				});
			})
			.catch((e) => console.log(e));
	};

	const handleUploadSiresAndDamsRegistration = (e) => {
		e.preventDefault();
		const fileUploads = Object.values(e.target.files).map((file) => {
			let formData = new FormData();
			formData.append("file", file);
			return axios
				.post("https://breeder-nextjs-development.up.railway.app/api/s3/file-upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => res.data)
				.catch((e) => console.log(e));
		});
		Promise.all(fileUploads)
			.then((fileUris) => {
				console.log(fileUris);
				setData((values) => {
					values["siresAndDamsRegistrationFileUris"] = fileUris;
					return values;
				});
			})
			.catch((e) => console.log(e));
	};

	const handleUploadContractOrAgreementSample = (e) => {
		e.preventDefault();
		const fileUploads = Object.values(e.target.files).map((file) => {
			let formData = new FormData();
			formData.append("file", file);
			return axios
				.post("https://breeder-nextjs-development.up.railway.app/api/s3/file-upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => res.data)
				.catch((e) => console.log(e));
		});
		Promise.all(fileUploads)
			.then((fileUris) => {
				console.log(fileUris);
				setData((values) => {
					values["contactOrAgreementForBuyers"] = fileUris;
					return values;
				});
			})
			.catch((e) => console.log(e));
	};
	
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
					<div style={{ width: 420 }}>
						<SectionTitle>Cattery information</SectionTitle>
					</div>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Cattery name</Label>
						</Form.Label>
						<Form.Control name="catteryName" placeholder="Cattery name" required={true} value={data["catteryName"]} onChange={handleOnChange} />
					</Form.Group>
					{/* <Form.Group className="mb-3">
						<Form.Label>
							<Label>Cattery owner's name</Label>
						</Form.Label>
						<Form.Control style={{ marginBottom: 12 }} name="catteryOwnerName1" placeholder="Owner's name 1" required={true} onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryOwnerName2" placeholder="Owner's name 2 (Optional)" onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryOwnerName3" placeholder="Owner's name 3 (Optional)" onChange={handleOnChange}/>
					</Form.Group> */}
					{/* <Form.Group className="mb-3">
						<Form.Label>
							<Label>Cattery address</Label>
						</Form.Label>
						<Form.Control style={{ marginBottom: 12 }} name="catteryAddress1" placeholder="Cattery's address 1" required={true} onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryAddress2" placeholder="Cattery's address 2 (Optional)" onChange={handleOnChange}/>
						<Form.Control style={{ marginBottom: 12 }} name="catteryAddress3" placeholder="Cattery's address 3 (Optional)" onChange={handleOnChange}/>
					</Form.Group> */}
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Breed</Label>
						</Form.Label>
						<Form.Control style={{ marginBottom: 12 }} name="catteryBreed1" placeholder="Breed 1" required={true} onChange={handleOnChange} />
						<Form.Control style={{ marginBottom: 12 }} name="catteryBreed2" placeholder="Breed 2 (Optional)" onChange={handleOnChange} />
						<Form.Control style={{ marginBottom: 12 }} name="catteryBreed3" placeholder="Breed 3 (Optional)" onChange={handleOnChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Created since (MM-DD-YYYY)</Label>
						</Form.Label>
						<Form.Control style={{ marginBottom: 12 }} name="catteryCreatedSince" placeholder="MM-DD-YYYY" required={true} onChange={handleOnChange} />
					</Form.Group>
					{/* <Form.Group className="mb-3">
						<Form.Label>
							<Label>Upload cattery registration</Label>
						</Form.Label>
						<Form.Control type="file" size="sm" onChange={handleUploadCatteryRegistration} />
					</Form.Group> */}

					<hr />
					<div style={{ width: 420 }}>
						<SectionTitle>Breeder basic information</SectionTitle>
					</div>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Breeder's name</Label>
						</Form.Label>
						<Form.Control name="breederName" placeholder="Breeder's name" required={true} onChange={handleOnChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Breeder's email</Label>
						</Form.Label>
						<Form.Control name="breederEmail" placeholder="Breeder's email" required={true} onChange={handleOnChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Breeder's phone number (555-555-5555)</Label>
						</Form.Label>
						<Form.Control name="breederPhone" placeholder="555-555-5555" required={true} onChange={handleOnChange} />
					</Form.Group>

					<hr />
					<div style={{ width: 420 }}>
						<SectionTitle>Sires and Dams</SectionTitle>
					</div>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many Sires do you have?</Label>
						</Form.Label>
						<Form.Control name="siresCnt" placeholder="" required={true} onChange={handleOnChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many Dams do you have?</Label>
						</Form.Label>
						<Form.Control name="damsCnt" placeholder="" required={true} onChange={handleOnChange} />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How frequently do you accquire new Sires/Dams</Label>
						</Form.Label>
						<Form.Control name="frequentlyAccquireNewSiresDams" placeholder="" required={true} onChange={handleOnChange} />
					</Form.Group>
					{/* <Form.Group className="mb-3">
						<Form.Label><Label>Upload Sires and Dams regisation (multiple files)</Label></Form.Label>
						<Form.Control type="file" multiple size="sm" onChange={handleUploadSiresAndDamsRegistration}/>
					</Form.Group> */}

					<hr />
					<div style={{ width: 420 }}>
						<SectionTitle>Cattery Management</SectionTitle>
					</div>

					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many litters of kittens do you breed each year?</Label>
						</Form.Label>
						<Form.Check type="radio" id={`littersOfKittensBreedEachYear-0-5`} label={`0-5`}  checked={littersOfKittensBreedEachYear=== "0-5"} onChange={() => setLittersOfKittensBreedEachYear("0-5")} />
						<Form.Check type="radio" id={`littersOfKittensBreedEachYear-5-10`} label={`5-10`}  checked={littersOfKittensBreedEachYear=== "5-10"} onChange={() => setLittersOfKittensBreedEachYear("5-10")} />
						<Form.Check type="radio" id={`littersOfKittensBreedEachYear-10-15`} label={`10-15`}  checked={littersOfKittensBreedEachYear=== "10-15"} onChange={() => setLittersOfKittensBreedEachYear("10-15")} />
						<Form.Check type="radio" id={`littersOfKittensBreedEachYear-15-20`} label={`15-20`}  checked={littersOfKittensBreedEachYear=== "15-20"} onChange={() => setLittersOfKittensBreedEachYear("15-20")} />
						<Form.Check type="radio" id={`littersOfKittensBreedEachYear-20-25`} label={`20-25`}  checked={littersOfKittensBreedEachYear=== "20-25"} onChange={() => setLittersOfKittensBreedEachYear("20-25")} />
						<Form.Check type="radio" id={`littersOfKittensBreedEachYear-25-30`} label={`25-30`}  checked={littersOfKittensBreedEachYear=== "25-30"} onChange={() => setLittersOfKittensBreedEachYear("25-30")} />
						<Form.Check type="radio" id={`littersOfKittensBreedEachYear-30+`} label={`30+`}  checked={littersOfKittensBreedEachYear=== "30+"} onChange={() => setLittersOfKittensBreedEachYear("30+")} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What is the typical price range of kittens? </Label>
						</Form.Label>

						<Form.Check type="radio" id={`typicalPriceRangeOfKittens-0-500`} label={`0-500`}  checked={typicalPriceRangeOfKittens=== "0-500"} onChange={() => setTypicalPriceRangeOfKittens("0-500")} />
						<Form.Check type="radio" id={`typicalPriceRangeOfKittens-500-1000`} label={`500-1000`}  checked={typicalPriceRangeOfKittens=== "500-1000"} onChange={() => setTypicalPriceRangeOfKittens("500-1000")} />
						<Form.Check type="radio" id={`typicalPriceRangeOfKittens-1000-2000`} label={`1000-2000`}  checked={typicalPriceRangeOfKittens=== "1000-2000"} onChange={() => setTypicalPriceRangeOfKittens("1000-2000")} />
						<Form.Check type="radio" id={`typicalPriceRangeOfKittens-2000-3000`} label={`2000-3000`}  checked={typicalPriceRangeOfKittens=== "2000-3000"} onChange={() => setTypicalPriceRangeOfKittens("2000-3000")} />
						<Form.Check type="radio" id={`typicalPriceRangeOfKittens-3000+`} label={`3000+`}  checked={typicalPriceRangeOfKittens=== "3000+"} onChange={() => setTypicalPriceRangeOfKittens("3000+")} />

					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How long have you been involved in breeding?</Label>
						</Form.Label>

						<Form.Check type="radio" id={`howLongBeenInvolvedInBreeding-0-3`} label={`0-3`}  checked={howLongBeenInvolvedInBreeding=== "0-3"} onChange={() => setHowLongBeenInvolvedInBreeding("0-3")} />
						<Form.Check type="radio" id={`howLongBeenInvolvedInBreeding-3-6`} label={`3-6`}  checked={howLongBeenInvolvedInBreeding=== "3-6"} onChange={() => setHowLongBeenInvolvedInBreeding("3-6")} />
						<Form.Check type="radio" id={`howLongBeenInvolvedInBreeding-6-10`} label={`6-10`}  checked={howLongBeenInvolvedInBreeding=== "6-10"} onChange={() => setHowLongBeenInvolvedInBreeding("6-10")} />
						<Form.Check type="radio" id={`howLongBeenInvolvedInBreeding-10+`} label={`10+`}  checked={howLongBeenInvolvedInBreeding=== "10+"} onChange={() => setHowLongBeenInvolvedInBreeding("10+")} />

					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>How many kittens have you successfully placed in new homes? (per year)</Label>
						</Form.Label>
						
						<Form.Check type="radio" id={`kittensSuccessfullyPlacedInNewHomesPerYear-0-5`} label={`0-5`}  checked={kittensSuccessfullyPlacedInNewHomesPerYear=== "0-5"} onChange={() => setKittensSuccessfullyPlacedInNewHomesPerYear("0-5")} />
						<Form.Check type="radio" id={`kittensSuccessfullyPlacedInNewHomesPerYear-5-10`} label={`5-10`}  checked={kittensSuccessfullyPlacedInNewHomesPerYear=== "5-10"} onChange={() => setKittensSuccessfullyPlacedInNewHomesPerYear("5-10")} />
						<Form.Check type="radio" id={`kittensSuccessfullyPlacedInNewHomesPerYear-10-15`} label={`10-15`}  checked={kittensSuccessfullyPlacedInNewHomesPerYear=== "10-15"} onChange={() => setKittensSuccessfullyPlacedInNewHomesPerYear("10-15")} />
						<Form.Check type="radio" id={`kittensSuccessfullyPlacedInNewHomesPerYear-15-20`} label={`15-20`}  checked={kittensSuccessfullyPlacedInNewHomesPerYear=== "15-20"} onChange={() => setKittensSuccessfullyPlacedInNewHomesPerYear("15-20")} />
						<Form.Check type="radio" id={`kittensSuccessfullyPlacedInNewHomesPerYear-20-25`} label={`20-25`}  checked={kittensSuccessfullyPlacedInNewHomesPerYear=== "20-25"} onChange={() => setKittensSuccessfullyPlacedInNewHomesPerYear("20-25")} />
						<Form.Check type="radio" id={`kittensSuccessfullyPlacedInNewHomesPerYear-25+`} label={`25+`}  checked={kittensSuccessfullyPlacedInNewHomesPerYear=== "25+"} onChange={() => setKittensSuccessfullyPlacedInNewHomesPerYear("25+")} />

					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Have you ever been Scammed? And what kind of scam? (please put N/A if the question doesn't apply to you.)</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="haveEverBeenScammed" placeholder="" required={true} onChange={handleOnChange} />
					</Form.Group>
					{/* <Form.Group className="mb-3">
						<Form.Label>
							<Label>Have you ever engaged in a dispute with a purchaser regarding the well-being of a kitten? (please put N/A if the question doesn't apply to you.)</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="haveEverEngagedInADispute" placeholder="" required={true} onChange={handleOnChange} />
					</Form.Group> */}
					{/* <Form.Group className="mb-3">
						<Form.Label>
							<Label>What has been the most challenging experience you have faced to manage the cattery? (please put N/A if the question doesn't apply to you.)</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="mostChallengingExperienceToManageTheCattery" placeholder="" required={true} onChange={handleOnChange} />
					</Form.Group> */}
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What is the most important data you would like to collect from your customers? (please pick 3)</Label>
						</Form.Label>

						<Form.Check type="checkbox" id={`mostImportantDataWouldLiketCollectFromCustomer-personalAndHouseholdInformation`} label={`Personal and Household Information(Household Details, Allergies, experience with Pets)`}  checked={mostImportantDataWouldLiketCollectFromCustomer["personalAndHouseholdInformation"]} onChange={() => setMostImportantDataWouldLiketCollectFromCustomer(state => ({...state, "personalAndHouseholdInformation": !state["personalAndHouseholdInformation"] }))} />
						<Form.Check type="checkbox" id={`mostImportantDataWouldLiketCollectFromCustomer-adoptionMotivation`} label={`Adoption Motivation`}  checked={mostImportantDataWouldLiketCollectFromCustomer["adoptionMotivation"]} onChange={() => setMostImportantDataWouldLiketCollectFromCustomer(state => ({...state, "adoptionMotivation": !state["adoptionMotivation"] }))} />
						<Form.Check type="checkbox" id={`mostImportantDataWouldLiketCollectFromCustomer-financialConsideration`} label={`Financial Consideration`}  checked={mostImportantDataWouldLiketCollectFromCustomer["financialConsideration"]} onChange={() => setMostImportantDataWouldLiketCollectFromCustomer(state => ({...state, "financialConsideration": !state["financialConsideration"] }))} />
						<Form.Check type="checkbox" id={`mostImportantDataWouldLiketCollectFromCustomer-expectationsAndPreferences`} label={`Expectations and Preferences`}  checked={mostImportantDataWouldLiketCollectFromCustomer["expectationsAndPreferences"]} onChange={() => setMostImportantDataWouldLiketCollectFromCustomer(state => ({...state, "expectationsAndPreferences": !state["expectationsAndPreferences"] }))} />
						<Form.Check type="checkbox" id={`mostImportantDataWouldLiketCollectFromCustomer-livingEnviroment`} label={`Living Environment`}  checked={mostImportantDataWouldLiketCollectFromCustomer["livingEnviroment"]} onChange={() => setMostImportantDataWouldLiketCollectFromCustomer(state => ({...state, "livingEnviroment": !state["livingEnviroment"] }))} />
						<Form.Check type="checkbox" id={`mostImportantDataWouldLiketCollectFromCustomer-others`} label={`Others`}  checked={mostImportantDataWouldLiketCollectFromCustomer["others"]} onChange={() => setMostImportantDataWouldLiketCollectFromCustomer(state => ({...state, "others": !state["others"] }))} />
						{mostImportantDataWouldLiketCollectFromCustomer["others"] && <Form.Control as="textarea" rows={3} name="mostImportantDataWouldLiketCollectFromCustomer" placeholder="" onChange={handleOnChange} />}

					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What is the most important thing you would like your customers to know?</Label>
						</Form.Label>

						<Form.Check type="checkbox" id={`mostImportantThingWouldLIkeCustomersToKnow-feedingAndCareInstructions`} label={`Feeding and Care Instructions`}  checked={mostImportantThingWouldLIkeCustomersToKnow["feedingAndCareInstructions"]} onChange={() => setMostImportantThingWouldLIkeCustomersToKnow(state => ({...state, "feedingAndCareInstructions": !state["feedingAndCareInstructions"] }))} />
						<Form.Check type="checkbox" id={`mostImportantThingWouldLIkeCustomersToKnow-documentation`} label={`Documentation`}  checked={mostImportantThingWouldLIkeCustomersToKnow["documentation"]} onChange={() => setMostImportantThingWouldLIkeCustomersToKnow(state => ({...state, "documentation": !state["documentation"] }))} />
						<Form.Check type="checkbox" id={`mostImportantThingWouldLIkeCustomersToKnow-vaccinatioinRecord`} label={`Vaccination record`}  checked={mostImportantThingWouldLIkeCustomersToKnow["vaccinatioinRecord"]} onChange={() => setMostImportantThingWouldLIkeCustomersToKnow(state => ({...state, "vaccinatioinRecord": !state["vaccinatioinRecord"] }))} />
						<Form.Check type="checkbox" id={`mostImportantThingWouldLIkeCustomersToKnow-microchipInformation`} label={`Microchip information`}  checked={mostImportantThingWouldLIkeCustomersToKnow["microchipInformation"]} onChange={() => setMostImportantThingWouldLIkeCustomersToKnow(state => ({...state, "microchipInformation": !state["microchipInformation"] }))} />
						<Form.Check type="checkbox" id={`mostImportantThingWouldLIkeCustomersToKnow-healthCertification`} label={`Health certification`}  checked={mostImportantThingWouldLIkeCustomersToKnow["healthCertification"]} onChange={() => setMostImportantThingWouldLIkeCustomersToKnow(state => ({...state, "healthCertification": !state["healthCertification"] }))} />
						<Form.Check type="checkbox" id={`mostImportantThingWouldLIkeCustomersToKnow-booldTestRecord`} label={`Blood test record`}  checked={mostImportantThingWouldLIkeCustomersToKnow["booldTestRecord"]} onChange={() => setMostImportantThingWouldLIkeCustomersToKnow(state => ({...state, "booldTestRecord": !state["booldTestRecord"] }))} />
						<Form.Check type="checkbox" id={`mostImportantThingWouldLIkeCustomersToKnow-fiveGenerationPedigreeCertificate`} label={`Five-Generation Pedigree Certificate`}  checked={mostImportantThingWouldLIkeCustomersToKnow["fiveGenerationPedigreeCertificate"]} onChange={() => setMostImportantThingWouldLIkeCustomersToKnow(state => ({...state, "fiveGenerationPedigreeCertificate": !state["fiveGenerationPedigreeCertificate"] }))} />
						<Form.Check type="checkbox" id={`mostImportantThingWouldLIkeCustomersToKnow-others`} label={`Others`}  checked={mostImportantThingWouldLIkeCustomersToKnow["others"]} onChange={() => setMostImportantThingWouldLIkeCustomersToKnow(state => ({...state, "others": !state["others"] }))} />
						
						{mostImportantThingWouldLIkeCustomersToKnow["others"] && <Form.Control as="textarea" rows={3} name="mostImportantThingWouldLIkeCustomersToKnow" placeholder="" required={true} onChange={handleOnChange} />}

					</Form.Group>
					{/* <Form.Group className="mb-3">
						<Form.Label>
							<Label>What type of data would assist you in improving the management of the cattery? (please put N/A if the question doesn't apply to you.)</Label>
						</Form.Label>
						<Form.Control as="textarea" rows={3} name="typeOfDataWouldImprovingTheManagementOfTheCattery" placeholder="" required={true} onChange={handleOnChange} />
					</Form.Group> */}
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>List all the websites/apps you used to post your kittens.</Label>
						</Form.Label>

						<Form.Check type="checkbox" id={`websitesAppsUsedToPostKittens-instagram`} label={`Instagram`}  checked={websitesAppsUsedToPostKittens["instagram"]} onChange={() => setWebsitesAppsUsedToPostKittens(state => ({...state, "instagram": !state["instagram"] }))} />
						<Form.Check type="checkbox" id={`websitesAppsUsedToPostKittens-facebook`} label={`Facebook`}  checked={websitesAppsUsedToPostKittens["facebook"]} onChange={() => setWebsitesAppsUsedToPostKittens(state => ({...state, "facebook": !state["facebook"] }))} />
						<Form.Check type="checkbox" id={`websitesAppsUsedToPostKittens-tiktok`} label={`TikTok`}  checked={websitesAppsUsedToPostKittens["tiktok"]} onChange={() => setWebsitesAppsUsedToPostKittens(state => ({...state, "tiktok": !state["tiktok"] }))} />
						<Form.Check type="checkbox" id={`websitesAppsUsedToPostKittens-catteryWebsite`} label={`Cattery Website`}  checked={websitesAppsUsedToPostKittens["catteryWebsite"]} onChange={() => setWebsitesAppsUsedToPostKittens(state => ({...state, "catteryWebsite": !state["catteryWebsite"] }))} />
						<Form.Check type="checkbox" id={`websitesAppsUsedToPostKittens-others`} label={`Others`}  checked={websitesAppsUsedToPostKittens["others"]} onChange={() => setWebsitesAppsUsedToPostKittens(state => ({...state, "others": !state["others"] }))} />

						{websitesAppsUsedToPostKittens["others"] && <Form.Control as="textarea" rows={3} name="websitesAppsUsedToPostKittens" placeholder="" required={true} onChange={handleOnChange} />}

					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Have any of your breeding cats or their offspring received titles or awards?</Label>
						</Form.Label>

						<Form.Check type="checkbox" id={`haveCatsReceivedTitlesOrAwards`} label={`Yes/No`}  checked={haveCatsReceivedTitlesOrAwards} onChange={() => setHaveCatsReceivedTitlesOrAwards(state => !state)} />

					</Form.Group>
					
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>What health testing do you conduct on your breeding cats? Please specify the tests performed and any certifications obtained.</Label>
						</Form.Label>

						<Form.Check type="checkbox" id={`healthTestingConductOnCats-bloodTest`} label={`Blood Test`}  checked={healthTestingConductOnCats["bloodTest"]} onChange={() => setHealthTestingConductOnCats(state => ({...state, "bloodTest": !state["bloodTest"] }))} />
						<Form.Check type="checkbox" id={`healthTestingConductOnCats-geneticTest`} label={`Genetic Testing`}  checked={healthTestingConductOnCats["geneticTest"]} onChange={() => setHealthTestingConductOnCats(state => ({...state, "geneticTest": !state["geneticTest"] }))} />
						<Form.Check type="checkbox" id={`healthTestingConductOnCats-felvfivfip`} label={`FeLV/FIV/FIP`}  checked={healthTestingConductOnCats["felvfivfip"]} onChange={() => setHealthTestingConductOnCats(state => ({...state, "felvfivfip": !state["felvfivfip"] }))} />
						<Form.Check type="checkbox" id={`healthTestingConductOnCats-heartWormTest`} label={`xHeartworm Test`}  checked={healthTestingConductOnCats["heartWormTest"]} onChange={() => setHealthTestingConductOnCats(state => ({...state, "heartWormTest": !state["heartWormTest"] }))} />
						<Form.Check type="checkbox" id={`healthTestingConductOnCats-hipDysplasiaScreening`} label={`Hip Dysplasia Screening`}  checked={healthTestingConductOnCats["hipDysplasiaScreening"]} onChange={() => setHealthTestingConductOnCats(state => ({...state, "hipDysplasiaScreening": !state["hipDysplasiaScreening"] }))} />
						<Form.Check type="checkbox" id={`healthTestingConductOnCats-hypertrophicCardiomyopathyScreening`} label={`Hypertrophic Cardiomyopathy (HCM) Screening`}  checked={healthTestingConductOnCats["hypertrophicCardiomyopathyScreening"]} onChange={() => setHealthTestingConductOnCats(state => ({...state, "hypertrophicCardiomyopathyScreening": !state["hypertrophicCardiomyopathyScreening"] }))} />
						<Form.Check type="checkbox" id={`healthTestingConductOnCats-polycysticKidneyDiseaseTest`} label={`Polycystic Kidney Disease (PKD) Test`}  checked={healthTestingConductOnCats["polycysticKidneyDiseaseTest"]} onChange={() => setHealthTestingConductOnCats(state => ({...state, "polycysticKidneyDiseaseTest": !state["polycysticKidneyDiseaseTest"] }))} />
						<Form.Check type="checkbox" id={`healthTestingConductOnCats-others`} label={`Others`}  checked={healthTestingConductOnCats["others"]} onChange={() => setHealthTestingConductOnCats(state => ({...state, "others": !state["others"] }))} />

						{healthTestingConductOnCats["others"] && <Form.Control as="textarea" rows={3} name="healthTestingConductOnCats" placeholder="" required={true} onChange={handleOnChange} />}

					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Do you have a contract or agreement for buyers?</Label>
						</Form.Label>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Upload samples</Label>
						</Form.Label>
						<Form.Control type="file" size="sm" onChange={handleUploadContractOrAgreementSample} />
					</Form.Group>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>
							<Label>Do you offer any support or assistance to kitten buyers after they take their kittens home?</Label>
						</Form.Label>


						<Form.Check type="checkbox" id={`anySuportOrAssistanceToBuyer-postAdoptionSupport`} label={`Post-Adoption Support(First week daily follow-up)`}  checked={anySuportOrAssistanceToBuyer["postAdoptionSupport"]} onChange={() => setAnySuportOrAssistanceToBuyer(state => ({...state, "postAdoptionSupport": !state["postAdoptionSupport"] }))} />
						<Form.Check type="checkbox" id={`anySuportOrAssistanceToBuyer-guidanceAndInformation`} label={`Guidance and Information (feeding and care)`}  checked={anySuportOrAssistanceToBuyer["guidanceAndInformation"]} onChange={() => setAnySuportOrAssistanceToBuyer(state => ({...state, "guidanceAndInformation": !state["guidanceAndInformation"] }))} />
						<Form.Check type="checkbox" id={`anySuportOrAssistanceToBuyer-welcomeKit`} label={`Welcome Kit (new owner starter pack, toys, food)`}  checked={anySuportOrAssistanceToBuyer["welcomeKit"]} onChange={() => setAnySuportOrAssistanceToBuyer(state => ({...state, "welcomeKit": !state["welcomeKit"] }))} />
						<Form.Check type="checkbox" id={`anySuportOrAssistanceToBuyer-healthcare`} label={`Healthcare (Medicine)`}  checked={anySuportOrAssistanceToBuyer["healthcare"]} onChange={() => setAnySuportOrAssistanceToBuyer(state => ({...state, "healthcare": !state["healthcare"] }))} />
						<Form.Check type="checkbox" id={`anySuportOrAssistanceToBuyer-others`} label={`Others`}  checked={anySuportOrAssistanceToBuyer["others"]} onChange={() => setAnySuportOrAssistanceToBuyer(state => ({...state, "others": !state["others"] }))} />
						
						{anySuportOrAssistanceToBuyer["others"] && <Form.Control as="textarea" rows={3} name="anySuportOrAssistanceToBuyer" placeholder="" required={true} onChange={handleOnChange} />}
						
					</Form.Group>
					{/* <Form.Group className="mb-3">
						<Form.Label>
							<Label>How many breeding cats do you currently own? (please put N/A if the question doesn't apply to you.)</Label>
						</Form.Label>
						<Form.Control name="breedingCatsCurrentlyOwn" placeholder="" required={true} onChange={handleOnChange} />
					</Form.Group> */}

					<hr />
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
