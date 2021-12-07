import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { baseUrl } from "../settings/Api";

function AdminProducts() {
	const [productsData, setData] = useState([]);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		await fetch(baseUrl + "/products/")
			.then((response) => response.json())
			.then((json) => setData(json));
	};

	return (
		<>
			<div className="edit-container">
				<h1>Products added</h1>

				<div className="products">
					{productsData.map((product) => (
						<Card key={product.id}>
							<div className="product">
								<div className="box-image">
									<Card.Title> id: {product.id}</Card.Title>
									<Card.Title>{product.title}</Card.Title>
									<Card.Text>kr {product.price}</Card.Text>
									<Link to={`/edit/${product.id}`} key={product.price}>
										<Button variant="primary">edit item</Button>
									</Link>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</>
	);
}

export default AdminProducts;
