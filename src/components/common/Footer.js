import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer-wrapper">
					<div className="container">
						<div className="row">
							<Router>
								{/* colum 1 */}
								<div className="col-md-3 col-sm-6">
									<h4>Page Map</h4>
									<ul className="footer-nav d-flex flex-column">
										<Link exact to="/">
											Home
										</Link>
										<Link to="/products">Products</Link>
										<Link to="/cart">Cart</Link>
										<Link to="/login">Login</Link>
										<Link to="/admin">Admin</Link>
									</ul>
								</div>
								{/* colum 2 */}
								<div className="col-md-3 col-sm-6">
									<h4>Follow on social media</h4>
									<ul className="social-media-list">
										<li>
											<FontAwesomeIcon icon={faFacebook} />
										</li>
										<li>
											<FontAwesomeIcon icon={faInstagram} />
										</li>
										<li>
											<FontAwesomeIcon icon={faTwitter} />
										</li>
									</ul>
								</div>
								<div className="col-md-3 col-sm-6"></div>
							</Router>
						</div>
						<div className="footer-bottom">
							<p className="text-xs-center">
								&copy; Home Decor - All Rights Reserved
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
