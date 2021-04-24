import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';


function NavigationBar() {
    return (
    <>
        <Router key="navbar">      
            <div>

            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink exact to="/products">Products</NavLink>
                    </Nav>
                   
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
                </Switch>

            </div>
        </Router>
        </>
  )

}

export default NavigationBar
