import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { baseUrl } from "../settings/Api";
import { useHistory } from "react-router";

function Edit() {
	const [details, setDetails] = useState({
		title: "",
		description: "",
		price: "",
		image: [],
		id: "",
	});

	//featured product
	const [toggle, setToggle] = useState(false);
	const [error, setError] = useState("");

	const history = useHistory();

	const { id } = useParams();

	if (!id) {
		document.location.href = "/admin";
	}

	const submitHandler = (e) => {
		e.preventDefault();
		EditProduct(details);
		alert("product edited");
	};

	const handleDelete = (e) => {
		e.preventDefault();

		if (window.confirm("Are you sure you wish to delete this item?")) {
			deleteProduct();
			history.push("/admin");
			alert("product deleted");
		}
	};

	//fetch from LocalStorage
	const keyFromLocalStorage = JSON.parse(localStorage.getItem("login") || "[]");

	const [getToken, setGetToken] = useState([keyFromLocalStorage]);

	useEffect(() => {
		const value = localStorage.getItem("login");
		if (value) {
			setGetToken(JSON.parse(value));
			// console.log(getToken.token);
		}
	}, [getToken.token]);

	//edit product
	const EditProduct = (details) => {
		// console.log(details);
		toggle ? setToggle(true) : setToggle(false);

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
				id: details.id,
				feature: toggle,
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
						id: details.id,
						feature: details.feature,
					});
				}
			});
		});
	};

	//delete product
	const deleteProduct = (details) => {
		fetch(baseUrl + `/products/${id}`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${getToken.token}`,
			},
		}).then((response) => {
			response.json().then((result) => {
				if (result.message) {
					console.log(error, "wrong credentials");
					setError(error, "Wrong credentials");
				} else {
					localStorage.setItem("setDetails", JSON.stringify({}));
					setDetails({
						id: details.id,
					});
				}
			});
		});
	};

	return (
		<div className="container edit-products-page">
			{id === undefined ? (
				history.push("/admin")
			) : (
				<>
					<h1>Edit Product</h1>
					<Form>
						<Form.Group>
							<Form.Label>Id of Product</Form.Label>
							<Form.Control
								id="ProductId"
								placeholder={details.id}
								defaultValue={details.id}
								readOnly
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Name of Product</Form.Label>
							<Form.Control
								id="title"
								onChange={(e) =>
									setDetails({ ...details, title: e.target.value })
								}
								defaultValue={details.title}
								placeholder={details.title}
							/>
						</Form.Group>

						<Form.Group>
							<Form.File
								id="image"
								onChange={(e) =>
									setDetails({ ...details, image: e.target.value })
								}
								defaultValue={details.image}
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control
								id="description"
								onChange={(e) =>
									setDetails({ ...details, description: e.target.value })
								}
								placeholder={details.description}
								defaultValue={details.description}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control
								id="price"
								onChange={(e) =>
									setDetails({ ...details, price: e.target.value })
								}
								placeholder={details.price}
								defaultValue={details.price}
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
										placeholder={details.feature}
										defaultValue={details.feature}
									/>
								</div>
							))}
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
							variant="secondary"
							type="submit"
							className="submitButton"
							onClick={handleDelete}
						>
							Delete
						</Button>
					</Form>
				</>
			)}
		</div>
	);
}

export default Edit;
