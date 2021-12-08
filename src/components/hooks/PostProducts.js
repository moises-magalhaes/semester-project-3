import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
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
	const [error, setError] = useState("");

	// Post all products
	const submitHandler = (e) => {
		e.preventDefault();
		Post(details);
	};
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

		//adding both image and info at once
		const url = baseUrl + "/products";
		const formData = new FormData();
		const image = details.image;

		const data = JSON.stringify({
			title: details.title,
			description: details.description,
			price: details.price,
			featured: toggle,
		});

		//single image
		formData.append("files.image", image);
		formData.append("data", data);

		const options = {
			method: "POST",
			body: formData,
			headers: {
				//no content-type, to inherit the header automatically
				Authorization: `Bearer ${getToken.token}`,
			},
		};

		fetch(url, options).then((response) => {
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

				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>add file here</Form.Label>
					<Form.Control
						label="Add Image here"
						onChange={(e) =>
							setDetails({ ...details, image: e.target.files[0] })
						}
						placeholder="add image here"
						type="file"
						name={details.image}
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
