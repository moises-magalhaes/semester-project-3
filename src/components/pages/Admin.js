import { Card } from "react-bootstrap";
import PostProducts from "../hooks/PostProducts";
import AdminLogout from "../common/AdminLogout";
import AdminProducts from "../common/AdminProducts";

function Admin({ Logout }) {
	return (
		<div className="edit-page">
			<div className="container">
				<AdminLogout />
				<h1>Admin</h1>
				<div className="welcome">
					<h2>Welcome to Add and edit Page</h2>
					<Card className="add-products">
						<PostProducts />
					</Card>
					<div className="products-to-edit">
						<AdminProducts />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
