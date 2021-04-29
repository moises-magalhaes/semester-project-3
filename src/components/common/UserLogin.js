import React from "react";
import { Button, Form } from "react-bootstrap";

function UserLogin() {
	return (
		<>
			<div className="container">
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							required
						/>
						<Form.Text className="text-muted"></Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							sugested="current-password"
							required
						/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
}

export default UserLogin;
