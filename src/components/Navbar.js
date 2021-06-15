import React from "react";
import { Navbar, NavLink, Nav } from "react-bootstrap";
import {  Link, useLocation, withRouter } from "react-router-dom";

function Topbar({location}) {
    
    const {pathname} = location;
    
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Andy Pedonti</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" active={pathname=="/"}>{("Home")}</Nav.Link>
      <Nav.Link href="/portfolio" active={pathname=="/"}>{("Portfolio")}</Nav.Link>
      <Nav.Link href="/intrests" active={pathname=="/"}>{("Intrests")}</Nav.Link>
     
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        
 );
}

export default withRouter(Topbar);


