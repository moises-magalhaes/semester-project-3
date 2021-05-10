import { Carousel, Col, Container, Image } from "react-bootstrap";
import React from "react";

function Feedback() {
	return (
		<>
			<Carousel>
				<Carousel.Item interval={3000}>
					<div className="userbox">
						<span className="user"></span>
					</div>

					<Carousel.Caption>
						<h3>Great store</h3>
						<p>
							"I boght these nice shoes and fastly they arrived!
							<br /> I am very satisfied"
						</p>
						<p>Jhon Esken</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={2500}>
					<span className="user"></span>
					<Carousel.Caption>
						<h3>Very good products</h3>
						<p>"I got some leggings and they fit perfectly"</p>
						<p>Dany Denucci</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<span className="user"></span>

					<Carousel.Caption>
						<h3>I really love this store</h3>
						<p>
							when I buy or need to return some products because
							<br /> of size or deffect, they always answer <br />
							fast and give nice advices."
						</p>
						<p>Theresa Altidore</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default Feedback;
