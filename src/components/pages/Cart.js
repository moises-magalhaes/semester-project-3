import React from "react";
import CartData from "../hooks/CartData";

function Cart() {
	return (
		<div className="container" id="cartPage">
			<h1>Cart</h1>
			<CartData />
		</div>
	);
}

export default Cart;
