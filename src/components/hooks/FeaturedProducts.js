import React, { useState, useEffect } from "react";
import { baseUrl } from "../settings/Api";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../images/image-1.jpg";

function FeaturedProducts() {
	const [productsData, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		await fetch(baseUrl + "/products/")
			.then((response) => {
				if (!response.ok) {
					throw Error(
						"An error has occurred in our database, please return later"
					);
				}
				return response.json();
			})
			.then((json) => setData(json))
			.catch((err) => {
				setError(err.message);
			});
	};

	const productsDataFiltered = productsData.filter(
		(product) => product.featured === true
	);

	return (
		<>
			<div className="featuredProducts">
				{error && <div className="error">{error}</div>}
				{productsDataFiltered.map((product) => (
					<Card key={product.id}>
						<div className="box-image">
							{product.image === null || undefined ? (
								<Card.Img variant="top" src={image1} />
							) : (
								<Card.Img
									variant="top"
									src={baseUrl + product.image.formats.medium.url}
								/>
							)}
						</div>

						<Card.Body key={product.price}>
							<Card.Title>{product.title}</Card.Title>
							<Card.Text>kr {product.price}</Card.Text>
							<Link to={`/products/${product.id}`} key={product.price}>
								<Button variant="primary">Go to product</Button>
							</Link>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
}

export default FeaturedProducts;
