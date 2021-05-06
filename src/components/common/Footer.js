import React from "react";

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footerWrapper">
					<div className="container">
						<div className="row">
							{/* colum 1 */}
							<div className="col-md-3 col-sm-6">
								<h4>Page Map</h4>
								<ul className="list-unstyled">
									<li>Home</li>
									<li>About</li>
									<li>Products</li>
								</ul>
							</div>
							{/* colum 2 */}
							<div className="col-md-3 col-sm-6">
								<h4>Follow on social media</h4>
								<ul className="list-unstyled">
									<li>facebook</li>
									<li>instagram</li>
									<li>Twitter</li>
								</ul>
							</div>
							<div className="footer-bottom">
								<p className="text-xs-center">
									&copy; Home Decor - All Rights Reserved
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
		</>
	);
}

export default Footer;
