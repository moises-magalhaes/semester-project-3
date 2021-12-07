import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import AdminLogin from "../common/AdminLogin";
import { useHistory } from "react-router";

function AdminUser() {
	const [user, setUser] = useState({
		identifier: "",
		password: "",
		login: false,
		token: "",
	});

	const [error, setError] = useState(null);
	const history = useHistory();

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
			history.push("/admin");
		});
	};

	return (
		<>
			<div className="wrapper">
				<Container className="admin-page">
					{error && (
						<div className="error">
							<p>{error}</p>
						</div>
					)}

					<div onSubmit={Login}>
						<AdminLogin Login={Login} error={error} />
					</div>
				</Container>
			</div>
		</>
	);
}

export default AdminUser;
