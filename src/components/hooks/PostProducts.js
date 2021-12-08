import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import axios from "axios";

function PostProducts() {
	const [details, setDetails] = useState({
		title: "",
		description: "",
		price: "",
		featured: false,
		image: [],
	});

	//featured product
	const [toggle, setToggle] = useState(false);

	//Post image
	const [files, setFiles] = useState({ image: [] });

	// const handleImage = (e) => {
	// 	e.preventDefault();
	// 	const formData = new FormData();

	// 	axios
	// 		.post("http://localhost:1337/upload")
	// 		.then((response) => {
	// 			const imageId = response.data[0].id;

	// 			axios
	// 				.post("http://localhost:1337/products", { image: imageId })
	// 				.then((response) => {
	// 					console.log("correct: ", response);
	// 				})
	// 				.catch((error) => {
	// 					console.error("Error adding document: ", error);
	// 				});
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error adding document: ", error);
	// 		});
	// 	// setFiles({ files: e.target.files });
	// 	formData.append("files", files[0]);

	// 	console.log("PostProducts.handleImage e.target.files", e.target.files);
	// };

	// Post all products
	const submitHandler = (e) => {
		e.preventDefault();
		Post(details);
		PostImage(files);
	};

	const PostImage = (files) => {
		console.log(files);

		const formData = new FormData();
		formData.append("files", files);

		fetch(baseUrl + "/upload", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${getToken.token}`,
			},
			body: JSON.stringify({
				image: files,
			}),

			data: formData,
		}).then((response) => {
			response.json().then((result) => {
				if (result.message) {
					setError(error, "Wrong credentials");
				} else {
					localStorage.setItem("setDetails", JSON.stringify({}));
					console.log("setDetails");

					setDetails({
						image: details.image,
					});
				}
			});
		});
	};

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
		toggle ? setToggle(true) : setToggle(false);

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
				featured: toggle,
			}),
		}).then((response) => {
			response.json().then((result) => {
				if (result.message) {
					setError(error, "Wrong credentials");
				} else {
					localStorage.setItem("setDetails", JSON.stringify({}));

					setDetails({
						title: details.title,
						description: details.description,
						price: details.price,
						featured: details.feature,
						image: files.image,
					});
				}
			});
		});
	};

	return (
		<>
			{error && <div className="error">{error}</div>}
			<Form className="add-products-form" onSubmit={submitHandler}>
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
					<label htmlFor="basic-url">Add Image URL</label>
					<InputGroup className="PostProducts addImage">
						<FormControl
							id="basic-url"
							label="Add Image here"
							onChange={(e) => setFiles({ ...files, image: e.target.value })}
							placeholder="add image here"
							type="files"
							name={details.title}
						/>
					</InputGroup>
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

				<Form.Group controlId="featured">
					{["switch"].map((type) => (
						<div key={`default-${type}`} className="feature">
							<Form.Check
								type={type}
								id={`default-${type}`}
								label="feature Product"
								onChange={(e) => setToggle((prevState) => !prevState)}
								value={details.feature}
							/>
						</div>
					))}
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
