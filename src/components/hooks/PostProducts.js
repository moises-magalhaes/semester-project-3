import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { baseUrl } from "../settings/Api";

function PostProducts() {
	const [details, setDetails] = useState({
		title: "",
		description: "",
		price: "",
		image: [],
		formats: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();
		Post(details);
	};

	// useEffect(() => {
	// 	Post(details);
	// }, []);

	const [product, setProduct] = useState({
		title: "",
		description: "",
		url: baseUrl + "/products/",
		data: {},
	});

	// if (product.status === 200) {
	// 	alert("successfully created new Product");
	// 	window.location = window.location.href;
	// }

	const [error, setError] = useState("");

	//fetch from LocalStorage
	const keyFromLocalStorage = JSON.parse(localStorage.getItem("login") || "[]");

	const [getToken, setGetToken] = useState([keyFromLocalStorage]);

	useEffect(() => {
		const value = localStorage.getItem("login");
		if (value) {
			setGetToken(JSON.parse(value));
		}
	}, []);

	const Post = (details) => {
		console.log(details);

		fetch(baseUrl + "/products/", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${getToken.token}`,
			},
			body: JSON.stringify({
				title: details.title,
				description: details.description,
				price: details.price,
				// image: {
				// 	formats: { medium: { url: details.image.formats.medium.url } },
				// },
			}),
		}).then((response) => {
			response.json().then((result) => {
				if (result.message) {
					console.log(error, "wrong credentials");
					setError(error, "Wrong credentials");
				} else {
					localStorage.setItem("setProduct", JSON.stringify({}));
					console.log("setProduct");

					setProduct({
						title: details.title,
						description: details.description,
						price: details.price,
						// image: {
						// 	formats: { medium: { url: details.image.formats.medium.url } },
						// },
					});
				}
			});
		});
	};

	return (
		<>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="title">
					<Form.Label>Name of Product</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter title"
						onChange={(e) => setDetails({ ...details, title: e.target.value })}
						value={details.title}
					/>
				</Form.Group>

				<Form.Group>
					<Form.File
						id="addImage"
						label="Add Image here"
						type="image"
						placeholder="Enter title"
						onChange={(e) => setDetails({ ...details, image: e.target.value })}
						value={details.image}
					/>
				</Form.Group>
				<Form.Group controlId="textArea">
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="textarea"
						placeholder="Write the product description here"
						onChange={(e) =>
							setDetails({ ...details, description: e.target.value })
						}
						value={details.description}
					/>
				</Form.Group>

				<Form.Group controlId="price">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						placeholder="Write the price of the product"
						onChange={(e) => setDetails({ ...details, price: e.target.value })}
						value={details.price}
					/>
				</Form.Group>

				<Button
					variant="primary"
					type="submit"
					onClick={submitHandler}
					className="submitButton"
				>
					Submit
				</Button>
			</Form>
		</>
	);
}

export default PostProducts;
