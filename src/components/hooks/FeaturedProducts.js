import React, { useState, useEffect } from "react";
import { baseUrl } from "../settings/Api";
import AllProducts from "../common/AllProducts";

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
		<div className="featuredProducts">
			{productsDataFiltered.map((product) => (
				<AllProducts
					title={product.title}
					description={product.description}
					image={product.image}
					price={product.price}
					key={product.id}
				/>
			))}
		</div>
	);
}

export default FeaturedProducts;
