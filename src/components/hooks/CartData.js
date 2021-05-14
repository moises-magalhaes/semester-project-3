import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmptyCart from "../common/EmptyCart";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("shoes") || "[]");

function CartData() {
	const [cart, setCart] = useState([cartFromLocalStorage]);

	useEffect(() => {
		const data = localStorage.getItem("shoes");
		if (data) {
			setCart(JSON.parse(data));
		}
	}, []);

	const removeFromCart = (productToRemove) => {
		setCart(cart.filter((product) => product !== productToRemove));
	};

	// Updating localStorage after removal of Items
	useEffect(() => {
		localStorage.setItem("shoes", JSON.stringify(cart));
	});

	// Total value
	const sum = cart.reduce(
		(accumulator, product) => accumulator + product.price,
		0
	);

	// Fixed Total with 2 decimal number
	let TotalValue = sum.toFixed(2);

	if (cart.length === 0) {
		return <EmptyCart />;
	} else {
		return (
			<>
				<div className="products">
					{cart.map((product, idx) => (
						<Card>
							<div className="product" key={idx}>
								<Card.Title>{product.title}</Card.Title>
							
								<Card.Title>kr {product.price}</Card.Title>
								<Button
									variant="primary"
									onClick={() => removeFromCart(product)}
								>
									Remove from cart
								</Button>

								<Link to="/products">
									<Button variant="secondary"> back to shopping</Button>
								</Link>
							</div>
						</Card>
					))}
				</div>
				<div className="payment">
					<h3>Total price: {TotalValue}</h3>
					<Button variant="primary">Pay now</Button>
				</div>
			</>
		);
	}
}

export default CartData;
