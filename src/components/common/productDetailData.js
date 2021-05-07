import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
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
	// const [error, setError] = useState("");

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
		await fetch(baseUrl + `/products/${id}`).then((response) => {
			response.json().then((result) => {
				if (result.image.formats === "" || result.image.formats === undefined) {
					return (result.image.formats = "no image added");
				} else {
					setImage(result.image.formats.medium);
				}
			});
		});
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
			<h1>{productData.title}</h1>
			<div className="product-detail">
				<div className="product">
					<Card>
						<div className="box-image">
							<Card.Img variant="top" src={baseUrl + imageData.url} />
						</div>
						<Card.Body>
							<Card.Title>{productData.title}</Card.Title>
							<Card.Text>kr {productData.price}</Card.Text>
							<Button onClick={() => addToCart(productData)}>
								{" "}
								Add to cart
							</Button>
							<Link to="/cart">
								<Button variant="secondary">Go to cart</Button>
							</Link>
						</Card.Body>
					</Card>
				</div>
				<div className="text-description">
					<p>{productData.description}</p>
				</div>
			</div>
			{/* <Link to="/cart" cart={Cart}><Button>Go to cart ({cart.length}) </Button></Link> */}
		</>
	);
}

export default ProductDetailData;
