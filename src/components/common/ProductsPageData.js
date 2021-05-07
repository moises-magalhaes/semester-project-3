import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import AllProducts from "./AllProducts";

function ProductsPageData() {
	const [productsData, setData] = useState([]);
	const [search, setSearch] = useState("");
	const [filteredSearch, setFilteredSearch] = useState([]);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		await fetch(baseUrl + "/products/")
			.then((response) => response.json())
			.then((json) => setData(json));
	};

	// search box

	useEffect(() => {
		setFilteredSearch(
			productsData.filter((product) => {
				return (
					product.title.toLowerCase().includes(search.toLowerCase()) ||
					product.description.toLowerCase().includes(search.toLowerCase())
				);
			})
		);
	}, [search, productsData]);

	return (
		<>
			<div className="products-page">
				<h1>Our Products</h1>
				<div className="search-box">
					<input
						className="searchInput"
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search"
					/>
				</div>
			</div>

			<div className="products">
				{filteredSearch.map((product) => (
					<Card>
						<div className="product" key={product.title}>
							<Card.Img
								variant="top"
								src={baseUrl + product.image.formats.medium.url}
							/>
							<Card.Body>
								<Card.Title>{product.title}</Card.Title>
								<Card.Text>kr {product.price}</Card.Text>
								<Link to={`/products/${product.id}`} key={product.price}>
									<Button variant="primary">Go to product</Button>
								</Link>
							</Card.Body>
						</div>
					</Card>
				))}
			</div>
		</>
	);
}

export default ProductsPageData;
