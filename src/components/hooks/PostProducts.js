import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { baseUrl } from "../settings/Api";

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
	const [file, setFile] = useState(null);

	const handleChange = (e) => {
		e.preventDefault();
		console.log("PostProducts.handleChange e.target.files", e.target.files);

		setFile({ file: e.target.files[0] });
	};

	// Post all products
	const submitHandler = (e) => {
		e.preventDefault();
		Post(details);
		PostImage(file);

		console.log(
			"PostProducts.handleSubmitImage e.target.files",
			e.target.files
		);
	};

	const PostImage = (file) => {
		console.log(file);
		const formData = new FormData();
		formData.append("files", file);

		fetch(baseUrl + "/upload", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${getToken.token}`,
			},
			body: JSON.stringify({
				image: file,
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
						image: file.image,
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
		console.log(details);
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
					console.log("setDetails");

					setDetails({
						title: details.title,
						description: details.description,
						price: details.price,
						featured: details.feature,
					});
				}
			});
		});
	};

	return (
		<>
			{error && <div className="error">{error}</div>}
			<Form className="add-page" onSubmit={submitHandler}>
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
							// onSubmit={handleSubmitImage}
							id="basic-url"
							label="Add Image here"
							onChange={handleChange}
							placeholder="add image url here"
							type="file"
						/>
						{/* <Button onClick={handleSubmitImage}>Submit Image</Button> */}
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
