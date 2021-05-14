import { Button } from "bootstrap";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import PostProducts from "../hooks/PostProducts";
import AdminUser from "../hooks/AdminUser";

function Admin({ Logout }) {
	return (
		<div className="container">
			<h1>Admin</h1>
			<div className="welcome">
				<h2>Welcome to Add and edit Page</h2>

				<Card>
					<PostProducts />

					<Button variant="secondary" onClick={Logout} className="logout">
						Logout
					</Button>
				</Card>
			</div>
		</div>
	);
}

export default Admin;
