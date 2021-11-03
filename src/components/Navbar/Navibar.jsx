import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div `
a, .navbar-nav .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
        color: white
    };
    text-decoration: none
}
`
const Navibar = () => {
    return(
        <>
        <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <NavbarBrand><Link to="/home">Elite House</Link></NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav"/>
            <NavbarCollapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink><Link to="/home">Home</Link></NavLink>
                    <NavLink><Link to="/profile">Profile</Link></NavLink>
                    <NavLink><Link to="/users">Users</Link></NavLink>
                </Nav>
            </NavbarCollapse>
            </Container>
        </Navbar>
        </Styles>   
        </>
    )
}

export default Navibar;