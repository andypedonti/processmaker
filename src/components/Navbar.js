import React from "react";
import { Navbar, NavLink, Nav, Container, Form } from "react-bootstrap";
import {  Link, useLocation, withRouter } from "react-router-dom";
import "../components/Navbar.css";
import {Github} from '@styled-icons/boxicons-logos/Github';
import { EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {LinkedinWithCircle} from '@styled-icons/entypo-social/LinkedinWithCircle';
import styled from "styled-components";

const Linkedin = styled(LinkedinWithCircle)`
color: #C42021;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

const LittleGithub = styled(Github)`
color: #FFA630;

cursor: pointer;
&:hover {
    color: white;
    
}
`;

const Email = styled(EmailOutline)`
color: #329F5B;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

function Topbar({location}) {
    
    const {pathname} = location;
    
    return(
<Navbar className="Navbar" expand="lg">
  <Navbar.Brand style={{color: "#F7F7F2"}}>Andy Pedonti</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{color: "#F7F7F2"}} href="/" active={pathname==="/"}>{("Home")}</Nav.Link>
      <Nav.Link style={{color: "#F7F7F2"}} href="/portfolio" active={pathname==="/"}>{("Portfolio")}</Nav.Link>
      <Nav.Link style={{color: "#F7F7F2"}} href="/intrests" active={pathname==="/"}>{("Intrests")}</Nav.Link>
    </Nav>
     <Form className="d-flex">
    <Email 
    size="40" 
    onClick={event => window.location.href="mailto:andy.pedonti@gmail.com"}
    />
    <LittleGithub 
    size="40"
    onClick={event => window.location.href="https://github.com/andypedonti"}
    />
    <Linkedin
    size="35" 
    onClick={event => window.location.href="https://www.linkedin.com/in/andy-pedonti/"}
    />
     </Form>
    
  </Navbar.Collapse>
</Navbar>
        
 );
}

export default withRouter(Topbar);


