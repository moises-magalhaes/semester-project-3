import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { baseUrl } from "../settings/Api";

function Hero() {
	const [heroData, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			loadData();
		}, 1000);
	}, []);

	const loadData = async () => {
		await fetch(baseUrl + "/home/")
			.then((response) => {
				if (!response.ok) {
					throw Error(
						"An error has occurred in our database, please return later"
					);
				}
				return response.json();
			})
			.then((json) => setData(json.hero_banner.url))
			.catch((err) => {
				setError(err.message);
			});
	};

	const newUrl = baseUrl + heroData;

	return (
		<>
			<Jumbotron>
				{error && <div className="error">{error}</div>}
				<img src={newUrl} alt="Bergen" />
			</Jumbotron>
		</>
	);
}

export default Hero;
