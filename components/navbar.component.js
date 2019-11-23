import React from 'react';
import {Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export const NavBar = (props) => {
    return (
         <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>Task NOT Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                        <Nav.Link href="http://localhost:3000/createUser">Create User</Nav.Link>
                    </Nav>
                    <NavItem className="ml-auto">
                    <Button className="btn btn-primary" href="http://localhost:3000/login">Login</Button>
                    </NavItem>
                </Navbar.Collapse>
            </Navbar>
    );
};