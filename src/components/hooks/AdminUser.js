import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import AdminLogin from "../common/AdminLogin";
import PostProducts from "./PostProducts";

function AdminUser() {
	const [user, setUser] = useState({
		identifier: "",
		password: "",
		login: false,
		token: "",
	});

	const [error, setError] = useState("");

	const Login = (details) => {
		console.log(details);

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
					console.log("wrong credentials");
					setError("Wrong credentials");
				} else {
					localStorage.setItem(
						"login",
						JSON.stringify({
							login: true,
							token: result.jwt,
						})
					);

					console.log("Signed in");
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
			<div className="container">
				{" "}
				{user.token !== "" ? (
					<div className="welcome">
						<h2>
							Welcome, <span>{user.username} </span>
						</h2>
						<PostProducts />

						<Button onClick={Logout}> Logout </Button>
					</div>
				) : (
					<AdminLogin Login={Login} error={error} />
				)}
			</div>
		</>
	);
}

export default AdminUser;
