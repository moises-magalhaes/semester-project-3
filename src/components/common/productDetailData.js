import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../settings/Api";
import image1 from "../../images/image-1.jpg";

function ProductDetailData() {
	const [productData, setData] = useState({});
	const [imageData, setImage] = useState({});
	const [cart, setCart] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const loadData = async () => {
			await fetch(baseUrl + `/products/${id}`)
				.then((response) => response.json())
				.then((json) => setData(json));
		};
		loadData();
	}, [id]);

	const addToCart = (productData) => {
		setCart([...cart, productData]);
	};
	useEffect(() => {
		const loadImage = async () => {
			await fetch(baseUrl + `/products/${id}`).then((response) => {
				response.json().then((result) => {
					if (
						result.image === null ||
						result.image === undefined ||
						result.image === ""
					) {
						return (result.image = "no image added");
					} else {
						setImage(result.image.formats.medium);
					}
				});
			});
		};

		loadImage();
	}, [id]);

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
							{imageData.url === undefined || null ? (
								<Card.Img variant="top" src={image1} />
							) : (
								<Card.Img variant="top" src={baseUrl + imageData.url} />
							)}
						</div>
						<Card.Body>
							<Card.Title>{productData.title}</Card.Title>
							<Card.Text>kr {productData.price}</Card.Text>
							<div className="text-description">
								<p>{productData.description}</p>
							</div>
							<Button onClick={() => addToCart(productData)}>
								Add to cart
							</Button>
							<Link to="/cart">
								<Button variant="secondary">Go to cart</Button>
							</Link>
						</Card.Body>
					</Card>
				</div>
			</div>
		</>
	);
}

export default ProductDetailData;
