import React, { useState, useEffect } from "react";
import { baseUrl } from "../settings/Api";
import AllProducts from "../common/AllProducts";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
						<div className="box-image">
							<Card.Img
								variant="top"
								src={baseUrl + product.image.formats.medium.url}
							/>
						</div>
						<Card.Body>
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
