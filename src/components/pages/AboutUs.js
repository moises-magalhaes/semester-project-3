import React from "react";
import { Container } from "react-bootstrap";
import Map from "../common/utils/Map";

function AboutUs() {
	return (
		<Container>
			<h1>About</h1>
			<p>
				Super Boutique is a company created by friends that love sports and
				outdoor life, with the desire to offer the best quality of products for
				several sports and free time activities. In a place were it rains
				constantly and breathtaking nature, amazing city and different
				opportunities, we want give the best sport materials for you to just
				enjoy the tour.
			</p>

			<h2>Find us in our Address</h2>
			<p>Fosswinckels gate 18, 5007 Bergen</p>

			<h2>Contact Us</h2>
			<p>Send us Email by contact@superboutique.no</p>
			<Map />
		</Container>
	);
}

export default AboutUs;
