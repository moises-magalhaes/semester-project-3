import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import AdminLogin from "./AdminLogin";

async function AdminUser(email, password) {
	const url = baseUrl + "/auth/local";

	const data = JSON.stringify({ identifier: email, password: password });

	const options = {
		method: "POST",
		body: data,
		headers: {
			"content-type": "application/json",
		},
	};

	try {
		const response = await fetch(url, options);
		const json = await response.json();

		console.log(json);
	} catch (error) {
		console.log("error", error);
	}

	// const [addLogin, setAddLogin] = useState({
	// 	email: "",
	// 	password: "",
	// 	login: false,
	// 	store: "",
	// });
	// const [error, setError] = useState("");

	// const Login = (details) => {
	// 	console.log(details);

	// 	fetch(baseUrl + "/auth/local", {
	// 		method: "Post",
	// 		body: JSON.stringify(useState()),
	// 	}).then((response) => {
	// 		response.json().then((result) => {
	// 			console.log("result", result);
	// 			localStorage.setItem(
	// 				"login",
	// 				JSON.stringify({
	// 					login: true,
	// 					token: result.token,
	// 				})
	// 			);
	// 		});
	// 	});
	// };

	// const adminUserInfo = {
	// 	email: "admin@admin.com",
	// 	password: "Pass1234",
	// };

	// const [user, setUser] = useState({ name: "", email: "" });
	// const [error, setError] = useState("");

	// const Login = (details) => {
	// 	console.log(details);

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
	// };

	const Logout = () => {
		setAddLogin({ email: "", password: "" });
	};
	return (
		<>
			<div>
				{" "}
				{/* {addLogin.email !== "" ? ( */}
				{email !== "" ? (
					<div className="welcome">
						<h2>
							Welcome, <span>you </span>
							{/* Welcome, <span>{addLogin.name} </span> */}
						</h2>
						<Button onClick={Logout}> Logout </Button>
					</div>
				) : (
					<AdminLogin />
					// <AdminLogin Login={Login} error={error} />
				)}
			</div>
		</>
	);
}

export default AdminUser;
