import React from "react";
import FeaturedProducts from "../hooks/FeaturedProducts";
import Hero from "../common/Hero";
import Feedback from "../common/Feedback";
import HomeJumbotron from "../common/HomeJumbotron";
import { Container, Row } from "react-bootstrap";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
	return (
		<div id="home">
			<Container>
				<div className="shipping-div">
					<Row>
						<div className="column-1">
							<p>Free Shipping over kr 200,00</p>
						</div>
						<div className="column-2">
							<FontAwesomeIcon icon={faTruck} />
						</div>
					</Row>
				</div>
			</Container>
			<Hero />
			<Container>
				<div className="introduction">
					<h1>Welcome to SuperBoutique Website</h1>
					<h2>The best sport products in Bergen</h2>
				</div>
				<HomeJumbotron />
				<FeaturedProducts />
				<Feedback />
			</Container>
		</div>
	);
}

export default Home;
