import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Edit from "../pages/Edit";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container } from "react-bootstrap";

function NavigationBar() {
	return (
		<>
			<Router key="navbar">
				<div>
					<Navbar bg="light" expand="lg">
						<Container>
							<Col className="columns navbar-column-1" xs={6} sm={9} md={6}>
								<Navbar.Brand href="/">
									<img src="../images/logo-semester-3.svg" alt="logo" />
								</Navbar.Brand>
							</Col>

							<Col
								className="columns navbar-column-2"
								xs={2}
								md={{ order: "last" }}
							>
								<span className="cart-icon">
									<NavLink exact to="/cart">
										<FontAwesomeIcon icon={faShoppingCart} />
									</NavLink>
								</span>
							</Col>
							<Col className="columns navbar-column-3" xs={{ order: "last" }}>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
							</Col>
							<Col className="columns navbar-column-4" xs={{ order: "second" }}>
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="mr-auto">
										<NavLink exact to="/">
											Home
										</NavLink>
										<NavLink exact to="/products">
											Products
										</NavLink>
										<NavLink exact to="/login">
											Login
										</NavLink>
										<NavLink exact to="/admin">
											Admin
										</NavLink>
									</Nav>
								</Navbar.Collapse>
							</Col>
						</Container>
					</Navbar>
					{/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
                */}
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/products">
							<Products />
						</Route>
						<Route path="/products/:id">
							<ProductDetail />
						</Route>
						<Route path="/cart">
							<Cart />
						</Route>
						<Route path="/Login">
							<Login />
						</Route>
						<Route path="/Admin">
							<Admin />
						</Route>
						<Route path="/Edit/:id">
							<Edit />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default NavigationBar;
