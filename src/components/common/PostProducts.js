import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import AdminLogin from "./AdminLogin";

function PostProducts() {
	const [details, setDetails] = useState({ title: "", description: "" });

	const submitHandler = (e) => {
		e.preventDefault();
		Post(details);
		console.log("fileUpload.handleChange e.target", e.target);
	};

	const [product, setProduct] = useState({
		title: "",
		description: "",
		url: baseUrl + "/products/",
		data: {},
		// login: false,
		// token: "",
	});

	if (product.status === 200) {
		alert("successfully created new Product");
		window.locatiom = window.location.href;
	}

	const [error, setError] = useState("");

	const Post = (details) => {
		console.log(details);

		fetch(baseUrl + "/products/", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				title: details.title,
				description: details.description,
			}),
		}).then((response) => {
			response.json().then((result) => {
				if (result.message) {
					console.log("wrong credentials");
					setError("Wrong credentials");
				} else {
					localStorage.setItem(
						"setProduct",
						JSON.stringify({
							// post: true,
							// token: result.jwt,
						})
					);

					console.log("setProduct");
					setProduct({
						title: details.title,
						description: details.description,
						// post: true,
						// token: result.jwt,
					});
				}
			});
		});
	};

	return (
		<>
			<div>
				<Form onSubmit={submitHandler}>
					<Form.Group controlId="title">
						<Form.Label>Name of Product</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter title"
							onChange={(e) =>
								setDetails({ ...details, title: e.target.value })
							}
							value={details.title}
						/>
					</Form.Group>

					<Form.Group>
						<Form.File id="addImage" label="Add Image here" />
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
					<Form>
						<Form.Group controlId="price">
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								placeholder="Write the price of the product"
								onChange={(e) =>
									setDetails({ ...details, price: e.target.value })
								}
								value={details.price}
							/>
						</Form.Group>
					</Form>

					<Button
						variant="primary"
						type="submit"
						onClick={submitHandler}
						className="submitButton"
					>
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
}

export default PostProducts;
