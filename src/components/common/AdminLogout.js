import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const AdminLogout = () => {
	const history = useHistory();

	const logout = () => {
		try {
			localStorage.removeItem("login");
			history.push("/login");
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<Button onClick={logout} variant="secondary" className="logout">
			Logout
		</Button>
	);
};

export default AdminLogout;
