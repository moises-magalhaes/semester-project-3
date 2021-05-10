import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeJumbotron() {
	return (
		<>
			<Jumbotron>
				<Container>
					<h1>
						Practice Sports
						<br /> with quality
					</h1>
					<p>
						Here you find the best <br /> sport products with the best prices.
					</p>
					<p>
						<Link to="/products">
							<Button variant="primary">See our Products</Button>
						</Link>
					</p>
				</Container>
			</Jumbotron>
		</>
	);
}

export default HomeJumbotron;
