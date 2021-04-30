import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AdminLogin from "./AdminLogin";
import axios from "axios";

function AdminUser() {
<<<<<<< HEAD
	const [user, setUser] = useState({ name: "", email: "" });
	const [error, setError] = useState("");

	const Login = (details) => {
		axios
			.post(baseUrl + "/auth/local", {
				identifier: "admin@admin.com",
				password: "Pass1234",
                
			})
			.then((response) => {
				//Store user token in cookie or localstorage, then use it in all next requests.
				console.log("Your user token", response.data.jwt);
				console.log("Logged in");
			})
			.catch((error) => {
				// Something wrong with auth. Wrong credentials maybe.
				console.log("An error occurred:", error.response);
				setError("Details do not match");
			});


            if (
                details.email === identifier &&
                details.password === password
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
                }
                
    // const adminUserInfo = {
	// 	email: "admin@admin.com",
	// 	password: "admin123",
	// };
=======
	const adminUserInfo = {
		email: "admin@admin.com",
		password: "admin123",
	};
>>>>>>> parent of 2905bb7 (Fetch from Strapi not working)

	// const [user, setUser] = useState({ name: "", email: "" });
	// const [error, setError] = useState("");

	// const Login = (details) => {
	// 	console.log(details);

	// 	if (
	// 		details.email === adminUserInfo.email &&
	// 		details.password === adminUserInfo.password
	// 	) {
	// 		console.log("Logged in");

<<<<<<< HEAD
	// 		setUser({
	// 			name: details.name,
	// 			email: details.email,
	// 		});
	// 	} else {
	// 		console.log("details do not match");
	// 		setError("Details do not match");
	// 	}
	// };
=======
			setUser({
				name: details.name,
				email: details.email,
			});
		} else {
			console.log("details do not match");
		}
	};
>>>>>>> parent of 2905bb7 (Fetch from Strapi not working)

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
