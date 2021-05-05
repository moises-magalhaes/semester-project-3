import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { baseUrl } from "../settings/Api";

function Edit() {
	const [details, setDetails] = useState({
		title: "",
		description: "",
		price: "",
		image: [],
	});

	const { id } = useParams();

	// useEffect(() => {
	// 	Edit(details);
	// }, []);

	if (!id) {
		document.location.href = "/";
	}

	const submitHandler = (e) => {
		e.preventDefault();
		Edit(details);
	};

	const [error, setError] = useState("");

	//fetch from LocalStorage
	const keyFromLocalStorage = JSON.parse(localStorage.getItem("login") || "[]");

	const [getToken, setGetToken] = useState([keyFromLocalStorage]);

	useEffect(() => {
		const value = localStorage.getItem("login");
		if (value) {
			setGetToken(JSON.parse(value));
			console.log(getToken.token);
		}
	}, []);

	const Edit = (details) => {
		console.log(details);

		fetch(baseUrl + `/products/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${getToken.token}`,
			},
			body: JSON.stringify({
				title: details.title,
				description: details.description,
				price: details.price,
				// image: { formats: { medium: details.image.formats.medium } },
				id: details.id,
			}),
		}).then((response) => {
			response.json().then((result) => {
				if (result.message) {
					console.log(error, "wrong credentials");
					setError(error, "Wrong credentials");
				} else {
					localStorage.setItem("setDetails", JSON.stringify({}));

					console.log("setProduct");
					setDetails({
						title: details.title,
						description: details.description,
						price: details.price,
						// image: { formats: { medium: details.image.formats.medium } },
						id: details.id,
					});
				}
			});
		});
	};

	return (
		<div className="container">
			<Form>
				<Form.Group>
					<Form.Label>Id of Product</Form.Label>
					<Form.Control id="ProductId" />
				</Form.Group>

				<Form.Group>
					<Form.Label>Name of Product</Form.Label>
					<Form.Control
						id="title"
						onChange={(e) => setDetails({ ...details, title: e.target.value })}
						value={details.title}
					/>
				</Form.Group>

				<Form.Group>
					<Form.File
						id="image"
						// onChange={(e) => setDetails({ ...details, image: e.target.value })}
						// value={details.image}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						id="description"
						onChange={(e) =>
							setDetails({ ...details, description: e.target.value })
						}
						value={details.description}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control
						id="price"
						onChange={(e) => setDetails({ ...details, price: e.target.value })}
						value={details.price}
					/>
				</Form.Group>

				<Button
					variant="primary"
					type="submit"
					className="submitButton"
					onClick={submitHandler}
				>
					Update
				</Button>

				<Button
					variant="primary"
					type="submit"
					className="submitButton"
					onClick={submitHandler}
				>
					Delete
				</Button>
			</Form>
		</div>
	);
}

export default Edit;
