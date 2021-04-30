import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import AdminUser from "./AdminUser";

function AdminLogin({ Login, error }) {
	const [details, setDetails] = useState({ name: "", email: "", password: "" });

	const submitHandler = (e) => {
		e.preventDefault();
		Login(details);
	};

	return (
		<div>
			<>
				<div className="container">
					{/* <Form onSubmit="{submitHandler}"> */}
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="formBasicName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="Name"
								placeholder="Enter name"
								onChange={(e) =>
									setDetails({ ...details, name: e.target.value })
								}
								value={details.name}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={(e) =>
									setDetails({ ...details, email: e.target.value })
								}
								value={details.email}
							/>
							<Form.Text className="text-muted">Check your email</Form.Text>
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
							/>
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button
							onClick={submitHandler}
							className="submitButton"
							variant="primary"
							type="submit"
						>
							Login
						</Button>
					</Form>
				</div>
			</>
		</div>
	);
}

export default AdminLogin;
