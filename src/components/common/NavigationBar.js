import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button  from 'react-bootstrap/Button';
import Home from '../pages/Home';
import Products from '../pages/Products';


function NavigationBar() {
    return (
    <>
        <Router>      
            <div>

            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/products">Products</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                
                {/* <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                </ul> */}

                {/* <hr /> */}

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
                <Route path="/products">
                    <Products />
                </Route>
                </Switch>
            </div>
        </Router>
        </>
  )

}

export default NavigationBar
