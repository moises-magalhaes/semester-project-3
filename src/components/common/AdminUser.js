import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import AdminLogin from "./AdminLogin";

function AdminUser(email, password) {
	const [user, setUser] = useState({
		identifier: email,
		password: password,
	});

	// const data = JSON.stringify({ identifier: email, password: password });

	const [error, setError] = useState("");

	fetch(baseUrl + "/auth/local", {
		method: "Post",
		body: JSON.stringify(useState({ user })),
		// body: JSON.stringify(useState()),
	}).then((response) => {
		response.json().then((result) => {
			console.log("result", result);
			localStorage.setItem(
				"login",
				JSON.stringify({
					login: true,
					token: result.token,
				})
			);
		});
	});

	// const adminUserInfo = {
	// 	email: "admin@admin.com",
	// 	password: "Pass1234",
	// };

	// const [user, setUser] = useState({ name: "", email: "" });
	// const [error, setError] = useState("");

	const Login = (details) => {
		console.log(details);
	};
	// 	if (
	// 		details.email === adminUserInfo.email &&
	// 		details.password === adminUserInfo.password
	// 	) {
	// 		console.log("Logged in");

	// 		setUser({
	// 			name: details.name,
	// 			email: details.email,
	// 		});
	// 	} else {
	// 		console.log("details do not match");
	// 		setError("details do not match");
	// 	}

	const Logout = () => {
		setUser({ name: "", email: "" });
	};
	return (
		<>
			<div>
				{" "}
				{user.email !== "" ? (
					<div className="welcome">
						<h2>
							Welcome, <span>{user.name} </span>
						</h2>
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
