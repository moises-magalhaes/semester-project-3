import React from "react";
import FeaturedProducts from "../hooks/FeaturedProducts";
import Hero from "../common/Hero";

function Home() {
	return (
		<div id="home">
			<Hero />
			<div className="container">
				<div className="introduction">
					<h1>Welcome to SuperBoutique Website</h1>
					<h2>The best sport products in town</h2>
				</div>
				<FeaturedProducts />
			</div>
		</div>
	);
}

export default Home;
