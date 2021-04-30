import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../settings/Api";

function ProductDetailData() {
	const [productData, setData] = useState({});
	const [imageData, setImage] = useState({});
	const [cart, setCart] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		await fetch(baseUrl + `/products/${id}`)
			.then((response) => response.json())
			.then((json) => setData(json));
	};

	const addToCart = (productData) => {
		setCart([...cart, productData]);
	};
	useEffect(() => {
		loadImage();
	}, []);

	const loadImage = async () => {
		await fetch(baseUrl + `/products/${id}`)
			.then((response) => response.json())
			.then((json) => setImage(json.image.formats.medium));
	};

	useEffect(() => {
		const data = localStorage.getItem("shoes");
		if (data) {
			setCart(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("shoes", JSON.stringify(cart));
	});

	return (
		<>
			<div className="product">
				<h4>{productData.title}</h4>
				<img src={baseUrl + imageData.url} alt="Shoes" />
				<h4>NOK: {productData.price}</h4>
				<p>{productData.description}</p>
				<Button onClick={() => addToCart(productData)}> Add to cart</Button>
				<Link to="/cart">
					<Button>Go to cart ({cart.length}) </Button>
				</Link>

				{/* <Link to="/cart" cart={Cart}><Button>Go to cart ({cart.length}) </Button></Link> */}
			</div>
		</>
	);
}

export default ProductDetailData;
