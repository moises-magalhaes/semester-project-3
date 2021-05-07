import React, { useState, useEffect } from "react";
import { baseUrl } from "../settings/Api";
import AllProducts from "../common/AllProducts";
import { Button, Card } from "react-bootstrap";

function FeaturedProducts() {
	const [productsData, setData] = useState([]);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		await fetch(baseUrl + "/products/")
			.then((response) => response.json())
			.then((json) => setData(json));
	};

	const productsDataFiltered = productsData.filter(
		(product) => product.featured === true
	);

	return (
		<>
			<div className="featuredProducts">
				{productsDataFiltered.map((product) => (
					<Card>
						<Card.Img
							variant="top"
							src={baseUrl + product.image.formats.medium.url}
						/>
						<Card.Body>
							<Card.Title>{product.title}</Card.Title>
							<Card.Text>kr {product.price}</Card.Text>
							<Button variant="primary">Go to product</Button>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
}

export default FeaturedProducts;
