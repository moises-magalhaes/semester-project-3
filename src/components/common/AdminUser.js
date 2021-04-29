import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { baseUrl } from "../settings/Api";
import AdminLogin from "./AdminLogin";

function AdminUser() {
	// useEffect(() => {
	// 	url();
	// }, []);

	// const url = async (email, password) => {
	// 	const data = JSON.stringify({ indentifier: email, password: password });
	// 	const options = {
	// 		method: "POST",
	// 		body: data,
	// 		headers: {
	// 			"content-type": "application/json",
	// 		},
	// 	};
	// 	await fetch(baseUrl + `/auth/local`).then((response) => response.json());

	//     catch(error){
	//         console.log(error);
	//     }
	// };

	// const url = baseUrl + "/auth/local";
	// const data = JSON.stringify({indentifier: email, password: password});

	// const options = {
	//     method: "POST",
	//     body: data,
	//     headers: {
	//         "content-type": "application/json",
	//     },
	// }

	const adminUserInfo = {
		email: "admin@admin.com",
		password: "admin123",
	};

	const [user, setUser] = useState({ name: "", email: "" });
	const [error, setError] = useState("");

	const Login = (details) => {
		console.log(details);

		if (
			details.email === adminUserInfo.email &&
			details.password === adminUserInfo.password
		) {
			console.log("Logged in");

			setUser({
				name: details.name,
				email: details.email,
			});
		} else {
			console.log("details do not match");
			setError("Details do not match");
		}
	};

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
