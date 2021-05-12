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

	const [toggle, setToggle] = useState(false);

	const toggler = () => {
		toggle ? setToggle(false) : setToggle(true);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		Post(details, toggler);
	};

	const handleSubmitImage = (e) => {
		e.preventDefault();
		console.log("addImage.handleSubmitImage e.target.files", e.target.files);
	};

	const handleChange = (e) => {
		console.log("addImage.handleSubmitImage e.target.files");
	};

	// useEffect(() => {
	// 	Post(details);
	// }, []);

	// const [product, setProduct] = useState({
	// 	title: "",
	// 	description: "",
	// 	url: baseUrl + "/products/",
	// 	data: {},
	// });

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

	const Post = (details, toggler) => {
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
				featured: details.featured ? setToggle(false) : setToggle(true),
				// image: {
				// 	formats: { medium: { url: details.image.formats.medium.url } },
				// },
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
						featured: details.featured ? setToggle(false) : setToggle(true),

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
					<InputGroup className="addImage">
						<FormControl
							onSubmit={handleSubmitImage}
							id="basic-url"
							label="Add Image here"
							onChange={handleChange}
							placeholder="add image url here"
							type="file"
						/>
						<Button onClick={handleChange}>Submit Image</Button>
					</InputGroup>

					{/* <Form.File
						id="addImage"
						label="Add Image here"
						type="image"
						placeholder="Enter title"
						onChange={(e) => setDetails({ ...details, image: e.target.value })}
						value={details.image}
					/> */}
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
								// onClick={toggler}
								onChange={(e) => setToggle(toggle)}
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
