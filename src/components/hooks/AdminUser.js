import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import AdminLogin from "../common/AdminLogin";
import PostProducts from "./PostProducts";
import AdminProducts from "../common/AdminProducts";

function AdminUser() {
	const [user, setUser] = useState({
		identifier: "",
		password: "",
		login: false,
		token: "",
	});

	const [error, setError] = useState(null);

	const Login = (details) => {
		fetch(baseUrl + "/auth/local", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},

			body: JSON.stringify({
				identifier: details.email,
				password: details.password,
			}),
		}).then((response) => {
			response.json().then((result) => {
				if (result.message) {
					setError(result.message[0].messages[0].message);
				} else {
					localStorage.setItem(
						"login",
						JSON.stringify({
							login: true,
							token: result.jwt,
						})
					);
					setUser({
						identifier: details.email,
						login: true,
						token: result.jwt,
					});
				}
			});
		});
	};

	console.log(user.token);

	const Logout = () => {
		localStorage.removeItem("login");
		setUser({
			identifier: "",
			login: false,
			token: "",
		});
	};

	return (
		<>
			<div>
				{error && (
					<div className="error">
						<p>{error}</p>
					</div>
				)}
				{user.token !== "" ? (
					<div className="edit-page">
						<h1>Welcome to Add and edit Page</h1>

						<Card className="add-products">
							<h2>Add Products here</h2>
							<PostProducts />

							<Button variant="secondary" onClick={Logout} className="logout">
								Logout
							</Button>
						</Card>

						<div className="products-to-edit">
							<AdminProducts />
						</div>
					</div>
				) : (
					<AdminLogin Login={Login} error={error} />
				)}
			</div>
		</>
	);
}

export default AdminUser;
