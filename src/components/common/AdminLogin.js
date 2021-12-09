import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AdminLogin({ Login, error }) {
	const [details, setDetails] = useState({ name: "", email: "", password: "" });

	const submitHandler = (e) => {
		e.preventDefault();
		Login(details);
	};

	return (
		<>
			<h1>Login</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={(e) => setDetails({ ...details, email: e.target.value })}
						value={details.email}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={(e) =>
							setDetails({ ...details, password: e.target.value })
						}
						value={details.password}
						suggested="current-password"
					/>
				</Form.Group>

				<Button className="submitButton" variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</>
	);
}

export default AdminLogin;
