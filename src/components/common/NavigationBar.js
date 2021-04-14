import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button  from 'react-bootstrap/Button';


function NavigationBar() {
    return (
        <>
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
        </>
    )
}

export default NavigationBar
